import { NextResponse, } from 'next/server'
import NextHeaders from 'next/headers'

const error = (code?: number, message?: string, init?: ResponseInit) => {
    return NextResponse.json({
        status: false,
        message: message || "",
    }, {
        ...init,
        status: code || 500,
        headers: {
            ...init?.headers,
            'content-type': 'application/json; charset=utf-8'
        },
    })
}

const success = (data?: any, message?: string, init?: ResponseInit) => {
    return NextResponse.json({
        status: true,
        message: message || "",
        data: data || {}
    }, {
        ...init,
        status: init?.status || 200,
        headers: {
            ...init?.headers,
            'content-type': 'application/json; charset=utf-8'
        },
    })
}

const KodResponse = {
    error,
    success,
    json: NextResponse.json,
    redirect: NextResponse.redirect,
    rewrite: NextResponse.rewrite,
}

export default KodResponse