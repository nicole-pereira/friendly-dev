export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  slug: string;
  body: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export type BlogPostDetailsPageProps = {
  loaderData: {
    post: Post;
  };
};

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export type LatestPostsProps = {
  posts: Post[];
  limit: number;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiImage = {
  url: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
};

export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: StrapiImage;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  image?: StrapiImage;
};
