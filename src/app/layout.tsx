import config from "@/config/config.json";
import theme from "@/config/theme.json";
import Hotjar from "@/helpers/Hotjar";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pf = theme.fonts.font_family.primary;

  return (
    <html suppressHydrationWarning={true} lang="sk">
      {config.google_tag_manager.enable && (
        <GoogleTagManager gtmId={config.google_tag_manager.gtm_id} />
      )}
      {config.hotjar.enable && (
        <Hotjar siteId={config.hotjar.site_id} />
      )}

      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <link rel="shortcut icon" href={config.site.favicon} />
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
