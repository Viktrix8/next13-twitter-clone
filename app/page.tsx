import React from "react";
import Navbar from "./Navbar";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="flex xl:max-w-6xl md:max-w-2xl mx-auto text-white">
      <Navbar />
      <main className="pt-4">
        {/* TweetInput */}
        {/* TweetsList */}
      </main>
      {/* News */}
    </div>
  );
}
