"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-5 text-2xl font-bold">About</div>

      <div className="space-y-3">
        <div className="md:flex md:justify-center">
          <div className="font-bold md:w-1/6 md:text-center">名 前</div>
          <div className="md:w-5/6">KOTARU</div>
        </div>

        <div className="md:flex md:justify-center">
          TRPGのログ、迷シーン置き場
        </div>
        <div className="md:flex md:justify-center">
          <div className="font-bold md:w-1/6 md:text-center">自己紹介</div>
          <div className="md:w-5/6">
            <ul>
              <li>GM：はちゃめちゃアドリブ系</li>
              <li>PL：ゴネロールプレイ系ファンブラー</li>
              <li>
                よくやるシステム
                <ul>
                  <li>・幻想ナラトグラフ</li>
                  <li>・クトゥルフ神話TRPG(6版)</li>
                  <li>・アークナイツTRPG</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
