export const PROJECT_EMBED_URLS = {
  archiveofveilance: {
    moodBoardFigma: 'https://www.figma.com/design/1H8FYTkzKkDBKAPR01a5Wb/Archive-of-Veilance?node-id=1-2&t=unjbvFlGCW8CsnyK-1',
  },
  iceland: {
    digitalEdition: 'https://indd.adobe.com/view/6f46e287-a8e6-4a4a-ae30-9abd17aed38b',
  },
  prolog: {
    siteMap: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FPk2juekCD0mfnQ9oxcyWqh%2FSitemaps%3Fnode-id%3D0-1%26t%3Dcw8l2CASw0Xs9Hra-1',
    lowFidelityWireframes: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxhdHkhEMLlKW1obKSbXiRi%2FWireframe--Old-%3Fnode-id%3D1157-13592%26t%3DEaRVkTnZdixYNRzQ-1',
    midFidelityWireframes: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxhdHkhEMLlKW1obKSbXiRi%2FWireframe--Old-%3Fnode-id%3D1157-8496%26t%3DEaRVkTnZdixYNRzQ-1',
    highFidelityWireframes: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FZmmIx6VY9EicEFrv7Rvdjh%2FWireFrames%3Fnode-id%3D2332-2031%26t%3DDaKp6m2Vxulc4R1d-1',
    prototype: 'https://www.figma.com/embed?embed_host=share&hide-ui=1&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZmmIx6VY9EicEFrv7Rvdjh%2FWireFrames%3Fpage-id%3D2332%253A2031%26node-id%3D3814-20926%26p%3Df%26viewport%3D719%252C470%252C0.06%26t%3DbRs0KPqwlh1Pl2k9-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3814%253A20926%26show-proto-sidebar%3D1',
    app: '/prolog/app/index.html?v=20260219',
  },
  tinypaws: {
    siteMap: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2F7OQJmaCeLRisYe4FYPTUus%2FTinyPaws---Site-Map%3Fnode-id%3D0-1%26t%3DUIThs1d6GNBL63b4-1',
    lowFidelityWireframes: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGLajfqOV2gqeDneSml8bE5%2FFi-Models%3Fnode-id%3D171-2633%26t%3DgNF9B8TPbhJ9Evx2-1',
    highFidelityWireframes: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGLajfqOV2gqeDneSml8bE5%2FFi-Models%3Fnode-id%3D1-3%26t%3DgNF9B8TPbhJ9Evx2-1',
    prototype: 'https://www.figma.com/embed?embed_host=share&hide-ui=1&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGLajfqOV2gqeDneSml8bE5%2FFi-Models%3Fpage-id%3D1%253A3%26node-id%3D191-1127%26viewport%3D2287%252C1347%252C0.16%26t%3D38Qt52GW30ibo8Rk-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D191%253A1127',
  },
} as const;

export const ARCHIVE_OF_VEILANCE_MOOD_BOARD_EMBED_URL =
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(PROJECT_EMBED_URLS.archiveofveilance.moodBoardFigma)}`;
