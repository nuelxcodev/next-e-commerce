import NextAuth from 'next-auth';
import { authConfig } from '../../../next.config';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '../../lib/route';

const { auth } = NextAuth(authConfig);

export default auth(async (req, res) => {
  try {
    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

    if (isPublicRoute && isAuthenticated)
      return res.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    if (!isAuthenticated && !isPublicRoute)
      return res.redirect(new URL(ROOT, nextUrl));

  } catch (error) {
    console.log(error)
  }

});


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};