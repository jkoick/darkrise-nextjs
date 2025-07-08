import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { CustomersLogoData } from "@/data/content";

interface CustomersLogoProps {
  data: CustomersLogoData;
}

const CustomersLogo = ({ data }: CustomersLogoProps) => {
  const { title, logos } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex">
              <p
                className="w-full pb-3 text-center text-2xl/snug font-medium tracking-wide sm:whitespace-nowrap sm:pb-0"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            </div>
          </div>
          <div
            className="col-12 pt-14"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="relative flex gap-x-10 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-20 bg-gradient-to-b from-white/20 backdrop-blur-xl rounded-2xl to-transparent p-8 after:pointer-events-none after:absolute after:right-0 after:h-full after:w-20 md:gap-x-20 before:md:w-40 after:md:w-40">
              <div className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20">
                {logos?.map((logo, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo.src}
                      className="h-full object-contain"
                      alt={logo.alt}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              <div
                className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20"
                aria-hidden="true"
              >
                {logos?.map((logo, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo.src}
                      className="h-full object-contain"
                      alt={logo.alt}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersLogo;