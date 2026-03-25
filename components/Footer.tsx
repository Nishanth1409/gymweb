export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-sm text-zinc-400 md:flex-row">
        <p>© {new Date().getFullYear()} GYMWEB. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="transition-colors hover:text-[#B6FF2E]" href="#">
            Instagram
          </a>
          <a className="transition-colors hover:text-[#B6FF2E]" href="#">
            YouTube
          </a>
          <a className="transition-colors hover:text-[#B6FF2E]" href="#">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
