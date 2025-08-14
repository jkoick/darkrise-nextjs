import { markdownify } from "@/lib/utils/textConverter";

interface ComparisonFeature {
  name: string;
  description?: string;
  us: boolean | string;
  competitor1: boolean | string;
  competitor2?: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  description?: string;
  ourProduct: {
    name: string;
    highlight?: boolean;
  };
  competitors: Array<{
    name: string;
    logo?: string;
  }>;
  features: ComparisonFeature[];
}

const ComparisonTable = ({
  title,
  description,
  ourProduct,
  competitors,
  features,
}: ComparisonTableProps) => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <img
          src="/images/icons/svg/check.svg"
          alt="Yes"
          width={20}
          height={20}
          className="text-green-400 mx-auto"
        />
      ) : (
        <img
          src="/images/icons/svg/cross.svg"
          alt="No"
          width={20}
          height={20}
          className="text-red-400 mx-auto"
        />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(title)} />
            {description && (
              <p
                className="mb-12 text-light"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
        </div>

        <div className="row justify-center">
          <div className="lg:col-10">
            <div
              className="comparison-table overflow-hidden rounded-2xl border border-white/10"
              data-aos="fade-up-sm"
            >
              {/* Header */}
              <div className="grid grid-cols-4 bg-white/5">
                <div className="p-4 border-b border-white/10">
                  <h3 className="font-semibold">Features</h3>
                </div>
                <div
                  className={`p-4 border-b border-white/10 text-center ${
                    ourProduct.highlight
                      ? "bg-primary/20 border-primary/50"
                      : ""
                  }`}
                >
                  <h3 className="font-semibold">{ourProduct.name}</h3>
                  {ourProduct.highlight && (
                    <span className="text-xs text-primary">Recommended</span>
                  )}
                </div>
                {competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className="p-4 border-b border-white/10 text-center"
                  >
                    {competitor.logo ? (
                      <img
                        src={competitor.logo}
                        alt={competitor.name}
                        width={80}
                        height={32}
                        className="mx-auto mb-1"
                      />
                    ) : (
                      <h3 className="font-semibold text-sm">
                        {competitor.name}
                      </h3>
                    )}
                  </div>
                ))}
              </div>

              {/* Features */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-white/2" : ""}`}
                >
                  <div className="p-4 border-b border-white/10">
                    <div>
                      <h4 className="font-medium text-sm">{feature.name}</h4>
                      {feature.description && (
                        <p className="text-xs text-light opacity-70 mt-1">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`p-4 border-b border-white/10 text-center ${
                      ourProduct.highlight ? "bg-primary/10" : ""
                    }`}
                  >
                    {renderValue(feature.us)}
                  </div>
                  <div className="p-4 border-b border-white/10 text-center">
                    {renderValue(feature.competitor1)}
                  </div>
                  {feature.competitor2 && (
                    <div className="p-4 border-b border-white/10 text-center">
                      {renderValue(feature.competitor2)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
