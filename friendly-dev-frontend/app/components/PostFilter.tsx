import type { PostFilterProps } from "~/types";

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search Posts..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-orange-200 text-black border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
    </div>
  );
};

export default PostFilter;
