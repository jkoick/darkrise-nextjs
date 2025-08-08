"use client";

import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { BlogCarouselData } from "@/data/content";
import { useRef } from "react";

interface BlogCarouselProps {
  data: BlogCarouselData;
}

const BlogCarousel = ({ data }: BlogCarouselProps) => {
  const { title, subtitle, articles } = data;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl md:hidden -mx-4 -my-6 px-4 py-6"></div>

              <div className="relative z-10 md:bg-black/20 md:backdrop-blur-sm md:rounded-2xl md:p-8 md:border md:border-white/10">
                {title && (
                  <h2
                    className="mb-4 sm:has-gradient text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                    dangerouslySetInnerHTML={markdownify(title)}
                    data-aos="fade-up-sm"
                  />
                )}
                {subtitle && (
                  <p
                    className="text-white/95 text-base sm:text-lg lg:text-xl font-light leading-relaxed"
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative" data-aos="fade-up-sm" data-aos-delay="200">
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm border border-border hover:bg-primary transition-colors duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 text-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm border border-border hover:bg-primary transition-colors duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 text-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex-none w-[280px] sm:w-[320px] snap-start cursor-pointer"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-dark hover:bg-dark/80 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <ImageFallback
                      src={article.image}
                      alt={article.title}
                      width={320}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.featured && (
                      <div className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                      {article.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text mb-3 transition-colors duration-300 leading-tight line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-light text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-white/10 text-text/80 px-2 py-1 rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <AnimatedAnchor
                      link={article.link}
                      label="Read Article"
                      className="btn-outline-primary btn-sm w-full group-hover:btn-primary transition-all duration-300"
                      hideIcon={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-sm text-light/60">
              ← Swipe to explore more articles →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
