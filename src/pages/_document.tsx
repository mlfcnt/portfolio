import { Nav } from "@/components/nav";
import { Title } from "@/components/Title";
import { Html, Head, Main, NextScript } from "next/document";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen flex flex-col ">
        <Title />
        <Nav />
        <main className="flex-grow">
          <Main />
          <NextScript />
        </main>
        <footer>
          <div className="flex mt-4 justify-end">
            <AiOutlineLinkedin size={24} className="mr-2" />
            <FiTwitter size={24} />
          </div>
        </footer>
      </body>
    </Html>
  );
}
