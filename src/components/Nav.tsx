"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Left side brand / title */}
        <h1 className="font-semibold text-lg">Roadrunner Site</h1>
        <div className="bg-red-500 text-white p-2">Tailwind test</div>



        {/* Right side links */}
        <div className="flex gap-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:underline">
            About & Midcentury
          </Link>
          <Link href="/submit" className="text-blue-600 hover:underline">
            Submit & Tree Info
          </Link>
        </div>
      </div>
    </nav>
  );
}
