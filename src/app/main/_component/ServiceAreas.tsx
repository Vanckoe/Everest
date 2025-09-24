'use client';

import { MapPin } from 'lucide-react';
import React from 'react';

const CITIES = [
  'Hinsdale',
  'Oakbrook',
  'Downers Grove',
  'Evanston',
  'Winnetka',
  'Willmette',
  'Skokie',
  'Northbrook',
  'Highland Park',
  'Deerfield',
  'Elmhurst',
  'Willowbrook',
  'Westmont',
  'Lombard',
  'Naperville',
  'Oak Park',
  'La Grange',
  'Wheaton',
  'Aurora',
  'Schaumburg',
  'Other nearby cities',
] as const;

type Props = {
  /** Sticky offset from top for desktop, in rem (Tailwind arbitrary value). Default: 6rem */
  stickyOffsetRem?: number;
};

export default function ServiceAreasSticky({ stickyOffsetRem = 6 }: Props) {
  const stickyTopClass = `md:top-[${stickyOffsetRem}rem]`;

  return (
    <section
      aria-labelledby="areas-title"
      className="flex flex-col gap-20 md:flex-row md:items-center justify-between w-full bg-accent text-white pt-20 md:pt-24 px-12 md:px-16"
    >
      <div className="mx-auto ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* LEFT: sticky intro panel (sticks within this section only) */}
          <aside
            className={[
              'rounded-2xl bg-accent text-white md:col-span-2 md:pl-0 md:pr-8',
              'md:sticky', // becomes sticky on md+
              stickyTopClass, // top offset (in rem)
              'self-start', // prevent stretching so sticky works correctly
            ].join(' ')}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 md:px-3 py-2 md:py-1 text-2xl md:text-sm font-medium">
              <MapPin className="size-6 md:size-4" aria-hidden />
              Service Coverage
            </div>

            <h2
              id="areas-title"
              data-aos="fade-up"
              className="font-Merriweather mt-6 text-[3.6rem] md:text-[3rem] leading-[120%]"
            >
              Local Suburbs <br /> We Serve
            </h2>

            {/* This box can be taller so you see the internal scroll “falling” effect */}
            <div className="mt-3 space-y-3 text-white/85 text-2xl md:text-lg">
              <p>
                Everest Appliance Repair serves the Greater Chicagoland suburbs. The list on the
                right shows our current coverage.
              </p>
              <p>
                Same-day or next-day service is often available. Call us to confirm timing for your
                area.
              </p>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl md:text-base text-white/90">
                  Don’t see your city? We frequently travel to nearby locations. We’ll do our best
                  to help.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT: cities list (taller content makes the sticky behavior obvious) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:col-span-3 md:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-accent text-white text-xs font-semibold">
                #
              </span>
              <span className="text-sm text-black">Service cities (informational)</span>
            </div>

            <ol
              className="
                grid grid-cols-1 gap-2
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {CITIES.map((city, i) => (
                <li
                  key={city}
                  className="hidden md:flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50"
                >
                  <span
                    className="
                      mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center
                      rounded-lg bg-accent text-xs font-semibold
                    "
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-color">{city}</p>
                    <p className="text-sm text-black">Appliance repair available</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Optional: chip cloud for alternate visual read */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-black">
                Quick view
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {CITIES.map(city => (
                  <span
                    key={`chip-${city}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-color shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Accent bar */}
            <div className="mt-8 h-1 w-full rounded-full bg-accent/15">
              <div className="h-full w-1/3 rounded-full second-color" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
