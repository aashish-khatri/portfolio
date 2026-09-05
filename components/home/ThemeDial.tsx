"use client";

import { useSyncExternalStore } from 'react';

export const THEMES = [
  { id: 'paper', name: 'Paper', accent: '#0F6F66', bg: '#F4F4F1' },
  { id: 'plum', name: 'Plum', accent: '#67295F', bg: '#F6F1F4' },
  { id: 'cobalt', name: 'Cobalt', accent: '#1F4FD8', bg: '#EFF2F7' },
  { id: 'oxblood', name: 'Oxblood', accent: '#7A1F2B', bg: '#F5F1EE' },
  { id: 'ink', name: 'Ink', accent: '#7FD1C4', bg: '#14161A' },
] as const;

type ThemeId = (typeof THEMES)[number]['id'];

function getTheme(): ThemeId {
  const v = document.documentElement.getAttribute('data-theme');
  return THEMES.some((t) => t.id === v) ? (v as ThemeId) : 'paper';
}

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => mo.disconnect();
}

export default function ThemeDial() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'paper' as ThemeId);

  const apply = (id: ThemeId) => {
    const root = document.documentElement;
    root.classList.add('theming');
    root.setAttribute('data-theme', id);
    try { localStorage.setItem('theme', id); } catch {}
    window.setTimeout(() => root.classList.remove('theming'), 400);
  };

  return (
    <fieldset className="m-0 p-0 border-0">
      <legend className="sr-only">Site palette</legend>
      <div className="flex flex-wrap gap-x-5 gap-y-3" role="radiogroup" aria-label="Site palette">
        {THEMES.map((t) => {
          const active = t.id === theme;
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => apply(t.id)}
              className="group flex items-center gap-2.5 t-small text-text-secondary"
            >
              <span
                aria-hidden
                className="relative inline-block h-6 w-6 rounded-full border transition-transform group-hover:scale-110"
                style={{ background: t.bg, borderColor: active ? t.accent : 'var(--p-line)', boxShadow: active ? `0 0 0 2px var(--p-bg), 0 0 0 3.5px ${t.accent}` : 'none' }}
              >
                <span className="absolute inset-[6px] rounded-full" style={{ background: t.accent }} />
              </span>
              <span className={active ? 'text-text-primary' : 'group-hover:text-text-primary'}>{t.name}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
