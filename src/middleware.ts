import { NextResponse } from 'next/server';
import type { Post } from './data/posts';
import type { NextMiddleware } from 'next/server';

export const config = {
  matcher: '/posts/:path*',
};

const middlewareFn = (async (req) => {
  const res = NextResponse.next();

  const matches = req.nextUrl.pathname.match(/\/posts\/([^?]+)/);
  if (matches === null) throw new Error();

  const postId = matches[1];
  const { post }: { post: Post } = await fetch(
    `http://127.0.0.1:3000/api/posts/${postId}`,
  ).then((r) => r.json());

  if (post.visibility === 'public') {
    res.headers.set('Surrogate-Control', 'public, max-age=30');
  } else {
    res.headers.set(
      'Surrogate-Control',
      'private, no-store, max-age=0, must-revalidate',
    );
  }

  return res;
}) satisfies NextMiddleware;

export default middlewareFn;
