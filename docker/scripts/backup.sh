#!/bin/sh
# RBN PostgreSQL GPG-Encrypted Backup Script
# Executes pg_dump, encrypts via GPG, and uploads to Cloudflare R2

BACKUP_DIR="/backup"
DB_HOST="rbn-postgres"
DB_USER="${DB_USERNAME:-db_user}"
DB_NAME="${DB_DATABASE:-rbn_prod}"
GPG_RECIPIENT="${BACKUP_GPG_RECIPIENT:-compliance@rbn-group.com}"
TIMESTAMP=$(date +%F_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/db_$TIMESTAMP.sql"
ENCRYPTED_FILE="$BACKUP_FILE.gpg"

echo "[$(date)] Starting logical database backup..."

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# 1. Run PostgreSQL dump
PGPASSWORD="$DB_PASSWORD" pg_dump -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -F c -f "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "[$(date)] Database dump created successfully: $BACKUP_FILE"
    
    # 2. Encrypt dump using GPG
    gpg --encrypt --recipient "$GPG_RECIPIENT" --trust-model always --output "$ENCRYPTED_FILE" "$BACKUP_FILE"
    
    if [ $? -eq 0 ]; then
        echo "[$(date)] Encryption completed successfully: $ENCRYPTED_FILE"
        
        # 3. Clean unencrypted temp file
        rm "$BACKUP_FILE"
        
        # 4. Upload encrypted backup to Cloudflare R2 bucket (S3 protocol)
        # Assumes aws-cli is configured in the environment
        if command -v aws >/dev/null 2>&1; then
            aws s3 cp "$ENCRYPTED_FILE" "s3://${CF_R2_BUCKET}/db_$TIMESTAMP.sql.gpg" --endpoint-url "https://${CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
            if [ $? -eq 0 ]; then
                echo "[$(date)] Encrypted backup uploaded successfully to Cloudflare R2."
            else
                echo "[$(date)] ERROR: Cloudflare R2 upload failed."
            fi
        else
            echo "[$(date)] WARNING: aws-cli not found, backup remains locally in $BACKUP_DIR."
        fi
    else
        echo "[$(date)] ERROR: GPG encryption failed."
        exit 1
    fi
else
    echo "[$(date)] ERROR: PostgreSQL dump failed."
    exit 1
fi
