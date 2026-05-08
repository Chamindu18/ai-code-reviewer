export default function Loading() {
  return (
    <div className="app-container py-10">
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-1/2 rounded-2xl bg-gray-800/80"></div>
        <div className="grid gap-4 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-28 rounded-2xl bg-gray-800/80"></div>
          ))}
        </div>
        <div className="h-64 rounded-3xl bg-gray-800/70"></div>
      </div>
    </div>
  );
}
