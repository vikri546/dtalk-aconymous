// components/Footer.jsx
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-2 mb-8">
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors duration-300">
            <FaFacebookF className="text-white" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors duration-300">
            <FaXTwitter className="text-white" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors duration-300">
            <FaInstagram className="text-white" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors duration-300">
            <FaPinterestP className="text-white" />
          </Link>
        </div>

        <div className="flex space-x-8 mb-8">
          <Link href="/digital" className="text-white hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            DIGITAL
          </Link>
          <Link href="/ekbis" className="text-white hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            EKBIS
          </Link>
          <Link href="/hukum" className="text-white hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            HUKUM
          </Link>
          <Link href="/politik" className="text-white hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            POLITIK
          </Link>
        </div>

        <div className="text-gray-400 text-sm">
          © 2025 d&apos;Talk. Designed by <Link href={"https://www.aconymous.com/"} className="text-white hover:text-yellow-300 transition duration-300">Aconymous</Link>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;