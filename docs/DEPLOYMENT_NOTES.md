# Deployment Notes: PT Radhika Bahari Nusantara

This document compiles the server-side deployment procedures, environment requirements, and console startup guides.

---

## 1. System Environment Pre-requisites

* **Docker Engine:** v24.0.0 or higher.
* **Docker Compose:** v2.20.0 or higher.
* **Ports Exposed (Dev Environment):**
  * `80`: Nginx Routing Gateway.
  * `5173`: React SPA Development Port.
  * `8000`: Laravel Backend serving endpoint.
  * `5432`: PostgreSQL Database.
  * `6379`: Redis cache/queue/session.
  * `1025` / `8025`: Mailpit SMTP / Web GUI.
  * `8080`: Adminer Database GUI.
  * `4317` / `4318`: OpenTelemetry Collector.
  * `16686`: Jaeger dashboard.
  * `9090`: Prometheus dashboard.
  * `3100`: Loki logs push receiver.
  * `3000`: Grafana dashboards interface.

---

## 2. Platform Startup Walkthrough

### A. Directory Permission Hardening
Before launching the compose stack on target environments, ensure that storage subdirectories exist and have appropriate write permissions:
```bash
# Initialize storage tree
mkdir -p backend/storage/framework/{views,sessions,cache/data} backend/storage/logs backend/bootstrap/cache

# Permit volume writing
chmod -R 777 backend/storage backend/bootstrap/cache
```

### B. Starting Containers
Execute compose startup commands:
```bash
# Development stack run
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Verify container healths
docker ps
```

### C. Database Bootstrapping
Build database schemas, execute seeders, and generate filesystem symbolic links inside the backend container:
```bash
# Execute schema builds
docker compose exec rbn-backend php artisan migrate:fresh --seed

# Sync public file paths
docker compose exec rbn-backend php artisan storage:link

# Compile system configurations
docker compose exec rbn-backend php artisan optimize
```
