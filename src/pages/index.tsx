/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tommy MARTIN - Développeur Typescript</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <p>Hey ! I'm Tommy. </p>
        <p>I'm a web developer based in Chambéry.</p>
        <p>
          I have been working for a compagny called{" "}
          <Link href="https://www.adsoftware.fr/" className="underline">
            ADSoftware
          </Link>{" "}
          for three and a half years now.
        </p>
        <p>We are making an ERP for civil and military aviation compagnies</p>
      </section>
    </>
  );
}
