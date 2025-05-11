// components/Footer.jsx
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram, FaPinterestP } from 'react-icons/fa';
import { DM_Sans } from 'next/font/google';

// Initialize DM Sans font
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className={`bg-black text-white py-12 ${dmSans.className}`}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-3 mb-8">
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-900 transition-colors duration-300">
            <FaFacebookF className="text-white hover:text-yellow-400" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-900 transition-colors duration-300">
            <FaXTwitter className="text-white hover:text-yellow-400" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-900 transition-colors duration-300">
            <FaInstagram className="text-white hover:text-yellow-400" />
          </Link>
          <Link href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-900 transition-colors duration-300">
            <FaPinterestP className="text-white hover:text-yellow-400" />
          </Link>
        </div>

        <div className="flex space-x-8 mb-8">
          <Link href="/digital" className="text-sm text-white font-semibold hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            DIGITAL
          </Link>
          <Link href="/ekbis" className="text-sm text-white font-semibold hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            EKBIS
          </Link>
          <Link href="/hukum" className="text-sm text-white font-semibold hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            HUKUM
          </Link>
          <Link href="/politik" className="text-sm text-white font-semibold hover:text-yellow-300 transition-colors duration-300 tracking-wider">
            POLITIK
          </Link>
        </div>

        <div className="text-gray-500 text-sm">
          © 2025 d&apos;Talk. Designed by <Link href={"https://www.aconymous.com/"} className="text-gray-300 hover:text-yellow-300 transition duration-300">Aconymous</Link>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;