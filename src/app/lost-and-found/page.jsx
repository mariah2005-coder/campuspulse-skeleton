export default function LostAndFoundPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Lost & Found
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Track lost items around campus
          </h1>
        </div>
        <p className="text-base leading-7 text-slate-600">
          A simple placeholder for lost-and-found listings so students can post missing or found belongings.
        </p>
      </div>
    </section>
  );
}
