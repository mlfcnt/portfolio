import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ProjectProvider } from "../ProjectProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProjectProvider>
  );
}
export default MyApp;
