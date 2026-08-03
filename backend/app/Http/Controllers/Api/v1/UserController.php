<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * UserController constructor.
     */
    public function __construct(
        protected UserRepositoryInterface $userRepository,
        protected UserService $userService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $users = $this->userRepository->paginate(15);

        return $this->paginateResponse(UserResource::collection($users));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @throws \Throwable
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $dto = UserDTO::fromArray($request->validated());
        $user = $this->userService->createUser($dto);

        return $this->successResponse(new UserResource($user), 'User created successfully.', 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $user = $this->userRepository->findOrFail($id);

        return $this->successResponse(new UserResource($user));
    }

    /**
     * Update the specified resource in storage.
     *
     * @throws \Throwable
     */
    public function update(UpdateUserRequest $request, string $id): JsonResponse
    {
        $dto = UserDTO::fromArray($request->validated());
        $user = $this->userService->updateUser($id, $dto);

        return $this->successResponse(new UserResource($user), 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @throws \Throwable
     */
    public function destroy(string $id): JsonResponse
    {
        $this->userService->deleteUser($id);

        return $this->successResponse(null, 'User deleted successfully.');
    }
}
