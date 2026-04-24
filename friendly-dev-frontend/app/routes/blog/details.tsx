import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { BlogPostDetailsPageProps, PostMeta } from "~/types";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch");

  const index = await res.json();
  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw new Response("Not Found", { status: 404 });

  // Dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData;
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-yellow-200">
      <h1 className="text-3xl font-bold text-orange-400 mb-2">
        {postMeta.title}
      </h1>
      <p className="text-sm text-orange-400 mb-6">
        {new Date(postMeta.date).toDateString()}
      </p>
      <div className="prose max-w-none mb-12">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <Link
        className="inline-block bg-orange-300 px-6 py-2 rounded-lg transition hover:bg-orange-400"
        to="/blog">
        Back to posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;
