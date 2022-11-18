import { TfiTwitterAlt } from "react-icons/tfi";
import { HiOutlineHome } from "react-icons/hi";
import { FiHash, FiBookmark } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsEnvelope, BsCardList } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="pt-4 flex flex-col h-screen pb-4 flex-1">
      <div className="flex-1">
        <TfiTwitterAlt className="ml-4 text-white text-[2rem]" />
        <ul className="flex flex-col space-y-3 mt-8">
          <li>
            <Link href="/" className="nav__list-item">
              <HiOutlineHome className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <FiHash className="text-2xl" />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <BiBell className="text-2xl" />
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <BsEnvelope className="text-2xl" />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <FiBookmark className="text-2xl" />
              <span>Bookmark</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <BsCardList className="text-2xl" />
              <span>Lists</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav__list-item">
              <AiOutlineUser className="text-2xl" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>

        <button className="bg-blue-500 px-20 p-3 rounded-full ml-4 mt-3 hover:bg-blue-600">
          Tweet
        </button>
      </div>

      <div className="flex items-center ml-3">
        <Image
          alt="profile picture"
          className="rounded-full mr-4"
          width={40}
          height={40}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        />
        <div>
          <p className="font-bold">@viktrix_</p>
          <p className="text-gray-400 text-sm">Viktor Sopko</p>
        </div>
      </div>
    </nav>
  );
}
