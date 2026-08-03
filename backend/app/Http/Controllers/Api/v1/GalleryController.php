<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\MediaItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = MediaItem::query()->where('visibility', 'published');

        // Apply category filter
        if ($request->has('category') && $request->get('category') !== '') {
            $category = $request->get('category');
            $query->whereJsonContains('categories', $category);
        }

        // Apply search filter
        if ($request->has('search') && $request->get('search') !== '') {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('caption', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhereJsonContains('tags', $search);
            });
        }

        // Order by latest
        $query->orderBy('created_at', 'desc');

        $items = $query->get()->map(function (MediaItem $item) {
            $media = $item->getFirstMedia('image');
            
            $url = $media ? $media->getUrl() : null;
            $thumbnail = $media ? $media->getUrl('thumbnail') : null;
            $large = $media ? $media->getUrl('large') : null;
            $responsive = [];

            if ($media) {
                try {
                    $responsive = $media->getResponsiveImageUrls();
                } catch (\Exception $e) {
                    $responsive = [];
                }
            }

            // Fallbacks for seed assets
            if (!$url) {
                $filename = match($item->title) {
                    'LCU Vessel Sailing' => 'lcu-sailing.jpg',
                    'LCU Vessel Docked' => 'lcu-docked.jpg',
                    'Dry Dock Hull Inspection' => 'drydock-inspection.jpg',
                    'Cabin Educational Session' => 'cabin-education.jpg',
                    'Crew and Officers on Deck' => 'crew-deck.jpg',
                    default => null
                };

                if ($filename) {
                    $url = "/gallery/{$filename}";
                    $thumbnail = "/gallery/{$filename}";
                    $large = "/gallery/{$filename}";
                }
            }

            return [
                'id' => $item->id,
                'title' => $item->title,
                'caption' => $item->caption,
                'description' => $item->description,
                'alt_text' => $item->alt_text ?? $item->title,
                'seo_title' => $item->seo_title ?? $item->title,
                'copyright' => $item->copyright ?? '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
                'photographer' => $item->photographer ?? 'Staff',
                'location' => $item->location ?? 'Surabaya, Indonesia',
                'categories' => $item->categories ?? [],
                'tags' => $item->tags ?? [],
                'vessel_id' => $item->vessel_id,
                'project_id' => $item->project_id,
                'news_id' => $item->news_id,
                'url' => $url,
                'thumbnail_url' => $thumbnail,
                'large_url' => $large,
                'responsive_urls' => $responsive,
                'created_at' => $item->created_at ? $item->created_at->toIso8601String() : null,
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => $items,
        ]);
    }
}
