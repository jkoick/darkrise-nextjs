import { getSinglePage } from "@/lib/contentParser";
import { BlogArticleItem, BlogCarouselData } from "@/data/content";

export interface BlogPost {
  frontmatter: {
    title: string;
    description: string;
    image: string;
    date: string;
    tags?: string[];
    draft?: boolean;
    featured?: boolean;
  };
  slug: string;
  content: string;
}

export const transformBlogToFeaturedProducts = (
  title: string = "**Featured Product** Insights",
  subtitle: string = "Explore in-depth articles about our revolutionary solutions and discover how they're transforming businesses across industries.",
): BlogCarouselData => {
  try {
    const blogPosts = getSinglePage("blog") as BlogPost[];

    const sortedPosts = blogPosts
      .sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime(),
      )
      .slice(0, 6);

    const articles: BlogArticleItem[] = sortedPosts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      image: post.frontmatter.image,
      tags: post.frontmatter.tags || [],
      link: `/blog/${post.slug}`,
      featured: post.frontmatter.featured || false,
      date: new Date(post.frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }));

    return {
      title,
      subtitle,
      articles,
    };
  } catch (error) {
    console.error("Error transforming blog posts to featured products:", error);

    return {
      title,
      subtitle,
      articles: [],
    };
  }
};

export const getFeaturedBlogCarouselContent = (): BlogCarouselData => {
  return transformBlogToFeaturedProducts();
};
