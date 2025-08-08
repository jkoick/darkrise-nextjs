import { markdownify } from "@/lib/utils/textConverter";
import { HeroData } from "@/data/content";

interface HeroProps {
  data: HeroData;
  className?: string;
}

const Hero = ({ data, className = "" }: HeroProps) => {
  const { subtitle, title, description } = data;

  return (
    <section className={`section pb-0 ${className}`}>
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            {subtitle && (
              <span
                className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/20 text-primary rounded-full"
                data-aos="fade-up-sm"
              >
                {subtitle}
              </span>
            )}
            {title && (
              <h1
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                data-aos-delay="100"
              />
            )}
            {description && (
              <p
                className="text-light text-lg"
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                data-aos-delay="200"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
