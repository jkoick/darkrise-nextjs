import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { CallToActionData } from "@/data/content";

interface CallToActionProps {
  data: CallToActionData;
  variant?: "default" | "centered" | "split";
  className?: string;
}

const CallToAction = ({
  data,
  variant = "default",
  className = "",
}: CallToActionProps) => {
  const { title, description, image, buttons } = data;

  if (variant === "centered") {
    return (
      <section className={`section ${className}`}>
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-8 text-center">
              {title && (
                <h2
                  className="mb-4 has-gradient"
                  dangerouslySetInnerHTML={markdownify(title)}
                  data-aos="fade-up-sm"
                />
              )}
              {description && (
                <p
                  className="mb-8 text-light text-lg"
                  dangerouslySetInnerHTML={markdownify(description)}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />
              )}
              {buttons && buttons.length > 0 && (
                <div
                  className="flex flex-wrap justify-center gap-4"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  {buttons
                    .filter((button) => button.enable)
                    .map((button, index) => (
                      <AnimatedAnchor
                        key={index}
                        className={
                          index === 0 ? "btn-primary" : "btn-outline-primary"
                        }
                        link={button.link}
                        target={
                          button.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener"
                        label={button.label}
                      />
                    ))}
                </div>
              )}
              {image && (
                <div
                  className="mt-12"
                  data-aos="fade-up-sm"
                  data-aos-delay="300"
                >
                  <ImageFallback
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={400}
                    className="mx-auto rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className={`section ${className}`}>
        <div className="container">
          <div className="row items-center">
            <div className="lg:col-6">
              {title && (
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(title)}
                  data-aos="fade-right"
                />
              )}
              {description && (
                <p
                  className="mb-6 text-light"
                  dangerouslySetInnerHTML={markdownify(description)}
                  data-aos="fade-right"
                  data-aos-delay="100"
                />
              )}
              {buttons && buttons.length > 0 && (
                <div
                  className="flex flex-wrap gap-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {buttons
                    .filter((button) => button.enable)
                    .map((button, index) => (
                      <AnimatedAnchor
                        key={index}
                        className={
                          index === 0 ? "btn-primary" : "btn-outline-primary"
                        }
                        link={button.link}
                        target={
                          button.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener"
                        label={button.label}
                      />
                    ))}
                </div>
              )}
            </div>
            {image && (
              <div className="lg:col-6 mt-8 lg:mt-0">
                <div data-aos="fade-left" data-aos-delay="300">
                  <ImageFallback
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="cta-card rounded-2xl border border-white/10 p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/10">
          <div className="row items-center">
            <div className="lg:col-8">
              {title && (
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(title)}
                  data-aos="fade-up-sm"
                />
              )}
              {description && (
                <p
                  className="text-light"
                  dangerouslySetInnerHTML={markdownify(description)}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />
              )}
            </div>
            {buttons && buttons.length > 0 && (
              <div className="lg:col-4 mt-6 lg:mt-0">
                <div
                  className="flex flex-wrap gap-4 lg:justify-end"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  {buttons
                    .filter((button) => button.enable)
                    .map((button, index) => (
                      <AnimatedAnchor
                        key={index}
                        className={
                          index === 0 ? "btn-primary" : "btn-outline-primary"
                        }
                        link={button.link}
                        target={
                          button.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener"
                        label={button.label}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
