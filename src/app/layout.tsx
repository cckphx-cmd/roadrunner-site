export const metadata = {
  title: "Roadrunner Tree Grant – Saguaro District",
  description: "Greenway Terrace neighborhood tree grant info and eligibility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b">
          <nav className="mx-auto max-w-5xl p-4 flex gap-6">
            <a href="/">Home</a>
            <a href="/about">About & Midcentury</a>
            <a href="/submit">Submit & Tree Info</a>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
        <footer className="border-t mt-16">
          <div className="mx-auto max-w-5xl p-4 text-sm">
            Links:{" "}
            <a
              className="underline"
              href="https://www.phoenix.gov/administration/departments/heat/tree-shade-programs/tree-grant-programs.html"
              target="_blank"
            >
              City Tree Grant Programs
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
