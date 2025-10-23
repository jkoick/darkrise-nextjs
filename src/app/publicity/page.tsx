import SeoMeta from "@/partials/SeoMeta";

const Publicity = () => {
  return (
    <>
      <SeoMeta
        title="Publicity"
        description="Project publicity and funding information"
      />

      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="content">
                <h1 className="mb-8 text-center">Publicity</h1>

                <div className="mb-12">
                  <p className="text-lg leading-relaxed">
                    Realizácia projektu &ldquo;Analýza a návrh individualizovaného
                    riešenia digitálneho predajcu pre zvýšenie objemov predaja
                    pomocou nástroja využívajúceho umelú inteligenciu&rdquo;
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Financované Európskou úniou NextGenerationEU
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="flex flex-wrap items-center justify-center gap-8">
                    <img
                      src="/images/planobnovy.png"
                      alt=""
                      width={1080}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publicity;
