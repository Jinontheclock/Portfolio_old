import type { CSSProperties } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectHeader from './ProjectHeader';
import ProjectTwoColumnSection from './ProjectTwoColumnSection';
import { Language, Page } from '../types';
import { useProjectImageLightbox } from '../hooks/useProjectImageLightbox';
import { PROJECT_HEADER_CONTENT } from '../config/projectContent';
import { PROJECT_LAYOUT_METRICS } from '../config/layoutConfig';
import { ARCHIVE_OF_VEILANCE_MOOD_BOARD_EMBED_URL } from '../config/projectEmbeds';
import VeilanceBanner from '../assets/projects/archiveofveilance/veilance_banner.webp';
import VeilanceResult1 from '../assets/projects/archiveofveilance/veilance_result1.webp';
import VeilanceResult2 from '../assets/projects/archiveofveilance/veilance_result2.webp';
import VeilanceResult3 from '../assets/projects/archiveofveilance/veilance_result3.webp';
import VeilanceEn1 from '../assets/projects/archiveofveilance/veilance_en1.webp';
import VeilanceEn2 from '../assets/projects/archiveofveilance/veilance_en2.webp';
import VeilanceKr1 from '../assets/projects/archiveofveilance/veilance_kr1.webp';
import VeilanceKr2 from '../assets/projects/archiveofveilance/veilance_kr2.webp';
import VeilanceJp1 from '../assets/projects/archiveofveilance/veilance_jp1.webp';
import VeilanceJp2 from '../assets/projects/archiveofveilance/veilance_jp2.webp';
import VeilanceComponent1 from '../assets/projects/archiveofveilance/veilance_component1.png';
import VeilanceComponent2 from '../assets/projects/archiveofveilance/veilance_compoent2.png';
import VeilanceComponent3 from '../assets/projects/archiveofveilance/veilance_component3.png';
import VeilanceComponent4 from '../assets/projects/archiveofveilance/veilance_component4.png';
type Props = {
    currentPage: Page;
    language: Language;
    onNavigate: (page: Page) => void;
    onLanguageChange: (language: Language) => void;
};
const VEILANCE_MOCKUP_IMAGES = [VeilanceEn1, VeilanceEn2, VeilanceKr1, VeilanceKr2, VeilanceJp1, VeilanceJp2];
const VEILANCE_BACKGROUND_COMPONENTS = [VeilanceComponent1, VeilanceComponent2, VeilanceComponent3, VeilanceComponent4];
type VeilanceTypographyRow = {
    label: string;
    value: string;
    sample: string;
    style: CSSProperties;
};
const veilanceTypographyGroups: Array<{
    language: string;
    rows: VeilanceTypographyRow[];
}> = [
    {
        language: 'English',
        rows: [
            {
                label: 'H1',
                value: '48px SemiBold Outfit',
                sample: 'Where form follows purpose.',
                style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 600, lineHeight: '1' },
            },
            {
                label: 'H2',
                value: '24px SemiBold Outfit',
                sample: 'Where form follows purpose.',
                style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 600, lineHeight: '1.1' },
            },
            {
                label: 'H3',
                value: '16px Medium Outfit',
                sample: 'Where form follows purpose.',
                style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
            },
            {
                label: 'Body_large',
                value: '24px Thin Outfit',
                sample: 'Where form follows purpose.',
                style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
            },
            {
                label: 'Body',
                value: '8px Thin Outfit',
                sample: 'Where form follows purpose.',
                style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
            },
        ],
    },
    {
        language: 'Korean',
        rows: [
            {
                label: 'H1',
                value: '48px ExtraBold GothicA1',
                sample: '형태는 목적을 따른다.',
                style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 800, lineHeight: '1' },
            },
            {
                label: 'H2',
                value: '24px SemiBold GothicA1',
                sample: '형태는 목적을 따른다.',
                style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 600, lineHeight: '1.1' },
            },
            {
                label: 'H3',
                value: '16px Medium GothicA1',
                sample: '형태는 목적을 따른다.',
                style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
            },
            {
                label: 'Body_large',
                value: '24px Thin GothicA1',
                sample: '형태는 목적을 따른다.',
                style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
            },
            {
                label: 'Body',
                value: '8px Thin GothicA1',
                sample: '형태는 목적을 따른다.',
                style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
            },
        ],
    },
    {
        language: 'Japanese',
        rows: [
            {
                label: 'H1',
                value: '48px Black ZenKakuGothic',
                sample: '形は目的に従う。',
                style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 900, lineHeight: '1' },
            },
            {
                label: 'H2',
                value: '24px Black ZenKakuGothic',
                sample: '形は目的に従う。',
                style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 900, lineHeight: '1.1' },
            },
            {
                label: 'H3',
                value: '16px Medium ZenKakuGothic',
                sample: '形は目的に従う。',
                style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
            },
            {
                label: 'Body_large',
                value: '24px Thin ZenKakuGothic',
                sample: '形は目的に従う。',
                style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
            },
            {
                label: 'Body',
                value: '8px Thin ZenKakuGothic',
                sample: '形は目的に従う。',
                style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
            },
        ],
    },
];
export default function ProjectArchiveOfVeilance({ currentPage, language, onNavigate, onLanguageChange }: Props) {
    const { handleProjectImageClickCapture, projectImageLightbox } = useProjectImageLightbox();
    return (<div className="layout-viewport hide-scrollbar bg-grey-normal" style={{ "--layout-gutter": "0px" } as CSSProperties}>
      <div className="layout-canvas" style={{ "--layout-base-height": `${PROJECT_LAYOUT_METRICS.archiveofveilance.baseHeight}px` } as CSSProperties}>
        <div className="layout-canvas-inner">
          <div className="relative" style={{ minHeight: "var(--layout-base-height)" } as CSSProperties}>
            <div className="tinypaws-page-enter-overlay" aria-hidden>
              <span className="tinypaws-page-enter-overlay-base"/>
            </div>
            <div className="tinypaws-page-enter-content" onClickCapture={handleProjectImageClickCapture}>
            <Header currentPage={currentPage} language={language} onNavigate={onNavigate} onLanguageChange={onLanguageChange}/>
            <div className="flex flex-col gap-0 mt-12">
              <ProjectHeader {...PROJECT_HEADER_CONTENT.archiveofveilance}/>

              <section className="px-6" data-lightbox-disabled="true">
                <div className="flex justify-center">
                  <img src={VeilanceBanner} alt="Archive of Veilance overview" className="w-full max-w-[1400px] h-auto"/>
                </div>
              </section>
            </div>

            <div>

              <section className="px-6 pb-16 mt-16">
                <ProjectTwoColumnSection left={<h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">01 Design Process</h2>} rightClassName="project-right-column pl-48 max-w-[1280px]">
                    <div className="project-sub-block">
                      <p className="type-body-lg m-0 text-black-normal font-semibold leading-[1.2]">Design Approach</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5]">
                        Arc&apos;teryx Veilance&apos;s identity is defined by precision, restraint, and functional minimalism.
                        <br />
                        Building on these principles, the visual system prioritizes clarity and reduction, using a grayscale
                        palette to strip away excess and emphasize form, structure, and material presence.
                        <br />
                        Motion elements are applied with the same restraint: subtle, controlled movements reference the
                        brand&apos;s performance-driven nature without becoming expressive or decorative. By limiting color and
                        motion, the design maintains focus on functionality and intent, allowing typographic structure and
                        spatial rhythm to carry the visual narrative while preserving Veilance&apos;s understated character across
                        all executions.
                      </p>
                    </div>

                    <div className="project-sub-block mt-8">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Mood Board</p>
                      <div className="w-full rounded-[4px] overflow-hidden">
                        <iframe title="Archive of Veilance mood board" style={{ border: '0' }} width="100%" height="600" src={ARCHIVE_OF_VEILANCE_MOOD_BOARD_EMBED_URL} allowFullScreen/>
                      </div>
                    </div>

                    <div className="project-sub-block mt-12">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Typography</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5] max-w-[1120px]">
                        Outfit, Gothic A1, and Zen Kaku Gothic support multilingual communication across English, Korean, and Japanese.
                        <br />
                        Clear weight contrast and a structured type scale maintain hierarchy and readability while reinforcing a clean, restrained aesthetic.
                      </p>
                      <div className="grid gap-7">
                        {veilanceTypographyGroups.map((group) => (<div key={group.language} className="grid gap-4">
                            <p className="type-body m-0 text-black-normal leading-[1.5]">{group.language}</p>
                            <div className="grid grid-cols-[260px_1fr] gap-10 items-start">
                              <div className="text-[12px] leading-[1.5] text-black-normal space-y-3">
                                {group.rows.map((row) => (<div key={`${group.language}-${row.label}`} className="grid grid-cols-[140px_1fr] items-start gap-6">
                                    <div>
                                      <p className="m-0 text-[16px] font-normal leading-[1.3]">{row.label}</p>
                                      <p className="m-0 text-[12px] font-normal leading-[1.3] whitespace-nowrap">{row.value}</p>
                                    </div>
                                    <div className="flex items-center min-h-[44px] pl-14">
                                      <p className="m-0 text-black-normal whitespace-nowrap" style={row.style}>
                                        {row.sample}
                                      </p>
                                    </div>
                                  </div>))}
                              </div>
                            </div>
                          </div>))}
                      </div>
                    </div>

                    <div className="project-sub-block mt-12">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Background</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5] max-w-[1120px]">
                        Subtle textures and minimal graphic elements are layered to support the project&apos;s atmospheric tone.
                        <br />
                        Concrete surfaces, grain, and blurred forms add depth while keeping the visual language minimal and controlled.
                      </p>
                      <div className="grid grid-cols-4 gap-6 max-w-[1180px]">
                        {VEILANCE_BACKGROUND_COMPONENTS.map((imageSrc, index) => (<img key={imageSrc} src={imageSrc} alt={`Archive of Veilance background component ${index + 1}`} className="w-full h-auto block"/>))}
                      </div>
                    </div>
                </ProjectTwoColumnSection>
              </section>

              <section className="px-6 pb-16 mt-12">
                <ProjectTwoColumnSection left={<h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">02 Final Result</h2>} rightClassName="project-right-column pl-48 max-w-[1280px]">
                    <div className="project-right-block">
                      <p className="type-heading-3 text-black-normal m-0 leading-[1.2]">Orginal View</p>
                      <div className="grid grid-cols-3 gap-6 max-w-[1180px]">
                        <div className="grid gap-2">
                          <img src={VeilanceResult1} alt="Archive of Veilance result English" className="w-full h-auto block"/>
                          <p className="m-0 text-[12px] leading-[1.3] text-black-normal">English</p>
                        </div>
                        <div className="grid gap-2">
                          <img src={VeilanceResult2} alt="Archive of Veilance result Korean" className="w-full h-auto block"/>
                          <p className="m-0 text-[12px] leading-[1.3] text-black-normal">Korean</p>
                        </div>
                        <div className="grid gap-2">
                          <img src={VeilanceResult3} alt="Archive of Veilance result Japanese" className="w-full h-auto block"/>
                          <p className="m-0 text-[12px] leading-[1.3] text-black-normal">Japanese</p>
                        </div>
                      </div>
                    </div>
                    <div className="project-right-block">
                      <p className="type-heading-3 text-black-normal m-0 leading-[1.3]">Mockup</p>
                      <div className="grid grid-cols-2 gap-6 max-w-[1180px]">
                        {VEILANCE_MOCKUP_IMAGES.map((imageSrc, index) => (index < 2 ? (<div key={imageSrc} className="w-full aspect-[10/7] overflow-hidden">
                              <img src={imageSrc} alt={`Archive of Veilance mockup ${index + 1}`} className="w-full h-full object-cover block" style={index === 0 ? { objectPosition: 'center 68%' } : undefined}/>
                            </div>) : (<img key={imageSrc} src={imageSrc} alt={`Archive of Veilance mockup ${index + 1}`} className="w-full h-auto block"/>)))}
                      </div>
                    </div>
                </ProjectTwoColumnSection>
              </section>

              {projectImageLightbox}
              <Footer onNavigate={onNavigate} top={PROJECT_LAYOUT_METRICS.archiveofveilance.footerTop}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
