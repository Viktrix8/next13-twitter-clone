import React from "react";
import Navbar from "./Navbar";
import News from "./News";
import TweetInput from "./TweetInput";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="flex xl:max-w-6xl md:max-w-5xl mx-auto text-white">
      <Navbar />
      <main className="border border-b-0 border-gray-800 flex-[3]">
        <TweetInput />
        {/* TweetsList */}
      </main>
      <News />
    </div>
  );
}
