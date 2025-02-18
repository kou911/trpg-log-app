"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-5 text-2xl font-bold">About</div>
      <ul>
        <li>アークナイツTRPG</li>
        <li>クトゥルフ神話TRPG</li>
        <li>幻想ナラトグラフ</li>
        <li>エモクロアTRPG</li>
      </ul>
      <br></br>
      <p>・主な遊び方</p>
      <p>オンラインセッション、半テキセ</p>
      <p>・ドがつくアドリブGM</p>
      <p>・大体常識人枠になるPL</p>
    </main>
  );
};

export default Page;
