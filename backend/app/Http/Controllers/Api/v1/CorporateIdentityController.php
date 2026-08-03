<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use App\Models\CompanyProfile;
use App\Models\CoreValue;
use App\Models\Hero;
use App\Models\LegalDocument;
use App\Models\Management;
use App\Models\VisionMission;
use Illuminate\Http\JsonResponse;

class CorporateIdentityController extends Controller
{
    /**
     * Get all corporate identity data for frontend presentation.
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'data' => [
                'hero' => Hero::where('status', 'published')->orderBy('order')->first(),
                'company_profile' => CompanyProfile::where('status', 'published')->first(),
                'vision_missions' => VisionMission::where('status', 'published')->orderBy('order')->get(),
                'core_values' => CoreValue::where('status', 'published')->orderBy('order')->get(),
                'managements' => Management::where('status', 'published')->orderBy('order')->get(),
                'certifications' => Certification::where('status', 'published')->orderBy('order')->get(),
                'legal_documents' => LegalDocument::where('status', 'published')->get(),
            ],
        ]);
    }
}
