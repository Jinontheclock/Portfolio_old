import type { Page } from '../types';

export const PROJECT_PAGES: ReadonlyArray<Page> = [
  'prolog',
  'iceland',
  'tinypaws',
  'muji',
  'archivehouse',
  'archiveofveilance',
  'matchalatte',
  'starlink',
];

const PROJECT_PAGE_SET = new Set<Page>(PROJECT_PAGES);

export const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  projects: '/projects',
  about: '/about',
  prolog: '/projects/prolog',
  iceland: '/projects/best-of-iceland',
  tinypaws: '/projects/tinypaws',
  muji: '/projects/muji',
  archivehouse: '/projects/archive-house',
  archiveofveilance: '/projects/archive-of-veilance',
  matchalatte: '/projects/matcha-latte',
  starlink: '/projects/starlink',
};

const PAGE_PATH_ALIASES: Record<Page, readonly string[]> = {
  home: ['/'],
  projects: ['/projects'],
  about: ['/about'],
  prolog: ['/projects/prolog', '/prolog'],
  iceland: ['/projects/best-of-iceland', '/iceland'],
  tinypaws: ['/projects/tinypaws', '/tinypaws'],
  muji: ['/projects/muji', '/muji'],
  archivehouse: ['/projects/archive-house', '/archive-house'],
  archiveofveilance: ['/projects/archive-of-veilance', '/archive-of-veilance'],
  matchalatte: ['/projects/matcha-latte', '/matcha-latte'],
  starlink: ['/projects/starlink', '/starlink'],
};

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function pageFromPath(pathname: string): Page {
  const path = normalizePath(pathname);
  const entries = Object.entries(PAGE_PATH_ALIASES) as Array<[Page, readonly string[]]>;

  for (const [page, aliases] of entries) {
    if (aliases.includes(path)) return page;
  }

  return 'home';
}

export function isProjectPage(page: Page): boolean {
  return PROJECT_PAGE_SET.has(page);
}

export function isProjectsNavActive(page: Page): boolean {
  return page === 'projects' || isProjectPage(page);
}
