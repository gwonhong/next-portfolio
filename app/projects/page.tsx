import Link from "next/link";
import { getAllPostsMeta } from "@/app/api/mdx";

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
    <Link href={`projects/${meta.name}`} className="p-8 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{meta.name}</h3>
      {frontmatterLines}
    </Link>
  );
}

export default async function Projects() {
  const metas = await getAllPostsMeta();
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">All Projects</h1>
      <div className="flex gap-6 mt-6">
        {metas.map((meta, i) => {
          return <PostPreviewBlock key={i} meta={meta} />;
        })}
      </div>
    </div>
  );
}
