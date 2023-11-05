import { getPostByName } from "@/app/api/mdx";

export default async function Projects({
  params,
}: {
  params: { title: string };
}) {
  const { content } = await getPostByName(params.title);
  return <div>{content}</div>;
}
