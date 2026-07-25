export default function HomePage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Home
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            CampusPulse Dashboard Overview
          </h1>
        </div>
        <p className="text-base leading-7 text-slate-600">
          A clean landing page for the campus dashboard, showing key updates and quick access to every community feature.
        </p>
      </div>
    </section>
  );
}
