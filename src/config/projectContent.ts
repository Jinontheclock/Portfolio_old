import type { ProjectHeaderProps } from '../components/ProjectHeader';

type ProjectHeaderContentKey =
  | 'prolog'
  | 'tinypaws'
  | 'iceland'
  | 'muji'
  | 'archivehouse'
  | 'archiveofveilance'
  | 'matchalatte'
  | 'starlink';

export const PROJECT_HEADER_CONTENT: Record<ProjectHeaderContentKey, ProjectHeaderProps> = {
  prolog: {
    title: 'ProLog',
    category: 'App',
    timeline: '4 months',
    tools: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'React Native Expo', 'Adobe Creative Suite', 'Framer', 'Trello'],
    role: 'UI Developer',
    roleLabel: 'Role',
    dividerHeight: 300,
    link: ['Website', 'Instagram', 'Blog', 'GitHub'],
    linkUrls: {
      Website: 'https://prolog.framer.website/',
      Instagram: 'https://www.instagram.com/prolog.app/',
      Blog: 'https://prolog.framer.website/blog',
      GitHub: 'https://github.com/Jinontheclock/ProLog.git',
    },
    description: [
      'ProLog is a progress-tracking mobile app designed to support neurodivergent apprentices in the skilled trades.',
      'The project was developed as part of the D3 & FSWD × ConnectHER Technology Showcase, where students design digital solutions to address challenges faced by underrepresented people in the trades.',
      'ProLog centralizes fragmented training information into a clear, structured roadmap that helps apprentices track their progress, stay organized, and confidently navigate their journey toward Red Seal certification.',
    ],
  },
  tinypaws: {
    title: 'TinyPaws',
    category: 'Website',
    timeline: '5 months',
    tools: ['Figma', 'WordPress', 'Adobe Creative Suite', 'Google Analytics', 'Trello'],
    role: 'UI/UX Designer',
    link: 'TinyPaws.ca',
    textRevealOnEnter: true,
    description: [
      'TinyPaws is a website redesign project for a volunteer-driven non-profit rescue organization in Greater Vancouver.',
      'The project reimagines the cat adoption journey by organizing information into a clear, structured platform that guides users through adoption and fostering pathways.',
      'Through refined information architecture and cohesive branding, the site supports prospective adopters in navigating from initial interest to application with greater clarity and direction.',
    ],
  },
  iceland: {
    title: 'Best of Iceland',
    category: 'Brochure',
    timeline: '1 month',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Independent',
    reference: 'G Adventures',
    description: [
      'Developed as an academic project, this brochure redesign reinterprets G Adventures’ “Best of Iceland” tour as a structured editorial publication.',
      'By reorganizing the itinerary into a clear day-by-day narrative with strong visual hierarchy, the project enhances product visibility and positions the tour as both a promotional piece and an informative guide.',
    ],
  },
  muji: {
    title: 'Visual Merchandising',
    category: 'Retail Graphic',
    timeline: 'Campaign-based',
    tools: ['Adobe InDesign', 'Adobe Illustrator'],
    role: 'MUJI Japan',
    roleLabel: 'Company',
    description: [
      'A collection of in-store promotional POP and visual materials developed for MUJI Japan.',
      'The work focuses on clear communication, consistent visual systems, and adapting designs across formats while maintaining brand restraint and functionality.',
    ],
  },
  archivehouse: {
    title: 'Saku Archive House',
    titleFontSize: 140,
    category: 'Poster Design',
    timeline: '2 weeks',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Independent',
    description: [
      'A promotional poster project for a fictional furniture concept store, designed around a featured plywood lounge chair as the key product.',
      'Three posters explore different visual moods, demonstrating how atmosphere and layout influence brand perception in retail promotion.',
    ],
  },
  archiveofveilance: {
    title: 'Archive of Veilance',
    titleFontSize: 148,
    category: 'Poster Design',
    timeline: '2 weeks',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Independent',
    roleLabel: 'Role',
    description: [
      "This project explores a conceptual exhibition poster series developed for an archive show hosted by Arc'teryx Veliance, reflecting the brand's design legacy and evolution.",
      'The exhibition is imagined to take place across Canada, Japan, and Korea, with each poster adapting the presentation to its local cultural and linguistic context while preserving the integrity of its established identity.',
    ],
  },
  matchalatte: {
    title: 'Matcha Latte',
    titleFontSize: 148,
    category: 'Packaging',
    timeline: '2 weeks',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Independent',
    roleLabel: 'Role',
    description: [
      'A fictional matcha latte brand and packaging concept designed as a new product series.',
      'The project focuses on translating Japanese tea heritage into a modern visual identity through minimal typography, calm color palettes, and cohesive flavor differentiation.',
    ],
  },
  starlink: {
    title: 'Starlink',
    titleFontSize: 148,
    category: 'Motion',
    timeline: '1 month',
    tools: ['Adobe After Effect', 'Adobe Illustrator'],
    role: 'Independent',
    roleLabel: 'Role',
    reference: 'Starlink',
    referenceUrl: 'https://starlink.com/',
    description: [
      'Developed as an academic motion graphics project, this video explains Starlink’s satellite system to help viewers understand how it works. ',
      'Using fully graphic visuals created in Adobe After Effects, the project compares Starlink’s low-Earth orbit satellites with traditional satellites, highlighting differences in orbit, coverage, and communication.',
    ],
  },
};
