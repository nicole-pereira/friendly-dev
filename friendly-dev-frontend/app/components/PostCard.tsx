import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <article className="bg-orange-200 p-6 rounded-lg shadow mb-4">
      <h3 className="text-2xl font-semibold text-orange-400">{post.title}</h3>
      <p className="text-sm text-white mb-2">
        {new Date(post.date).toDateString()}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <p className="text-orange-500 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-orange-800 text-sm hover:underline">
        Read More
      </Link>
    </article>
  );
};

export default PostCard;
