export const PROJECTS_PAGE_TEXT = {
  title: {
    label: 'Select work',
    revealDelay: 980,
  },
  subtitle: {
    label: '2024/current',
    revealDelay: 1040,
  },
  headers: {
    category: {
      label: 'category',
      revealDelay: 1120,
    },
    title: {
      label: 'title',
      revealDelay: 1150,
    },
    role: {
      label: 'role',
      revealDelay: 1180,
    },
    year: {
      label: 'year',
      revealDelay: 1210,
    },
  },
  rowReveal: {
    baseDelay: 1260,
    rowStep: 42,
    columnOffset: {
      workType: 0,
      title: 18,
      role: 36,
      year: 54,
    },
  },
} as const;
