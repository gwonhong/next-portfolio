import Link from "next/link";
import { getPostByName, getAllPostsMeta } from "@/api/mdx";

function PostPreviewBlock({
  meta,
}: {
  meta: { name: string; frontmatter: Record<string, unknown> };
}) {
  const frontmatterLines = [];
  for (const key in meta.frontmatter) {
    const value = meta.frontmatter[key];
    frontmatterLines.push(
      <p key={key}>
        {key}: {value as string}
      </p>
    );
  }
  return (
    <div>
      <p>{meta.name}</p>
      {frontmatterLines}
    </div>
  );
}

export default async function Projects() {
  const metas = await getAllPostsMeta();
  const previewBlocks = metas.map((meta, i) => {
    return <PostPreviewBlock key={i} meta={meta} />;
  });
  return <div>{previewBlocks}</div>;
}
