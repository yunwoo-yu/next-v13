import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export const middleware = async (req: NextRequest) => {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const pathname = req.nextUrl.pathname;

  // 로그인 유저만 접근 가능
  if (pathname.startsWith('/user') && !session) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // 어드민 유저만 접근 가능
  if (pathname.startsWith('/admin') && session?.role !== 'Admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 로그인한 유저가 회원가입, 로그인 페이지 접근 X
  if (pathname.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
};

// export const config = { matcher: ['/admin/:path*', '/user'] };
