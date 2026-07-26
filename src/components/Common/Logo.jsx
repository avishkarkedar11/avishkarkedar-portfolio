export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 group">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-2xl font-black text-white shadow-lg transition duration-300 group-hover:scale-105">
        AK
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Avishkar Kedar
        </h1>

        <p className="text-xs uppercase tracking-widest text-slate-500">
          AI Engineer
        </p>
      </div>
    </a>
  );
}