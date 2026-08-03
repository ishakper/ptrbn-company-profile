<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\MediaItem;
use App\Models\Vessel;
use Illuminate\Database\Seeder;

class MediaItemSeeder extends Seeder
{
    public function run(): void
    {
        $vessel = Vessel::first();
        $vesselId = $vessel ? $vessel->id : null;

        $items = [
            [
                'title' => 'LCU Vessel Sailing',
                'caption' => 'RBN Gandha Nusantara 02 LCU vessel sailing in open water.',
                'description' => 'The PT. Pelayaran Nasional Radhika Bahari Nusantara landing craft utility (LCU) vessel, Gandha Nusantara 02, carrying out regular logistics operations in the open waters of the Indonesian archipelago under clear skies.',
                'alt_text' => 'RBN LCU vessel Gandha Nusantara 02 sailing in the ocean',
                'seo_title' => 'PT. RBN LCU Vessel Gandha Nusantara 02 Sailing',
                'copyright' => '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => 'Bambang Kusuma',
                'location' => 'Surabaya, Indonesia',
                'visibility' => 'published',
                'categories' => ['fleet', 'operations', 'gallery'],
                'tags' => ['lcu', 'vessel', 'sailing', 'gandha-nusantara', 'ocean', 'shipping'],
                'filename' => 'lcu-sailing.jpg',
            ],
            [
                'title' => 'LCU Vessel Docked',
                'caption' => 'Gandha Nusantara 02 LCU docked at the harbor ramp.',
                'description' => 'Gandha Nusantara 02 landing craft utility vessel docked at a concrete port jetty ramp for cargo loading operations, showing the vessel bow door and the surrounding clear turquoise coastal waters.',
                'alt_text' => 'PT. RBN LCU vessel docked at concrete harbor ramp',
                'seo_title' => 'LCU Vessel Docked at Port for Cargo Loading',
                'copyright' => '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => 'Bambang Kusuma',
                'location' => 'Surabaya, Indonesia',
                'visibility' => 'published',
                'categories' => ['fleet', 'port', 'gallery'],
                'tags' => ['docked', 'harbor', 'jetty', 'ramp', 'cargo-loading', 'lcu', 'vessel'],
                'filename' => 'lcu-docked.jpg',
            ],
            [
                'title' => 'Dry Dock Hull Inspection',
                'caption' => 'Engineers inspecting ship hull, propeller, and rudder at dry dock.',
                'description' => 'PT. Pelayaran Nasional Radhika Bahari Nusantara safety engineers and surveyors performing dry dock maintenance checks, reviewing the hull, propeller blades, and steering rudder of a vessel (marked with draft number 6 4 2) to ensure seaworthiness.',
                'alt_text' => 'Marine engineers performing dry dock hull, propeller, and rudder inspection',
                'seo_title' => 'Ship Dry Dock Hull and Propeller Safety Inspection',
                'copyright' => '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => 'Hendri Wijaya',
                'location' => 'Surabaya Dry Dock',
                'visibility' => 'published',
                'categories' => ['operations', 'activities', 'culture', 'gallery'],
                'tags' => ['drydock', 'inspection', 'maintenance', 'propeller', 'hull', 'rudder', 'safety', 'engineers'],
                'filename' => 'drydock-inspection.jpg',
            ],
            [
                'title' => 'Cabin Educational Session',
                'caption' => 'RBN crew teaching local school children inside the passenger cabin.',
                'description' => 'PT. RBN Corporate Social Responsibility (CSR) and educational program, inviting school students onboard a vessel passenger cabin for a learning session led by two crew members in Electric Boat safety uniforms.',
                'alt_text' => 'School children attending educational program inside ship cabin',
                'seo_title' => 'RBN Corporate Social Responsibility (CSR) Educational Visit',
                'copyright' => '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => 'Rina Amalia',
                'location' => 'Surabaya Port',
                'visibility' => 'published',
                'categories' => ['activities', 'csr', 'culture', 'gallery'],
                'tags' => ['csr', 'education', 'students', 'ship-cabin', 'crew', 'social-program'],
                'filename' => 'cabin-education.jpg',
            ],
            [
                'title' => 'Crew and Officers on Deck',
                'caption' => 'RBN officers and management standing on the ship deck.',
                'description' => 'Group photo of PT. Pelayaran Nasional Radhika Bahari Nusantara officers, crew, and port management standing on the deck of a vessel, with a life ring and safety signs in background, illustrating team coordination.',
                'alt_text' => 'PT. RBN crew and officers standing on vessel deck',
                'seo_title' => 'PT. RBN Maritime Crew and Management on Vessel Deck',
                'copyright' => '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => 'Hendri Wijaya',
                'location' => 'Surabaya, Indonesia',
                'visibility' => 'published',
                'categories' => ['management', 'activities', 'culture', 'gallery'],
                'tags' => ['crew', 'officers', 'management', 'ship-deck', 'team', 'safety-first'],
                'filename' => 'crew-deck.jpg',
            ],
        ];

        foreach ($items as $data) {
            $filename = $data['filename'];
            unset($data['filename']);
            
            // Link to seeded vessel ID
            $data['vessel_id'] = $vesselId;

            $item = MediaItem::create($data);

            $localPath = public_path("gallery/{$filename}");
            if (file_exists($localPath)) {
                try {
                    $item->addMedia($localPath)
                        ->preservingOriginal()
                        ->toMediaCollection('image');
                } catch (\Exception $e) {
                    // Log error but continue
                }
            }
        }
    }
}
