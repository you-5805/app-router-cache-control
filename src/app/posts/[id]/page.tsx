import { getPost } from '@/queries/getPost';

type Parameter = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Parameter) {
  const post = await getPost(id, {
    cache: 'no-cache',
  });

  return <h1>{post.title}</h1>;
}
