import { TfiTwitterAlt } from "react-icons/tfi";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="pt-4">
      <TfiTwitterAlt className="ml-3 text-white text-[2rem]" />
      <ul className="flex flex-col space-y-4 mt-8">
        <li className="nav__list-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav__list-item">Explore</li>
        <li className="nav__list-item">Notifications</li>
        <li className="nav__list-item">Messages</li>
        <li className="nav__list-item">Bookmarks</li>
        <li className="nav__list-item">Lists</li>
        <li className="nav__list-item">Profile</li>
      </ul>
    </nav>
  );
}
