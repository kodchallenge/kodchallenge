import KodResponse from "@/lib/KodResponse";
import { prisma } from "@kod/prisma";
import { NextRequest } from "next/server";
import { ZodError, z } from 'zod'
import { compare, hash } from "bcryptjs";
import { signJWT } from "@/lib/auth/token";
import { hashPassword } from "@/lib/auth/utils";

const schema = z.object({
    email: z.string().email("Eposta adresi geçerli değil"),
    password: z.string().min(3, "Şifre en az 6 karakter olmalıdır")
})

export const POST = async (request: NextRequest) => {
    try {
        const { email, password } = await request.json() as { email: string, password: string };

        try {
            schema.parse({ email, password })
        } catch (error: any) {
            return KodResponse.validationError(JSON.parse(error.message))
        }

        const user = await prisma.users.findFirst({
            where: {
                email
            }
        })

        if (!user || !(await compare(password, user.password))) return KodResponse.error(404, "Kullanıcı adı veya şifre hatalı")

        const token = await signJWT(
            { sub: user.id.toString() },
            { exp: `${process.env.JWT_EXPIRES_IN}m` }
        );

        const tokenMaxAge = parseInt(process.env.JWT_EXPIRES_IN || "") * 60;

        const cookieOptions = {
            name: "token",
            value: token,
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV !== "development",
            maxAge: tokenMaxAge,
        };

        user.password = "";
        const response = KodResponse.success({...user, token}, "Giriş başarılı")

        await Promise.all([
            response.cookies.set(cookieOptions),
            response.cookies.set({
                name: "logged-in",
                value: "true",
                maxAge: tokenMaxAge,
            }),
        ]);

        return response;
    } catch (error: any) {
        return KodResponse.error(500, error.message);
    }
}