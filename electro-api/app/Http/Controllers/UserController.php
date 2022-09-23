<?php

namespace App\Http\Controllers;

use App\Models\OrderRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function getUserById(Request $request)
    {
        $user = User::where(['id' => $request['user_id']])->first();

        if (is_null($user)) {
            return [
                'data' => [],
                'message' => "No Data Found"
            ];
        }

        return [
            'data' => $user->toArray(),
            'message' => "User Data"
        ];

    }

    public function userStatusChange(Request $request): array
    {
        $statusUpdate = User::where(['id' => $request['user_id']])->update(['status' => $request['status']]);

        if (!$statusUpdate) {
            return [
                'data' => [],
                'message' => "Status not change"
            ];
        }

        return [
            'data' => [],
            'message' => "Status Update"
        ];
    }

    public function getAllCurrentLocation(Request $request): array
    {
        $statusUpdate = User::where(['status' => 1])->orWhere('address', 'like', "%{$request['address']}%")->get();
        if ($statusUpdate) {
            return [
                'data' => $statusUpdate,
                'message' => "Data found"
            ];
        }

        return [
            'data' => [],
            'message' => "Not found "
        ];
    }

    public function orderRequest(Request $request): array
    {

        OrderRequest::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'user_id' => $request['user_id'],
            'request_by_user_id' => $request['request_by_user_id'],
            'status' => 0,
        ]);

        return [
            'data' => [],
            'message' => "Done"
        ];
    }

    public function orderRequestGet(Request $request)
    {
       $orderRequest =  OrderRequest::where([
            'request_by_user_id' => $request['user_id']
        ])->get();

        return [
            'data' => $orderRequest,
            'message' => "Done"
        ];
    }

    public function orderRequestSend(Request $request)
    {
        $orderRequest =  OrderRequest::where([
            'user_id' => $request['user_id']
        ])->get();

        return [
            'data' => $orderRequest,
            'message' => "Done"
        ];
    }

    public function orderRequestChangeStatus(Request $request)
    {
        $status = (int)$request['status'];
        $status = $status + 1;

        $orderRequest =  OrderRequest::where(['id' => $request['id']])->update(['status' => $status ]);

        return [

            'message' => "Done"
        ];
    }


}
