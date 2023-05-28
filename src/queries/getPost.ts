import type { Post } from '@/data/posts';

export const getPost = async (id: string, options?: RequestInit) => {
  const res: { post: Post } = await fetch(
    `http://localhost:3000/api/posts/${id}`,
    options,
  ).then((r) => r.json());
  return res.post;
};
