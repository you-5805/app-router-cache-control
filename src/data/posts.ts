export type Post = {
  id: string;
  title: string;
  visibility: 'public' | 'users-only';
};

export const posts = [
  {
    id: '1',
    title: 'Lorem ipsum',
    visibility: 'public',
  },
  {
    id: '2',
    title: 'dolor sit amet',
    visibility: 'users-only',
  },
  {
    id: '3',
    title: 'consectetur adipiscing elit',
    visibility: 'users-only',
  },
] satisfies Post[];
