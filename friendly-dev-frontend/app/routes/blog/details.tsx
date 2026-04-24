import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type {
  BlogPostDetailsPageProps,
  StrapiPost,
  StrapiResponse,
} from "~/types";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const res = await fetch(
  `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
);

  if (!res.ok) throw new Error("Failed to fetch data");
  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length) throw new Response("Not Found", { status: 404 });

  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    exercpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/images/no-image.png",
  };

  return { post };
}

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { post } = loaderData;
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-yellow-200">
      <h1 className="text-3xl font-bold text-orange-400 mb-2">{post.title}</h1>
      <p className="text-sm text-orange-400 mb-6">
        {new Date(post.date).toDateString()}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="prose max-w-none mb-12">
        <ReactMarkdown>{post.body}</ReactMarkdown>
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
