export default function TechBadge({ name }) {
  return (
    <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
      {name}
    </span>
  );
}