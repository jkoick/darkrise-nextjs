import { markdownify } from "@/lib/utils/textConverter";

interface Testimonial {
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar: string;
  };
  rating?: number;
  featured?: boolean;
}

interface TestimonialGridProps {
  title: string;
  description?: string;
  testimonials: Testimonial[];
  layout?: "grid" | "masonry" | "carousel";
  showRatings?: boolean;
}

const TestimonialGrid = ({
  title,
  description,
  testimonials,
  layout = "grid",
  showRatings = true,
}: TestimonialGridProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-600"}`}
      >
        ★
      </span>
    ));
  };

  const getGridClasses = () => {
    switch (layout) {
      case "masonry":
        return "lg:col-4 md:col-6";
      case "carousel":
        return "lg:col-4 md:col-6";
      default:
        return "lg:col-4 md:col-6";
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(title)} />
            {description && (
              <p
                className="mb-12 text-light"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={getGridClasses()}>
              <div
                className={`testimonial-card h-full rounded-2xl border p-6 transition-all duration-300 ${
                  testimonial.featured
                    ? "border-primary bg-gradient-to-b from-primary/10 to-transparent"
                    : "border-white/10 hover:border-primary/50"
                }`}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                {showRatings && testimonial.rating && (
                  <div className="mb-4 flex justify-center">
                    {renderStars(testimonial.rating)}
                  </div>
                )}

                <blockquote className="mb-6 text-center">
                  <p className="text-light italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.author.name}
                    </h4>
                    <p className="text-xs text-light opacity-70">
                      {testimonial.author.position} at{" "}
                      {testimonial.author.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
