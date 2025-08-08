"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

const TableOfContents = ({
  mobileOnly = false,
  desktopOnly = false,
}: TableOfContentsProps) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll(
      "article h1, article h2, article h3, article h4",
    );
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      tocItems.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.substring(1)),
      });
    });

    setToc(tocItems);

    const observerOptions = {
      rootMargin: "-10% 0% -80% 0%",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting,
        );

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce(
            (prev, current) =>
              current.intersectionRatio > prev.intersectionRatio
                ? current
                : prev,
          );

          const target = mostVisibleEntry.target as HTMLElement;
          if (target?.id) {
            setActiveId(target.id);
          }
        }
      },
      observerOptions,
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (toc.length === 0) return null;

  // Mobile version
  if (mobileOnly) {
    return (
      <div className="mb-8">
        <details className="rounded-lg border border-border bg-dark">
          <summary className="cursor-pointer p-4 text-lg font-semibold text-white hover:bg-white/5">
            Table of Contents
          </summary>
          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left text-sm transition-colors duration-200 hover:text-white ${
                      activeId === item.id
                        ? "text-white font-semibold"
                        : "text-text opacity-70"
                    } ${item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-6"}`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    );
  }

  // Desktop only version
  if (desktopOnly) {
    return (
      <div className="sticky top-64 hidden lg:block">
        <div className="rounded-lg border border-border bg-dark p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Table of Contents
          </h3>
          <nav>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left text-sm transition-colors duration-200 hover:text-white ${
                      activeId === item.id
                        ? "text-white font-semibold"
                        : "text-text opacity-70"
                    } ${item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-6"}`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile TOC - Collapsible */}
      <div className="mb-8 lg:hidden">
        <details className="rounded-lg border border-border bg-dark">
          <summary className="cursor-pointer p-4 text-lg font-semibold text-white hover:bg-white/5">
            Table of Contents
          </summary>
          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left text-sm transition-colors duration-200 hover:text-white ${
                      activeId === item.id
                        ? "text-white font-semibold"
                        : "text-text opacity-70"
                    } ${item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-6"}`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>

      {/* Desktop TOC - Sticky */}
      <div className="sticky top-64 hidden lg:block">
        <div className="rounded-lg border border-border bg-dark p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Table of Contents
          </h3>
          <nav>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left text-sm transition-colors duration-200 hover:text-white ${
                      activeId === item.id
                        ? "text-white font-semibold"
                        : "text-text opacity-70"
                    } ${item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-6"}`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TableOfContents;
