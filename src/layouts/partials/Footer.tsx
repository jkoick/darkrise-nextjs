import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";

const Footer = () => {
  const { footer, company, product } = menu;

  function replaceYear(text: string) {
    const year = new Date().getFullYear();

    return text.replace("{year}", year.toString());
  }

  return (
    <footer className="py-10 md:py-16 xl:py-24">
      <div className="container" data-aos="fade-up-sm">
        {/* Main footer content - Logo, Company, Product in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Logo section */}
          <div className="flex justify-start">
            <Logo footerLogo={true} />
          </div>
          
          {/* Company section */}
          <div>
            <h3 className="mb-6 text-base tracking-none text-white/50 text-left">
              Company
            </h3>
            <ul className="flex flex-col gap-3 items-start">
              {company.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product section */}
          <div>
            <h3 className="mb-6 text-base tracking-none text-white/50 text-left">
              Product
            </h3>
            <ul className="flex flex-col gap-3 items-start">
              {product.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section - Full width with copyright and footer links */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {config.params.copyright && (
              <div>
                <p className="text-sm text-white/60 text-left">
                  {replaceYear(config.params.copyright)}
                </p>
              </div>
            )}
            <div>
              <ul className="flex flex-wrap justify-start md:justify-end gap-4">
                {footer?.map((item, i) => (
                  <li key={`${item.name}-${i}`}>
                    <a
                      className="text-sm text-white/60 transition hover:text-secondary"
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
