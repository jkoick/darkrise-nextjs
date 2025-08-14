import { testimonialContent } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";

const FeaturedTestimonial = ({
  featuredCustomer,
  alternateLayout,
}: {
  featuredCustomer: string;
  alternateLayout?: boolean;
}) => {
  let featuredTestimonial;

  let list = testimonialContent.testimonials;

  // If featured customer name is passed then count that customer as featured
  if (featuredCustomer) {
    featuredTestimonial = list.find(
      (testimonial) => testimonial.customer.name === featuredCustomer,
    );

    list = list.filter((item) => item.customer.name !== featuredCustomer);
  }
  return (
    <>
      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <div
          className="col-12 pt-20"
          data-aos="fade-up-sm"
          data-aos-delay="200"
        >
          <div
            className={`relative rounded-lg border border-border bg-dark/50 p-5 max-lg:mb-10 max-lg:last:mb-0 md:p-10`}
          >
            <div className="row gy-4 items-center">
              <div className="lg:col-5">
                <div className="relative overflow-hidden rounded-lg bg-dark lg:me-8 transition-transform duration-300 hover:scale-105">
                  <img
                    src={featuredTestimonial.customer.avatar || ""}
                    alt={featuredTestimonial.customer.name || "customer name"}
                    width={500}
                    height={500}
                  />
                  {alternateLayout && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-8">
                      {featuredTestimonial.customer.name && (
                        <h4
                          className="tracking-none mb-2 mt-6 text-lg font-bold"
                          dangerouslySetInnerHTML={markdownify(
                            featuredTestimonial.customer.name,
                          )}
                        />
                      )}
                      {featuredTestimonial.customer.designation && (
                        <p
                          className="text-sm opacity-70"
                          dangerouslySetInnerHTML={markdownify(
                            featuredTestimonial.customer.designation,
                          )}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:col-7" data-aos="fade-up-sm">
                <div
                  className={`min-h-full rounded-s-3xl ${!alternateLayout && "py-8 lg:pb-0 lg:pt-8"}`}
                >
                  {featuredTestimonial.content && (
                    <p
                      className={`${
                        alternateLayout
                          ? "h4 tracking-none opacity-80"
                          : "opacity-70 text-lg/[170%]"
                      }`}
                      dangerouslySetInnerHTML={markdownify(
                        featuredTestimonial.content,
                      )}
                    />
                  )}

                  {!alternateLayout && (
                    <>
                      {featuredTestimonial.customer.name && (
                        <h4
                          className="tracking-none mb-2 mt-6 text-lg font-bold"
                          dangerouslySetInnerHTML={markdownify(
                            featuredTestimonial.customer.name,
                          )}
                        />
                      )}
                      {featuredTestimonial.customer.designation && (
                        <p
                          className="text-sm opacity-70"
                          dangerouslySetInnerHTML={markdownify(
                            featuredTestimonial.customer.designation,
                          )}
                        />
                      )}
                    </>
                  )}
                </div>

                {!alternateLayout && (
                  <div
                    aria-hidden="true"
                    className="rotate-animation pointer-events-none absolute left-5/6 top-0 -z-10 h-80 w-[550px] -translate-x-1/2 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-30 blur-[120px] bg-gradient-to-l"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedTestimonial;
