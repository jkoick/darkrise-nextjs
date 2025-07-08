import AnimatedAnchor from "@/components/AnimatedAnchor";
import { careerCtaContent } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";

const CareerCta = () => {
  const { title, description, buttons } = careerCtaContent;
  const button = buttons[0];

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
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
            {button && (
              <AnimatedAnchor
                className="btn-primary mt-6"
                link={button.link}
                label={button.label}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCta;
