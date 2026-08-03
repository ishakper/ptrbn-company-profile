<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Certification;
use App\Models\CompanyProfile;
use App\Models\CoreValue;
use App\Models\Hero;
use App\Models\LegalDocument;
use App\Models\Management;
use App\Models\VisionMission;
use Illuminate\Database\Seeder;

class CorporateIdentitySeeder extends Seeder
{
    public function run(): void
    {
        // 1. Hero Banner
        Hero::updateOrCreate(
            ['title' => "Connecting Indonesia's Archipelago Through Maritime Excellence"],
            [
                'badge' => 'Est. 1999 · Surabaya, Indonesia',
                'subtitle' => 'PT. Pelayaran Nasional Radhika Bahari Nusantara delivers reliable shipping and cargo logistics services across Indonesia\'s 17,000+ islands.',
                'primary_button_text' => 'Explore Services',
                'primary_button_url' => '/services',
                'secondary_button_text' => 'Contact Our Team',
                'secondary_button_url' => '/contact',
                'status' => 'published',
                'order' => 1,
                'meta_title' => 'PT. Pelayaran Nasional Radhika Bahari Nusantara — Maritime Shipping & Logistics',
                'meta_description' => 'Indonesia\'s trusted shipping and domestic cargo logistics company based in Surabaya.',
            ]
        );

        // 2. Company Profile
        CompanyProfile::updateOrCreate(
            ['slug' => 'pt-radhika-bahari-nusantara'],
            [
                'title' => 'PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'summary' => 'Indonesia\'s premier archipelagic maritime shipping and domestic cargo logistics company based in Surabaya.',
                'content' => 'Founded in 1999, PT. Pelayaran Nasional Radhika Bahari Nusantara has grown into a leading domestic cargo logistics enterprise. Operating from Tanjung Perak Port, Surabaya, we manage a modern fleet serving major inter-island sea routes across Indonesia.',
                'founded_year' => '1999',
                'headquarters' => 'Jl. Penjaringan Asri XV PS IC No. 34, Kel. Penjaringan Sari, Kec. Rungkut SURABAYA - 60297',
                'status' => 'published',
                'meta_title' => 'Company Profile | PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'meta_description' => 'Learn about PT. Pelayaran Nasional Radhika Bahari Nusantara\'s 25-year history, vision, and maritime expertise.',
            ]
        );

        // 3. Vision & Mission
        VisionMission::updateOrCreate(
            ['title' => 'Premier Maritime Logistics Leader'],
            [
                'type' => 'vision',
                'description' => 'To be the most trusted and efficient archipelagic shipping and logistics provider in Southeast Asia.',
                'order' => 1,
                'status' => 'published',
            ]
        );

        VisionMission::updateOrCreate(
            ['title' => 'Safe & Reliable Archipelago Connectivity'],
            [
                'type' => 'mission',
                'description' => 'Connecting Indonesian islands with zero-harm maritime operations, punctual delivery, and sustainable fleet management.',
                'order' => 2,
                'status' => 'published',
            ]
        );

        // 4. Core Values
        $values = [
            ['code' => 'SAFE', 'title' => 'Safety First', 'description' => 'Zero compromise on maritime safety and environmental protection.', 'order' => 1],
            ['code' => 'RELIABLE', 'title' => 'Reliability & Speed', 'description' => 'Punctual cargo transit schedules across all inter-island routes.', 'order' => 2],
            ['code' => 'INTEGRITY', 'title' => 'Integrity & Trust', 'description' => 'Transparent governance and honest client partnerships.', 'order' => 3],
            ['code' => 'INNOVATION', 'title' => 'Digital Innovation', 'description' => 'Modern vessel tracking and real-time cargo logistics management.', 'order' => 4],
        ];

        foreach ($values as $val) {
            CoreValue::updateOrCreate(
                ['code' => $val['code']],
                [
                    'title' => $val['title'],
                    'description' => $val['description'],
                    'order' => $val['order'],
                    'status' => 'published',
                ]
            );
        }

        // 5. Management Board
        $leaders = [
            [
                'name' => 'Capt. Radhika Pratama',
                'slug' => 'radhika-pratama',
                'position' => 'President Director & CEO',
                'department' => 'Executive Board',
                'bio' => '25+ years of maritime shipping experience. Master Mariner certified.',
                'order' => 1,
            ],
            [
                'name' => 'Budi Santoso, M.Mar',
                'slug' => 'budi-santoso',
                'position' => 'Director of Operations',
                'department' => 'Operations',
                'bio' => 'Oversees fleet operations, port logistics, and vessel maintenance.',
                'order' => 2,
            ],
            [
                'name' => 'Siti Rahma, S.E., M.M.',
                'slug' => 'siti-rahma',
                'position' => 'Director of Finance',
                'department' => 'Finance',
                'bio' => 'Manages corporate financial strategy, investment, and compliance.',
                'order' => 3,
            ],
        ];

        foreach ($leaders as $leader) {
            Management::updateOrCreate(
                ['slug' => $leader['slug']],
                [
                    'name' => $leader['name'],
                    'position' => $leader['position'],
                    'department' => $leader['department'],
                    'bio' => $leader['bio'],
                    'order' => $leader['order'],
                    'status' => 'published',
                ]
            );
        }

        // 6. Certifications
        Certification::updateOrCreate(
            ['code' => 'ISO-9001-2015'],
            [
                'name' => 'ISO 9001:2015 Quality Management System',
                'issuing_organization' => 'International Organization for Standardization',
                'issue_date' => '2020-01-15',
                'expiry_date' => '2026-12-31',
                'description' => 'Certified quality management for maritime shipping and port logistics.',
                'order' => 1,
                'status' => 'published',
            ]
        );

        // 7. Legal Documents
        LegalDocument::updateOrCreate(
            ['document_number' => 'SIUPAL-1999-RBN'],
            [
                'title' => 'SIUPAL (Surat Izin Usaha Perusahaan Angkutan Laut)',
                'issuing_authority' => 'Kementerian Perhubungan Republik Indonesia',
                'summary' => 'Official Indonesian sea transportation business license.',
                'status' => 'published',
            ]
        );
    }
}
