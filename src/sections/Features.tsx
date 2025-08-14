import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureItem } from "@/data/content";

interface FeaturesProps {
  data: FeatureItem[];
  title?: string;
  description?: string;
}

const Features = ({ data, title, description }: FeaturesProps) => {
  return (
    <section className="section pb-0">
      <div className="container">
        {(title || description) && (
          <div className="row justify-center">
            <div className="lg:col-8 xl:col-6 text-center">
              {title && (
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              )}
              {description && (
                <p
                  className="text-light"
                  dangerouslySetInnerHTML={markdownify(description)}
                />
              )}
            </div>
          </div>
        )}

        <div className="row g-4 justify-center">
          {data.map((feature, index) => (
            <div key={index} className="lg:col-4 md:col-6">
              <div
                className="shadow-default feature-card h-full rounded-2xl border border-white/10 p-6"
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                {feature.images && feature.images.length > 0 && (
                  <div className="mb-4">
                    {feature.images.map((imageSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imageSrc}
                        alt={feature.title}
                        width={400}
                        height={200}
                        className={`w-full h-auto ${imgIndex > 0 ? "mt-2" : ""}`}
                      />
                    ))}
                  </div>
                )}

                <h3
                  className="mb-4 text-xl font-semibold"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />

                <p
                  className="mb-4 text-light"
                  dangerouslySetInnerHTML={markdownify(feature.description)}
                />

                {feature.list && feature.list.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {feature.list.map((item, listIndex) => (
                      <li
                        key={listIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span dangerouslySetInnerHTML={markdownify(item)} />
                      </li>
                    ))}
                  </ul>
                )}

                {feature.button && feature.button.enable && (
                  <AnimatedAnchor
                    className="btn-outline-primary"
                    link={feature.button.link}
                    target={
                      feature.button.link.startsWith("http")
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener"
                    label={feature.button.label}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
