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

const validationError = (errors: any, init?: ResponseInit) => {
    return NextResponse.json({
        status: false,
        message: "Doğrulama hatası",
        errors: errors || {},
    }, {
        ...init,
        status: 422,
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
    validationError,
    json: NextResponse.json,
    redirect: NextResponse.redirect,
    rewrite: NextResponse.rewrite,
}

export default KodResponse