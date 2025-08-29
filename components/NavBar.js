import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-green-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-3" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="NOX logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold tracking-wide">
            Scherp in de Struiken
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/fotopagina" className="hover:text-white">Foto&apos;s</Link>
          <Link href="/puzzelpagina" className="hover:text-white">Puzzel</Link>
          <Link href="/wedstrijd" className="hover:text-white">Wedstrijd</Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800"
          aria-label="Menu"
        >
          <span className="text-green-300">☰</span>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-white">Home</Link>
          <Link href="/blog" className="block hover:text-white">Blog</Link>
          <Link href="/fotopagina" className="block hover:text-white">Foto&apos;s</Link>
          <Link href="/puzzelpagina" className="block hover:text-white">Puzzel</Link>
          <Link href="/wedstrijd" className="block hover:text-white">Wedstrijd</Link>
        </nav>
      )}
    </header>
  );
}
