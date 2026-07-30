export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-lg font-black text-white shadow-md shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
        AK
      </div>

      <div className="flex flex-col">
        <span className="font-['Sora'] text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          Avishkar Kedar
        </span>
      </div>
    </a>
  );
}