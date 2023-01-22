import { Nav } from "@/components/nav";
import { Title } from "@/components/Title";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <main>
          <div className="mb-44">
            <Title />
            <Nav />
          </div>
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
