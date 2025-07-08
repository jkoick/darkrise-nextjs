import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { ContactHeroData } from "@/data/content";

interface ContactHeroProps {
  data: ContactHeroData;
}

const ContactHero = ({ data }: ContactHeroProps) => {
  const { title, description, list } = data;

  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            {title && (
              <h1
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
              />
            )}
            {description && (
              <p
                className="mb-12 text-light text-lg"
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                data-aos-delay="100"
              />
            )}
          </div>
        </div>

        {list && list.length > 0 && (
          <div className="row g-4">
            {list.map((item, index) => (
              <div key={index} className="lg:col-4 md:col-6">
                <div
                  className="contact-card h-full rounded-2xl border border-white/10 p-6 text-center hover:border-primary/50 transition-all duration-300"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4">
                    <ImageFallback
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-6 text-light">{item.description}</p>
                  {item.button && item.button.enable && (
                    <AnimatedAnchor
                      className="btn-outline-primary"
                      link={item.button.link}
                      target={item.button.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener"
                      label={item.button.label}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactHero;