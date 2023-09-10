import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    return NextResponse.json({
        status: true,
        message: "Server is running"
    })
}