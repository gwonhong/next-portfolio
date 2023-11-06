import MdxLayout from "@/app/components/mdx-layout";
import { getPostByName } from "@/app/api/mdx";

export default async function Projects({
  params,
}: {
  params: { title: string };
}) {
  const { content } = await getPostByName(params.title);
  return <MdxLayout>{content}</MdxLayout>;
}
