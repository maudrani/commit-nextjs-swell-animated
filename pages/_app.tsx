import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
