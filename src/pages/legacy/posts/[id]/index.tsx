import { getPost } from '@/queries/getPost';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async ({ res, params }) => {
  // get path parameter
  const id = params?.id;
  if (typeof id !== 'string') return { notFound: true };

  // fetch data
  const post = await getPost(id);

  // set Cache-Control header depends on visibility
  res.setHeader(
    'Cache-Control',
    post.visibility === 'users-only'
      ? 'private, no-store, max-age=0, must-revalidate'
      : 'public, max-age=30',
  );

  return { props: { post } };
}) satisfies GetServerSideProps;

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Page({ post }: PageProps) {
  return <h1>{post.title}</h1>;
}
