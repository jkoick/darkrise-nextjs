import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { HomeBannerData } from "@/data/content";

interface HomeBannerProps {
  data: HomeBannerData;
}

const HomeBanner = ({ data }: HomeBannerProps) => {
  const { title, note, description, buttons, list, image } = data;

  return (
    <section className="overflow-hidden pb-0 pt-16 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="pt-6 text-center md:col-10 lg:col-10 xl:col-11 2xl:col-12">
            {note && (
              <div
                data-aos="fade-up-sm"
                className="border-animation mx-auto mb-4 w-fit rounded-full p-px relative"
              >
                <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                  <ImageFallback
                    width={24}
                    height={24}
                    src="/images/icons/svg/award.svg"
                    alt="note"
                  />
                  <span
                    className="text-sm opacity-70 md:text-base"
                    dangerouslySetInnerHTML={markdownify(note)}
                  />
                </div>
              </div>
            )}
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="has-gradient mb-4 text-h2 lg:text-h1 2xl:text-6xl"
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                className="mb-8 text-xl/[inherit] text-light p-4 rounded-md bg-gradient-to-b from-black via-black to-none 2xl:text-2xl 2xl:max-w-4xl 2xl:mx-auto"
              />
            )}
            {buttons && buttons.length > 0 && (
              <ul className="flex flex-wrap justify-center gap-4">
                {buttons
                  .filter(button => button.enable)
                  .map((button, index) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <AnimatedAnchor
                        className={`${index === 0 ? "btn-primary" : "btn-outline-transparent"}`}
                        link={button.link}
                        target={button.link.startsWith("http") ? "_blank" : "_self"}
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
                className="mt-6 flex flex-wrap justify-center gap-4"
              >
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-sm opacity-70"
                  >
                    {!(index === 0) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
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
              <div className="max-h-[825px] h-[825px] sm:h-[600px] md:h-[700px] lg:h-[825px]">
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