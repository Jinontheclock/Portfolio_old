import type { Page } from '../types';
import BestOfIcelandMockup5 from '../assets/projects/iceland/BestofIceland_mockup5.webp';
import PrologMockup from '../assets/projects/prolog/prolog_mockup1.webp';
import TinypawsMockup from '../assets/projects/tinypaws/tinypaws_mockup.webp';
import MujiThumbnail from '../assets/projects/muji/muji.webp';
import ArchiveHouseResult2 from '../assets/projects/archivehouse/archivehouse_result2.webp';
import VeilanceResult2 from '../assets/projects/archiveofveilance/veilance_result2.webp';
import MatchaMockup4 from '../assets/projects/matcha/matcha_mockup4.webp';
import StarlinkThumbnail from '../assets/projects/starlink/starlink_thumnail.png';

export type ProjectRow = {
  offset: number;
  workType: string;
  title: string;
  role: string;
  year: string;
  hidden?: boolean;
  page?: Page;
  thumbnail?: string;
  hoverThumbnailWidth?: number;
  hoverThumbnailHeight?: number;
  topOffset?: number;
};

export const PROJECT_ROWS: ProjectRow[] = [
  { offset: 0, workType: 'App & Website', title: 'Individual Project', role: 'Independent', year: '2026', hidden: true },
  { offset: 1, workType: 'Product', title: 'ProLog', role: 'UI Developer', year: '2025', page: 'prolog', thumbnail: PrologMockup },
  { offset: 2, workType: 'Product', title: 'TinyPaws', role: 'UI/UX Designer', year: '2025', page: 'tinypaws', thumbnail: TinypawsMockup },
  { offset: 3, workType: 'Brochure', title: 'Best of Iceland', role: 'Independent', year: '2025', page: 'iceland', thumbnail: BestOfIcelandMockup5 },
  {
    offset: 4,
    workType: 'Poster',
    title: 'Archive House',
    role: 'Independent',
    year: '2025',
    page: 'archivehouse',
    thumbnail: ArchiveHouseResult2,
    hoverThumbnailWidth: 252,
    hoverThumbnailHeight: 350,
  },
  {
    offset: 5,
    workType: 'Poster',
    title: 'Archive of Veilance',
    role: 'Independent',
    year: '2025',
    page: 'archiveofveilance',
    thumbnail: VeilanceResult2,
    hoverThumbnailWidth: 252,
    hoverThumbnailHeight: 350,
  },
  { offset: 6, workType: '', title: '', role: '', year: '', hidden: true },
  {
    offset: 7,
    workType: 'Motion',
    title: 'StarLink',
    role: 'Independent',
    year: '2025',
    page: 'starlink',
    thumbnail: StarlinkThumbnail,
    hoverThumbnailWidth: 360,
    hoverThumbnailHeight: 203,
  },
  {
    offset: 8,
    workType: 'Package',
    title: 'Matcha Latte',
    role: 'Independent',
    year: '2024',
    page: 'matchalatte',
    thumbnail: MatchaMockup4,
  },
  {
    offset: 9,
    workType: 'Promotional Material',
    title: 'MUJI',
    role: 'VMD',
    year: '2024',
    page: 'muji',
    thumbnail: MujiThumbnail,
    hoverThumbnailWidth: 240,
    hoverThumbnailHeight: 333,
    topOffset: 40,
  },
];

export const PROJECT_HIDDEN_ROW_OFFSETS = PROJECT_ROWS
  .filter((row) => row.hidden)
  .map((row) => row.offset);
