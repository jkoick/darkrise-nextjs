import BlogCard from "@/components/BlogCard";
import { getSinglePage } from "@/lib/contentParser";
import { Post } from "@/types";

interface RelatedPostsProps {
  currentSlug: string;
  limit?: number;
}

const RelatedPosts = ({ currentSlug, limit = 3 }: RelatedPostsProps) => {
  const allPosts: Post[] = getSinglePage("blog");

  // Filter out current post and get random related posts
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="mb-12 text-center">
        <h2 className="h3 has-gradient mb-4 font-bold">Related Articles</h2>
        <p className="text-lg opacity-80">
          Continue exploring our latest insights
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {relatedPosts.map((post, index) => (
          <div key={index} data-aos="fade-up-sm" data-aos-delay={index * 100}>
            <BlogCard content={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
