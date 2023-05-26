import type { Post } from '@/types/Post';

export const getPost = async (id: string) => {
  const res: { post: Post } = await fetch(
    `http://localhost:3000/api/posts/${id}`,
  ).then((r) => r.json());
  return res.post;
};