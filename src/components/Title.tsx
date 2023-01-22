import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const Title = () => {
  return (
    <div className="mb-8">
      <BigLetter>T</BigLetter>
      <BigLetter>M</BigLetter>
      <BigLetter>N</BigLetter>
      <h2 className="italic">Tommy MARTIN - 32</h2>
      <h2 className="italic">Web developer based in Chambéry, France</h2>
    </div>
  );
};

const BigLetter = ({ children }: { children: string }) => {
  return <h1 className="font-bold text-7xl inline p-0 m-0">{children}</h1>;
};
