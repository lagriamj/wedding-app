// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import grand_gala_logo from "../../public/assets/GRAND_GALA.png"; // <- replace with your actual circle logo path

export function Header() {
  return (
 <header className="w-full py-3 border-b border-gray-300" style={{ backgroundColor: '#FFFCF2' }}>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
    
    {/* Left Nav */}
    <nav className="flex space-x-10 text-base tracking-wider text-gray-600 uppercase font-large">
      <Link href="#about">About</Link>
      <Link href="#process">Process</Link>
      <Link href="#portfolio">Portfolio</Link>
    </nav>

    {/* Logo + Title */}
    <div className="flex flex-col items-center text-center">
     <div className="relative w-32 h-32 mb-1 rounded-full ring-1 ring-gray-300">
  <Image
    src={grand_gala_logo}
    alt="Grand Gala Logo"
    fill
    className="rounded-full object-cover"
  />
</div>
      <h1 className="text-3xl font-serif tracking-widest">GRAND GALA</h1>
      <p className="text-base text-gray-600 tracking-widest">
        CONFERENCE & EVENT CENTER
      </p>
    </div>

    {/* Right Nav */}
    <nav className="flex space-x-10 text-base tracking-wider text-gray-600 uppercase font-large">
      <Link href="#press">Feedback</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#journal">Direction</Link>
    </nav>
  </div>
</header>

  );
}
