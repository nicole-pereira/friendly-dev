export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export type LatestPostsProps = {
  posts: PostMeta[];
  limit: number;
};
