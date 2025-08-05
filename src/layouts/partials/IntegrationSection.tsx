import AnimatedAnchor from "@/components/AnimatedAnchor";
import IntegrationCard from "@/components/IntegrationCard";
import { integrationContent } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";

const FE_STACK = [
  "CSS",
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt",
  "Tailwind CSS",
  "Vite",
];

type IntegrationSectionProps = {
  largeHeading?: boolean;
  hideBackground?: boolean;
  fluidContainer?: boolean;
  hideHeadingOverlay?: boolean;
  hideCTAButton?: boolean;
};

const IntegrationSection = ({
  largeHeading,
  hideBackground,
  fluidContainer,
  hideHeadingOverlay,
  hideCTAButton,
}: IntegrationSectionProps) => {
  const { title, description, integrations } = integrationContent;

  const button = {
    enable: true,
    label: "View All Integrations",
    link: "/integrations",
  };

  const firstListRaw = integrations.filter((p) => FE_STACK.includes(p.name));
  const secondListRaw = integrations.filter((p) => !FE_STACK.includes(p.name));

  const firstList = [...firstListRaw, ...firstListRaw];
  const secondList = [...secondListRaw, ...secondListRaw];

  return (
    <section className="section overflow-hidden">
      {fluidContainer ? (
        <div className="container-fluid">
          <div
            className={`${!hideBackground && "overflow-hidden rounded-xl border border-border bg-body pt-10 md:pt-20"}`}
          >
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <div className="px-5 md:px-10">
                  {title && largeHeading ? (
                    <h1
                      className="has-gradient mb-6"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  ) : (
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

                  {!hideCTAButton && button && button.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-11"
                      link={button.link}
                      label={button.label}
                    />
                  )}

                  {!hideHeadingOverlay && (
                    <div
                      aria-hidden="true"
                      className="rotate-animation pointer-events-none absolute left-2/4 top-44 -z-10 h-80 w-[550px] -translate-x-2/4 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-60 blur-[120px] bg-gradient-to-l"
                    />
                  )}
                </div>
              </div>
              <div
                className="col-12 pt-20"
                data-aos="fade-up-sm"
                data-aos-delay={200}
              >
                <div className="marquee-wrapper flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5">
                    {firstList.map((item, index) => (
                      <IntegrationCard
                        key={`${item.name}-${index}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                  <div
                    className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {firstList.map((item, index) => (
                      <IntegrationCard
                        key={`${item.name}-${index}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                </div>
                <div className="marquee-wrapper mt-5 flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                    {secondList.map((item, i: number) => (
                      <IntegrationCard
                        key={`${item.name}-${i}`}
                        style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                  <div
                    className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {secondList.map((item, i: number) => (
                      <IntegrationCard
                        key={`${item.name}-${i}`}
                        style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className={`${!hideBackground && "overflow-hidden rounded-xl border border-border bg-body pt-10 md:pt-20"}`}
          >
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <div className="px-5 md:px-10">
                  {title && largeHeading ? (
                    <h1
                      className="has-gradient mb-6"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  ) : (
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

                  {button && button.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-11"
                      link={button.link}
                      label={button.label}
                    />
                  )}

                  <div
                    aria-hidden="true"
                    className="rotate-animation pointer-events-none absolute left-4/6 top-44 -z-10 h-80 w-[550px] -translate-x-1/2 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-60 blur-[120px] bg-gradient-to-l"
                  />
                </div>
              </div>
              <div
                className="col-12 pt-20"
                data-aos="fade-up-sm"
                data-aos-delay={200}
              >
                <div className="marquee-wrapper flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5">
                    {firstList.map((item, i: number) => (
                      <IntegrationCard
                        key={`${item.name}-${i}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                  <div
                    className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {firstList.map((item, i: number) => (
                        <IntegrationCard
                          key={`${item.name}-${i}`}
                          image={item.icon}
                          name={item.name}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="marquee-wrapper mt-5 flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                    {secondList.map((item, i: number) => (
                      <IntegrationCard
                        key={`${item.name}-${i}`}
                        style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                  <div
                    className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {secondList.map((item, i: number) => (
                      <IntegrationCard
                        key={`${item.name}-${i}`}
                        style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                        image={item.icon}
                        name={item.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntegrationSection;
