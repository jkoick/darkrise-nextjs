import AnimatedAnchor from "@/components/AnimatedAnchor";
import CallToAction1 from "@/partials/CallToAction1";
import SeoMeta from "@/partials/SeoMeta";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section overflow-hidden text-center">
        <div className="container relative" data-aos="fade-up-sm">
          <div className="row justify-center">
            <div className="text-center sm:col-10 md:col-8 lg:col-8 xl:col-7">
              <h1 className="h1 text-fill-transparent relative mb-4 bg-gradient-to-t from-black from-15% via-indigo-100 via-80% to-body bg-clip-text text-[80px] font-semibold sm:text-[130px] md:text-[230px] lg:text-[330px]">
                404
              </h1>
              <h1 className="has-gradient h2 mb-4">Oops! page not found</h1>
              <p className="text-lg opacity-70">
                Your Trusted Partner in Data Protection with Cutting-Edge
                Solutions for <br /> Comprehensive Data Security.
              </p>
              <AnimatedAnchor
                className="btn-primary mt-10"
                link="/"
                label="Go Back To Home"
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-40 blur-[100px] bg-gradient-to-tr md:block"
          ></div>
        </div>
      </section>
      <CallToAction1 />
    </>
  );
};

export default NotFound;
