export type Post = {
  id: string;
  title: string;
  shareType: 'public' | 'users-only';
};

export const posts = [
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
