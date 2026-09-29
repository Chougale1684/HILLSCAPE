import {auth} from '@/auth';import {NextResponse} from 'next/server';
export default auth((req)=>{const path=req.nextUrl.pathname;const session=req.auth;if(path.startsWith('/owner')&&(!session?.user||(session.user as any).role!=='OWNER'))return NextResponse.redirect(new URL('/login',req.url));if(path.startsWith('/dashboard')&&!session?.user)return NextResponse.redirect(new URL('/login',req.url));return NextResponse.next()});
export const config={matcher:['/owner/:path*','/dashboard/:path*']};
