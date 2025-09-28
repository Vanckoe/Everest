// components/BrandGrid.tsx
import Image from 'next/image';

/* ---------- тип ячейки ---------- */
type CellData =
  | { type: 'logo'; src: string; alt: string }
  | { type: 'text'; spanMd?: number } // spanMd = col-span-N на desktop
  | null;

/* ---------- матрица 4×6 (для desktop) ---------- */
const grid: CellData[][] = [
  // row 0
  [
    null,
    { type: 'logo', src: '/img/brands/Viking.png', alt: 'viking' },
    { type: 'text', spanMd: 3 },
    null,
  ],
  // row 1
  [
    null,
    { type: 'logo', src: '/img/brands/bosch.avif', alt: 'Bosch' },
    { type: 'logo', src: '/img/brands/subzero.png', alt: 'Sub-Zero' },
    { type: 'logo', src: '/img/brands/Kitchenaid.png', alt: 'Kitchenaid' },
    { type: 'logo', src: '/img/brands/miele.png', alt: 'miele' },
    { type: 'logo', src: '/img/brands/thermador.avif', alt: 'Thermador' },
    null,
  ],
  // row 2
  [
    null,
    { type: 'logo', src: '/img/brands/dacor.png', alt: 'Dacor' },
    { type: 'logo', src: '/img/brands/h.png', alt: 'h' },
    { type: 'logo', src: '/img/brands/samsung.avif', alt: 'marvel' },
    { type: 'logo', src: '/img/brands/Whirlpool.png', alt: 'Scotsman' },
    { type: 'logo', src: '/img/brands/wolf.png', alt: 'Wolf' },
  ],
  // row 3
  [
    null,
    null,
    null,
    null,
    { type: 'logo', src: '/img/brands/lg-logo.png', alt: 'dacor' },
    null,
  ],
];

export default function BrandGrid() {
  return (
    <div
      id="brands"
      className="grid grid-cols-2 md:grid-cols-6 auto-rows-[8.75rem] bg-[#F7F8FA] px-5 py-30 md:px-20 w-full select-none"
    >
      {grid.map((row, r) =>
        row.map((cell, c) => {
          if (!cell) {
            return <div key={`${r}-${c}`} className="hidden md:block" />;
          }

          const leftHasContent = c > 0 && row[c - 1];
          const topHasContent = r > 0 && grid[r - 1][c];

          const borders =
            `${leftHasContent ? 'md:border-l border-gray-200' : ''} ` +
            `${topHasContent ? 'border-t border-gray-200' : ''}`;

          const baseSpan =
            cell.type === 'text'
              ? `col-span-2 md:col-span-${cell.spanMd ?? 1} md:justify-start`
              : '';
          const orderFix = cell.type === 'text' ? 'order-first md:order-none' : '';

          return (
            <div
              key={`${r}-${c}`}
              className={`flex items-center justify-center p-3 md:p-6 ${borders} ${baseSpan} ${orderFix}`}
            >
              {cell.type === 'text' ? (
              <p className="text-center md:text-start font-Merriweather leading-[100%] mb-20 text-6xl md:text-4xl">
                All brands. <br />
                One Expert Team. <br />Fixed Right.
              </p>
              ) : (
                <Image
                  {...cell}
                  width={140}
                  height={60}
                  className="h-[4rem] md:h-[3rem] w-fit"
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
