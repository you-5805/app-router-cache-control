import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Parameter = {
  params: {
    id: string;
  };
};

export const GET = (_: NextRequest, { params: { id } }: Parameter) => {
  const post = posts.find((p) => p.id === id);

  return NextResponse.json({ post });
};
