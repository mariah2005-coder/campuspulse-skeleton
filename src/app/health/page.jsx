"use client";

import { useEffect, useState } from "react";

export default function HealthCheckPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHealthData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch health data.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadHealthData();

    return () => controller.abort();
  }, []);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Health Check
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Verify data fetching is working
          </h1>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-slate-700">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
              <span>Loading health data...</span>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-6 text-rose-700">
            <p className="font-semibold">Unable to load health data.</p>
            <p>{error}</p>
          </div>
        ) : !data ? (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-6 text-amber-700">
            <p>Waiting for health data to become available.</p>
          </div>
        ) : (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              Data fetched successfully from the public health-check API.
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-700">Title</p>
              <p className="mt-1 text-base text-slate-900">{data?.title}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">Body</p>
              <p className="mt-1 text-base text-slate-900">{data?.body}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
              <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
