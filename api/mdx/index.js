import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "contents");

export async function getPostByName(name) {
  const filePath = path.join(rootDirectory, name + ".mdx");
  const fileContent = await fs.readFile(filePath);

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return { name, frontmatter, content };
}

export async function getAllPostsMeta() {
  const metas = [];
  const fileNames = await fs.readdir(rootDirectory);
  const mdxNames = [];
  for (const fileName of fileNames) {
    if (fileName.endsWith(".mdx")) {
      mdxNames.push(fileName.slice(0, -4));
    }
  }
  for (const mdxName of mdxNames) {
    const { name, frontmatter } = await getPostByName(mdxName);
    metas.push({ name, frontmatter });
  }
  return metas;
}
