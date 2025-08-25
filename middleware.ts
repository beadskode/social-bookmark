import { NextResponse, type NextRequest } from 'next/server';
import { auth } from './lib/auth';

// use를 사용할 수 있으나, 서버액션은 대부분 async
export async function middleware(req: NextRequest) {
  const session = await auth();
  const didLogin = !!session?.user;
  if (!didLogin) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
}

//* 로그인 하지 않아도 보여질 페이지에서는 미들웨어 제외
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|images|api/auth|login|regist|$).*)',
  ],
};
