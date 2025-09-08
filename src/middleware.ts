import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/', '/login', '/registration']

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl
        const token = req.nextauth?.token as any
        console.log({ token, pathname })

        // Allow public routes
        if (PUBLIC_PATHS.includes(pathname)) {
            return NextResponse.next()
        }

        console.log({ token })

        // If not authenticated, redirect to login
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }

        // Role-based route protection
        const userRole = token?.user?.role
        // If route is /tenant* and user is not tenant, redirect
        if (pathname.startsWith('/tenant') && userRole !== 'tenant') {
            return NextResponse.redirect(
                req.headers.get('referer') || new URL('/', req.url)
            )
        }
        // If route is /landlord* and user is not landlord, redirect
        if (pathname.startsWith('/landlord') && userRole !== 'landlord') {
            return NextResponse.redirect(
                req.headers.get('referer') || new URL('/', req.url)
            )
        }
        // Otherwise, allow
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized({ token, req }) {
                // // Allow public routes without auth
                // if (PUBLIC_PATHS.includes(req.nextUrl.pathname)) return true
                // // Otherwise, require token
                return !!token
            },
        },
    }
)

export const config = {
    matcher: [
        // Protect all routes except public
        '/((?!api|_next/static|_next/image|favicon.ico|login|registration|$).*)',
    ],
}
