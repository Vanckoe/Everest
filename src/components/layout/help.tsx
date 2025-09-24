'use client';

import * as React from 'react';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

type NavItem = { id: string; label: string; href: string };

const DEFAULT_ITEMS: NavItem[] = [
  { id: 'whatsapp', label: 'Whatsapp', href: 'https://web.whatsapp.com/' },
  { id: 'call', label: 'Call', href: 'tel:+18132901625' },
  //   { id: 'terms', label: 'Terms & Policies', href: '/terms&policies' },
];

export default function Help({ items = DEFAULT_ITEMS }: { items?: NavItem[] }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const firstItemRef = React.useRef<HTMLAnchorElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    if (open) {
      setTimeout(() => firstItemRef.current?.focus(), 0);
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-4 right-4 z-[70] md:bottom-[1.875rem] md:right-[1.875rem]"
    >
      <div className="relative">
        <div
          className={[
            'absolute bottom-full right-0 mb-2 w-[10rem]',
            'origin-bottom-right overflow-hidden rounded-xl bg-[#0F1011]',
            'transition-all duration-200 ease-out',
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0',
          ].join(' ')}
          role="menu"
          aria-label="Help menu"
        >
          {items.map((it, idx) => (
            <Link
              key={it.id}
              href={it.href}
              ref={idx === 0 ? firstItemRef : undefined}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className={[
                'block px-4 py-3 text-base leading-[120%] -tracking-wider outline-none',
                'text-[#898E97] hover:text-white',
                'hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/20',
              ].join(' ')}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className={[
            'group flex size-14 min-w-14 items-center justify-center rounded-full',
            'border border-white/10 bg-accent',
            'transition-colors hover:border-white/30 hover:bg-[#191A1B]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
          ].join(' ')}
        >
          <PhoneCall className="text-[#A3A3A3] mr-0.5 transition-colors group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
