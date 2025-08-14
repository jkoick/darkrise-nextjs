import { markdownify } from "@/lib/utils/textConverter";
import { ValuesData } from "@/data/content";

interface ValuesProps {
  data: ValuesData;
}

const Values = ({ data }: ValuesProps) => {
  const { title, description, values } = data;

  return (
    <section className="section relative">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            {title && (
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
              />
            )}
            {description && (
              <p
                className="mb-12 text-light"
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                data-aos-delay="100"
              />
            )}
          </div>
        </div>

        {values && values.length > 0 && (
          <div className="row g-4 relative z-10">
            {values.map((value, index) => (
              <div key={index} className="lg:col-6">
                <div
                  className="value-card group relative h-full overflow-hidden rounded-2xl border border-white/10 p-6"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={value.icon}
                        alt={value.title}
                        width={40}
                        height={40}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-light">{value.description}</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-secondary opacity-0 blur-[83px] transition-opacity duration-300 bg-gradient-to-l group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Values;
