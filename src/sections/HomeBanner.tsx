import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { HomeBannerData } from "@/data/content";

interface HomeBannerProps {
  data: HomeBannerData;
}

const HomeBanner = ({ data }: HomeBannerProps) => {
  const { title, description, buttons, list, image } = data;

  return (
    <section className="overflow-hidden pb-0 pt-16 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="pt-6 text-center md:col-10 lg:col-10 xl:col-11 2xl:col-12">
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="has-gradient mb-4 text-h1 lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold"
              />
            )}
            {description && (
              <div className="mb-8 2xl:max-w-4xl 2xl:mx-auto">
                <p
                  dangerouslySetInnerHTML={markdownify(description)}
                  data-aos="fade-up-sm"
                  className="text-xl/[inherit] text-white bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-lg 2xl:text-2xl"
                />
              </div>
            )}
            {buttons && buttons.length > 0 && (
              <ul className="flex flex-wrap justify-center gap-4 mt-8">
                {buttons
                  .filter((button) => button.enable)
                  .map((button, index) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <AnimatedAnchor
                        className={`${index === 0 ? "btn-primary shadow-lg" : "btn-outline-white bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"}`}
                        link={button.link}
                        target={
                          button.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener"
                        label={button.label}
                        hideIcon={!(index === 0)}
                      />
                    </li>
                  ))}
              </ul>
            )}
            {list && list.length > 0 && (
              <ul
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="mt-8 flex flex-wrap justify-center gap-4 bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10"
              >
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-sm text-white font-medium"
                  >
                    {!(index === 0) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                    <span dangerouslySetInnerHTML={markdownify(item)} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {image && (
            <div
              className="col-12 pt-8 lg:pt-16"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              <div className="relative">
                <ImageFallback
                  src={image.src}
                  alt={image.alt}
                  width={1300}
                  height={825}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
