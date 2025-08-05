import AuthorCard from "@/components/AuthorCard";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedPosts from "@/components/RelatedPosts";
import SocialShare from "@/components/SocialShare";
import TableOfContents from "@/components/TableOfContents";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import dateFormat from "@/lib/utils/dateFormat";
import { plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

const BlogSingle = ({ post }: { post: Post }) => {
  const { date, title, image, description } = post.frontmatter;

  // Calculate reading time (approximate)
  const wordsPerMinute = 250;
  const wordCount = post.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <>
      <ReadingProgress />
      <section className="section">
        <div className="container">
          {/* Hero Section */}
          <div className="row justify-center">
            <div className="lg:col-10 xl:col-8" data-aos="fade-up-sm">
              <div className="mb-8 text-center">
                {date && (
                  <div className="mb-4 flex items-center justify-center space-x-4 text-sm text-text opacity-70">
                    <span>{dateFormat(date)}</span>
                    <span>•</span>
                    <span>{readingTime} min read</span>
                    <span>•</span>
                    <span>{wordCount} words</span>
                  </div>
                )}
                {title && (
                  <h1 className="has-gradient md:h1 h2 tracking-none mb-6 font-bold leading-tight">
                    {plainify(title)}
                  </h1>
                )}
                {description && (
                  <p className="text-xl leading-relaxed text-text opacity-80 max-w-3xl mx-auto">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {image && (
            <div className="mb-16" data-aos="fade-up-sm" data-aos-delay="200">
              <div className="relative overflow-hidden rounded-2xl">
                <ImageFallback
                  src={image}
                  height={600}
                  width={1200}
                  alt={title}
                  className="h-auto w-full object-cover md:h-[600px]"
                  format="webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-3">
              <div className="sticky-sidebar">
                <TableOfContents desktopOnly />
              </div>
            </div>
            <article data-aos="fade-up-sm" className="lg:col-span-6 lg:col-start-4">
              <div className="content prose-lg max-w-none">
                <MDXContent content={post.content} />
              </div>
              <RelatedPosts currentSlug={post.slug || ""} />
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
