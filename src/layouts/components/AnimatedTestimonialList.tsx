import TestimonialCard from "./TestimonialCard";

interface TestimonialItem {
  customer: {
    name: string;
    designation: string;
    avatar: string;
  };
  content: string;
  rating: number;
  featured: boolean;
}

const AnimatedTestimonialList = ({
  list,
  direction,
}: {
  list: TestimonialItem[];
  direction?: "normal" | "reverse";
}) => {
  return (
    <div className="marquee-wrapper on-hover-pause-animation flex gap-5 overflow-hidden lg:flex-col">
      <div
        className={`marquee ${direction === "reverse" ? "marquee-reverse" : "marquee-vertical"}  marquee-duration-120 flex shrink-0 lg:flex-col items-center justify-center gap-5`}
      >
        {list.map((item, index: number) => (
          <TestimonialCard
            key={index}
            content={item.content}
            image={item.customer.avatar}
            name={item.customer.name}
            designation={item.customer.designation}
          />
        ))}
      </div>
      <div
        className={`marquee  ${direction === "reverse" ? "marquee-reverse" : "marquee-vertical"} marquee-duration-120 flex shrink-0 lg:flex-col items-center justify-center gap-5`}
        aria-hidden="true"
      >
        {list.map((item, index: number) => (
          <TestimonialCard
            key={index}
            content={item.content}
            image={item.customer.avatar}
            name={item.customer.name}
            designation={item.customer.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTestimonialList;
