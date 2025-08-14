"use client";

import AnimatedAnchor from "@/components/AnimatedAnchor";
import { integrationContent } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";
import { useState } from "react";

const IntegrationCardLayout = () => {
  const { title, description, integrations } = integrationContent;
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(integrations.map((item) => item.category))),
  ];
  const list = integrations
    .filter((item) => activeFilter === "All" || item.category === activeFilter)
    .map((item) => ({
      slug: item.slug,
      frontmatter: {
        title: item.name,
        description: item.description,
        image: item.icon,
        type: item.category,
      },
    }));

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="mt-6 text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* Filter Buttons */}
          <div
            className="col-12 pt-10"
            data-aos="fade-up-sm"
            data-aos-delay="100"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`btn btn-sm transition-all duration-300 ${
                    activeFilter === category
                      ? "btn-primary"
                      : "btn-outline-transparent hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-white/60">
              Showing {list.length} integration{list.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="col-12 pt-20 relative">
            <div className="row g-4 justify-center">
              {list?.map(({ frontmatter, slug }, index) => (
                <div
                  key={slug}
                  className="md:col-6 lg:col-4 transition-all duration-500 ease-in-out"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 50}
                >
                  <div className="group relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9 duration-300 hover:-translate-y-1">
                    <div className="relative z-20">
                      <div className="mb-6 flex items-center gap-4">
                        {frontmatter.image && (
                          <img
                            className="h-[70px] w-[70px] object-cover transition duration-300 group-hover:scale-90"
                            src={frontmatter.image}
                            alt={`icon related to ${frontmatter.title}`}
                            width={70}
                            height={70}
                          />
                        )}
                        <div>
                          {frontmatter.title && (
                            <h3
                              className="tracking-none mb-1 text-xl/snug font-semibold"
                              dangerouslySetInnerHTML={markdownify(
                                frontmatter.title,
                              )}
                            />
                          )}
                          {frontmatter.type && (
                            <p
                              className="tracking-none mt-0 opacity-70"
                              dangerouslySetInnerHTML={markdownify(
                                frontmatter.type,
                              )}
                            />
                          )}
                        </div>
                      </div>
                      {frontmatter.description && (
                        <p
                          className="opacity-80"
                          dangerouslySetInnerHTML={markdownify(
                            frontmatter.description,
                          )}
                        />
                      )}

                      <AnimatedAnchor
                        className="btn-inline mt-8"
                        label={"View Integration"}
                        link={"/integration/" + slug + "/"}
                      />
                    </div>

                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-secondary opacity-0 blur-[83px] transition-opacity duration-300 bg-gradient-to-l group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="rotate-animation pointer-events-none absolute -right-10 top-0 -z-10 h-80 w-[550px] -translate-x-2/4 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-30 blur-[120px] bg-gradient-to-l"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCardLayout;
