import BlogCard from "@/components/BlogCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import { Post, RegularPage } from "@/types";

const BlogSection = ({
  content,
  largeHeading,
  posts,
}: {
  content?: Post["frontmatter"];
  largeHeading?: boolean;
  posts?: Post[];
}) => {
  let blogIndex: RegularPage = getListPage("blog/_index.md");
  let { title, description } = blogIndex.frontmatter;

  if (content) {
    ({ title, description } = content);
  }

  const BLOG_FOLDER = "blog";

  posts = posts ? posts : getSinglePage(BLOG_FOLDER);

  const randomIndex = Math.floor(Math.random() * posts.length);
  const featuredPost = posts[randomIndex];
  const featuredExcludePosts = posts.filter(
    (_, index) => index !== randomIndex,
  );

  let sortedPosts = sortByDate(featuredExcludePosts);

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="mx-auto text-center lg:col-8 xl:col-6"
            data-aos="fade-up-sm"
          >
            {title && largeHeading ? (
              <h1
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            ) : (
              <h2
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="mx-auto pt-20 md:col-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5 justify-center md:gx-5">
              {featuredPost && (
                <div className="col-12">
                  <BlogCard featuredCardLayout content={featuredPost} />
                </div>
              )}
              {sortedPosts.map(
                (blog, i: number) =>
                  blog && (
                    <div className="col-12" key={i}>
                      <BlogCard content={blog} />
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
