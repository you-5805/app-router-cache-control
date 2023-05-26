import { NextResponse } from 'next/server';
import type { Post } from '@/types/Post';
import type { NextRequest } from 'next/server';

type Parameter = {
  params: {
    id: string;
  };
};

const posts = [
  {
    id: '1',
    title: 'Lorem ipsum',
    shareType: 'public',
  },
  {
    id: '2',
    title: 'dolor sit amet',
    shareType: 'users-only',
  },
  {
    id: '3',
    title: 'consectetur adipiscing elit',
    shareType: 'users-only',
  },
] satisfies Post[];

export const GET = (_: NextRequest, { params: { id } }: Parameter) => {
  const post = posts.find((p) => p.id === id);

  return NextResponse.json({ post });
};
