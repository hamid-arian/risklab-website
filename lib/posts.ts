import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSortedPostsData(insidePathName: string) {
  const postsDirectory = path.join(process.cwd(), "posts", insidePathName);
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = "";
    if (!fullPath.includes("Figs")) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      fileContents,
    };
  });
  // Sort posts by date
  return allPostsData;
}
