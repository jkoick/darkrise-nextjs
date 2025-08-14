"use client";

import { useState } from "react";
import AnimatedAnchor from "@/layouts/components/AnimatedAnchor";
import { markdownify } from "@/lib/utils/textConverter";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  highlighted?: boolean;
  button: {
    label: string;
    link: string;
  };
}

interface PricingTableProps {
  title: string;
  description: string;
  plans: PricingPlan[];
  showYearlyDiscount?: boolean;
}

const PricingTable = ({
  title,
  description,
  plans,
  showYearlyDiscount = true,
}: PricingTableProps) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(title)} />
            <p
              className="mb-8 text-light"
              dangerouslySetInnerHTML={markdownify(description)}
            />

            {showYearlyDiscount && (
              <div className="mb-12 flex justify-center">
                <div className="inline-flex rounded-lg border border-white/20 p-1">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      billingCycle === "monthly"
                        ? "bg-primary text-white"
                        : "text-light hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      billingCycle === "yearly"
                        ? "bg-primary text-white"
                        : "text-light hover:text-white"
                    }`}
                  >
                    Yearly
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      -20%
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row g-4 justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="lg:col-4 md:col-6">
              <div
                className={`pricing-card h-full rounded-2xl border p-6 relative transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-b from-primary/10 to-transparent"
                    : "border-white/10 hover:border-primary/50"
                }`}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                  <p className="mb-6 text-sm text-light">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      $
                      {billingCycle === "yearly"
                        ? plan.price.yearly
                        : plan.price.monthly}
                    </span>
                    <span className="text-light">
                      /{billingCycle === "yearly" ? "year" : "month"}
                    </span>
                    {billingCycle === "yearly" && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${plan.price.monthly * 12 - plan.price.yearly}/year
                      </div>
                    )}
                  </div>

                  <AnimatedAnchor
                    className={
                      plan.highlighted
                        ? "btn-primary w-full mb-6"
                        : "btn-outline-primary w-full mb-6"
                    }
                    link={plan.button.link}
                    label={plan.button.label}
                  />
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <img
                        src="/images/icons/svg/check.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
