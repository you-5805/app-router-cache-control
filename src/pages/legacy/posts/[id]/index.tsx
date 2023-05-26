import { getPost } from '@/queries/getPost';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async ({ res, params }) => {
  const id = params?.id;
  if (typeof id !== 'string') return { notFound: true };

  const post = await getPost(id);

  const cacheControl =
    post.shareType === 'users-only'
      ? 'private, no-store, max-age=0, must-revalidate'
      : 'public, max-age=30';
  res.setHeader('Cache-Control', cacheControl);

  return {
    props: {
      post,
    },
  };
}) satisfies GetServerSideProps;

export default function Page({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{post.title}</h1>;
}
