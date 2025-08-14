import AnimatedAnchor from "@/components/AnimatedAnchor";
import { callToAction1Content } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction1 = () => {
  const { title, description, buttons, image } = callToAction1Content;
  const enable = true;
  const button = buttons[0];
  const bg_image = "/images/uniteq-banner3.png";

  return (
    <>
      {enable && (
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-dark/60 p-7 !pb-0 md:p-10 lg:pl-16 lg:pr-0 lg:pt-16">
              <div className="row relative z-20 lg:gy-0">
                <div className="lg:col-5">
                  <div className="min-h-full pb-16">
                    <div className="bg-black/70 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl">
                      <h2
                        dangerouslySetInnerHTML={markdownify(title)}
                        className="mb-6 text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                        data-aos="fade-up-sm"
                      />
                      <div data-aos="fade-up-sm" data-aos-delay="50">
                        <p
                          dangerouslySetInnerHTML={markdownify(description)}
                          className="text-base sm:text-lg/[inherit] text-white/95 font-medium"
                        />
                      </div>
                    </div>
                    {button.enable && (
                      <AnimatedAnchor
                        className="btn-primary mt-6 sm:mt-8 lg:mt-16 xl:mt-36 w-full sm:w-auto text-center"
                        link={button.link}
                        label={button.label}
                        data-aos="fade-up-sm"
                        data-aos-delay="100"
                      />
                    )}
                  </div>
                </div>
                {image && (
                  <div
                    className="lg:col-7"
                    data-aos="fade-right-sm"
                    data-aos-delay="150"
                  >
                    <img
                      className="-mb-px h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-t-xl border border-border bg-body object-cover object-center sm:object-left-top lg:ml-28 lg:rounded-3xl lg:rounded-b-none"
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </div>
              <div aria-hidden="true">
                <div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0 z-10 w-full h-full lg:bg-gradient-to-r lg:from-black/80 lg:via-transparent lg:to-transparent"></div>
                <img
                  className="absolute inset-0 z-0 h-full w-full object-contain object-left-bottom"
                  src={bg_image}
                  alt="background pattern image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction1;
