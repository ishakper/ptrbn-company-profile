<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\FleetCategory;
use App\Models\FleetSpecification;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\Vessel;
use Illuminate\Database\Seeder;

class ServicesAndFleetSeeder extends Seeder
{
    public function run(): void
    {
        // ── Seed Service Categories & Services ──
        $catShipping = ServiceCategory::create([
            'name' => 'Cargo Shipping & Maritime Transportation',
            'slug' => 'cargo-shipping-maritime-transportation',
            'description' => 'Regular scheduled transport solutions for standardized and bulk cargo across the Indonesian archipelago.',
            'status' => 'published',
        ]);

        $catLogistics = ServiceCategory::create([
            'name' => 'Custom B2B Logistics & Heavy-Lift Solutions',
            'slug' => 'custom-b2b-logistics-heavy-lift-solutions',
            'description' => 'Tailored maritime engineering cargo transport for industrial, mining, and civil infrastructure projects.',
            'status' => 'published',
        ]);

        Service::create([
            'service_category_id' => $catShipping->id,
            'title' => 'Inter-Island Containerized Shipping',
            'slug' => 'inter-island-containerized-shipping',
            'description' => 'Regular scheduled container shipping services connecting major trade ports across the Indonesian archipelago. Offering standard dry containers, flat racks, open-tops, and temperature-controlled reefers.',
            'advantages' => [
                'Weekly scheduled departures from Surabaya and Jakarta',
                'Modern refrigerated cargo (reefer) container options',
                'Real-time vessel position tracking and SMS delivery updates',
            ],
            'status' => 'published',
        ]);

        Service::create([
            'service_category_id' => $catShipping->id,
            'title' => 'Dry & Liquid Bulk Cargo Transport',
            'slug' => 'dry-liquid-bulk-cargo-transport',
            'description' => 'High-volume logistics solutions for coal, agricultural grains, mineral sand, cement, and liquid products. Utilizing self-discharging bulk carriers to optimize harbor unloading speed.',
            'advantages' => [
                'Specialized self-discharging grab-bucket vessel cranes',
                'Dust-control and weather-tight cargo holds',
                'Certified safety compliance audits by BKI inspectors',
            ],
            'status' => 'published',
        ]);

        Service::create([
            'service_category_id' => $catLogistics->id,
            'title' => 'Project Cargo & Heavy-Lift Engineering',
            'slug' => 'project-cargo-heavy-lift-engineering',
            'description' => 'End-to-end transport management for oversized industrial machinery, mining vehicles, wind turbine blades, and civil infrastructure materials. Supported by custom loading plan engineers.',
            'advantages' => [
                'Onboard vessel crane loading capacity up to 120 tons',
                'Custom multi-axle trailers and roll-on/roll-off access',
                'Comprehensive marine hull and transit cargo insurance',
            ],
            'status' => 'published',
        ]);

        // ── Seed Fleet Categories (Vessel Types) ──
        $catContainer = FleetCategory::create([
            'name' => 'Container Ships',
            'slug' => 'container-ships',
            'description' => 'Cellular container ships equipped for efficient loading of TEU containerized goods.',
            'status' => 'published',
        ]);

        $catBulk = FleetCategory::create([
            'name' => 'Bulk Carriers',
            'slug' => 'bulk-carriers',
            'description' => 'Single-deck cargo vessels designed to transport unpacked bulk minerals, coal, and agricultural goods.',
            'status' => 'published',
        ]);

        $catCargo = FleetCategory::create([
            'name' => 'General Cargo Vessels',
            'slug' => 'general-cargo-vessels',
            'description' => 'Versatile multi-deck gear vessels capable of carrying industrial machinery, timber, and project heavy-lifts.',
            'status' => 'published',
        ]);

        // ── Seed 48 Vessels with Specifications ──
        $vesselPrefixes = ['MV Nusantara', 'MV Radhika', 'MV Bahari', 'MV RBN'];
        $vesselSurnames = ['Indah', 'Jaya', 'Sejahtera', 'Progress', 'Pioneer', 'Voyager', 'Sentosa', 'Agung', 'Maju', 'Abadi', 'Lestari', 'Kencana'];

        $imoCounter = 9800000;
        $totalVessels = 48;

        for ($i = 1; $i <= $totalVessels; $i++) {
            $prefix = $vesselPrefixes[($i - 1) % count($vesselPrefixes)];
            $surname = $vesselSurnames[($i - 1) % count($vesselSurnames)];

            // Append number suffix to ensure unique names if we loop beyond surnames list
            $nameSuffix = ($i > count($vesselSurnames)) ? ' '.(intval(($i - 1) / count($vesselSurnames)) + 1) : '';
            $vesselName = "{$prefix} {$surname}{$nameSuffix}";

            // Assign type
            if ($i % 3 === 1) {
                $category = $catContainer;
                $vesselType = 'Container';
            } elseif ($i % 3 === 2) {
                $category = $catBulk;
                $vesselType = 'Bulk Carrier';
            } else {
                $category = $catCargo;
                $vesselType = 'General Cargo';
            }

            $vessel = Vessel::create([
                'fleet_category_id' => $category->id,
                'name' => $vesselName,
                'imo_number' => 'IMO'.($imoCounter + $i),
                'status' => ($i % 12 === 0) ? 'maintenance' : (($i % 15 === 0) ? 'charter' : 'active'),
            ]);

            // Add specifications
            if ($vesselType === 'Container') {
                $gt = 15000 + ($i * 150);
                $dwt = 20000 + ($i * 200);
                $loa = 160.0 + floatval($i % 10);
                $draft = 8.5 + floatval($i % 5) * 0.3;
            } elseif ($vesselType === 'Bulk Carrier') {
                $gt = 25000 + ($i * 200);
                $dwt = 35000 + ($i * 250);
                $loa = 190.0 + floatval($i % 10);
                $draft = 10.5 + floatval($i % 5) * 0.4;
            } else {
                $gt = 8000 + ($i * 100);
                $dwt = 11000 + ($i * 150);
                $loa = 120.0 + floatval($i % 10);
                $draft = 6.5 + floatval($i % 5) * 0.2;
            }

            FleetSpecification::create([
                'vessel_id' => $vessel->id,
                'gross_tonnage' => intval($gt),
                'deadweight_tonnage' => intval($dwt),
                'length_overall' => round($loa, 2),
                'draft_depth' => round($draft, 2),
                'classification' => 'BKI',
            ]);
        }
    }
}
