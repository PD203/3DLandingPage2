import { IconCloud } from "./IconCloud";

const slugs = [
  "python",
  "nextjs",
  "tailwindcss",
  "openai",
  "chatgpt",
  "tensorflow",
  "huggingface",
  "langchain",
  "vectorsearch",
  "pinecone",
  "weaviate",
  "mongodb",
  "firebase",
  "cloudinary",
  "googlecloud",
  "vercel",
  "docker",
  "git",
  "github",
  "vscode",
];


export function Frameworks() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center pr-70 h-[15rem] w-full flex-col ">
      <IconCloud images={images} />
    </div>
  );
}
