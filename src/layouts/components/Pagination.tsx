import Link from "next/link";
import React from "react";

const Pagination = ({
  section,
  currentPage,
  totalPages,
}: {
  section: string;
  currentPage: number;
  totalPages: number;
}) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center space-x-3"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link
              href={
                indexPageLink
                  ? `${section ? "/" + section : "/"}/`
                  : `${section ? "/" + section : ""}/page/${currentPage - 1}/`
              }
              className="px-2 py-2 text-text-dark transition-colors duration-300 hover:bg-dark rounded-md"
            >
              <span className="sr-only">Previous</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="30"
                width="30"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : (
            <span className="px-2 py-2 text-text-dark transition-colors duration-300 rounded-md">
              <span className="sr-only">Previous</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="30"
                width="30"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}

          {/* page index */}
          {pageList.map((pagination, i) =>
            pagination === currentPage ? (
              <span
                key={i}
                aria-current="page"
                className="bg-primary px-4 py-2 text-white rounded-md"
              >
                {pagination}
              </span>
            ) : (
              <Link
                key={i}
                href={
                  i === 0
                    ? `${section ? "/" + section : "/"}/`
                    : `${section ? "/" + section : ""}/page/${pagination}/`
                }
                aria-current="page"
                className="px-4 py-2 text-text-dark transition-colors duration-300 hover:bg-primary hover:text-white rounded-md"
              >
                {pagination}
              </Link>
            ),
          )}

          {/* next page */}
          {hasNextPage ? (
            <Link
              href={`${section ? "/" + section : ""}/page/${currentPage + 1}/`}
              className="px-2 py-2 text-text-dark transition-colors duration-300 hover:bg-dark rounded-md"
            >
              <span className="sr-only">Next</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="30"
                width="30"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : (
            <span className="px-2 py-2 text-text-dark rounded-md">
              <span className="sr-only">Next</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="30"
                width="30"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
