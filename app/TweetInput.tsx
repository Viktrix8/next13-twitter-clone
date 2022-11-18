"use client";

import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";

type Props = {};

export default function TweetInput({}: Props) {
  return (
    <div className="flex-1 flex flex-col p-4 border-b border-gray-800">
      <div className="">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="mt-4 flex items-start">
          <div>
            <Image
              alt="profile picture"
              className="rounded-full mr-4"
              width={50}
              height={50}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
          </div>
          <TextareaAutosize
            className="bg-transparent flex-1 tracking-wide mt-3 resize-none outline-none text-lg placeholder:text-gray-400"
            placeholder="What's happening"
          />
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-500/40 ml-auto p-2 px-4 w-fit self-end rounded-full">
        Tweet
      </button>
    </div>
  );
}
