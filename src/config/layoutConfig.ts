type LayoutMetrics = {
  baseHeight: number;
  footerTop: number;
};

const createLayoutMetrics = (baseHeight: number, footerOffset = 300): LayoutMetrics => ({
  baseHeight,
  footerTop: baseHeight - footerOffset,
});

export const PROJECT_LAYOUT_METRICS = {
  projects: createLayoutMetrics(1480, 280),
  prolog: createLayoutMetrics(13800),
  tinypaws: createLayoutMetrics(10400),
  iceland: createLayoutMetrics(5100),
  muji: createLayoutMetrics(7500),
  archivehouse: createLayoutMetrics(5600),
  archiveofveilance: createLayoutMetrics(5700),
  matchalatte: createLayoutMetrics(6700),
  starlink: createLayoutMetrics(3600),
} as const;
