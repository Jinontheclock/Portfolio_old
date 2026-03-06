import type { CSSProperties } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectHeader from './ProjectHeader';
import { Language, Page } from '../types';
import { useProjectImageLightbox } from '../hooks/useProjectImageLightbox';
import StarLinkBanner from '../assets/projects/starlink/starlink_banner.jpeg';
import StarlinkBackground1 from '../assets/projects/starlink/Starlink_background1.png';
import StarlinkBackground2 from '../assets/projects/starlink/Starlink_background2.png';
import StarlinkSoundtrack from '../assets/projects/starlink/Starlink_soundtrack.mp3';
import StarlinkVideo from '../assets/projects/starlink/starlink_video.mp4';
import MatchaMockup1 from '../assets/projects/matcha/matcha_mockup1.webp';
import MatchaMockup2 from '../assets/projects/matcha/matcha_mockup2.webp';
import MatchaMockup3 from '../assets/projects/matcha/matcha_mockup3.webp';
import MatchaMockup4 from '../assets/projects/matcha/matcha_mockup4.webp';

type Props = {
  currentPage: Page;
  language: Language;
  onNavigate: (page: Page) => void;
  onLanguageChange: (language: Language) => void;
};

const VEILANCE_LAYOUT_BASE_HEIGHT = 6700;
const VEILANCE_FOOTER_TOP = VEILANCE_LAYOUT_BASE_HEIGHT - 300;
const MATCHA_MOCKUP_ROW_ONE_IMAGES = [MatchaMockup1, MatchaMockup2, MatchaMockup3];
const STARLINK_BACKGROUND_IMAGES = [StarlinkBackground1, StarlinkBackground2];

type StarlinkTypographyRow = {
  label: string;
  value: string;
  sample: string;
  style: CSSProperties;
  sampleMinHeight?: number;
};

const STARLINK_TYPOGRAPHY_SAMPLE = 'A new generation of satellites orbiting the Earth.';

const starlinkTypographyRows: StarlinkTypographyRow[] = [
  {
    label: 'Headline',
    value: 'Avenir Heavy 56px',
    sample: STARLINK_TYPOGRAPHY_SAMPLE,
    sampleMinHeight: 36,
    style: {
      fontFamily: '"Avenir", "Avenir Next", "Plus Jakarta Sans", sans-serif',
      fontSize: 24,
      fontWeight: 800,
      lineHeight: '1',
    },
  },
  {
    label: 'Subhead',
    value: 'Avenir Medium 32px',
    sample: STARLINK_TYPOGRAPHY_SAMPLE,
    sampleMinHeight: 32,
    style: {
      fontFamily: '"Avenir", "Avenir Next", "Plus Jakarta Sans", sans-serif',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '1',
    },
  },
  {
    label: 'Body',
    value: 'Avenir Book 24px',
    sample: STARLINK_TYPOGRAPHY_SAMPLE,
    sampleMinHeight: 28,
    style: {
      fontFamily: '"Avenir", "Avenir Next", "Plus Jakarta Sans", sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '1.1',
    },
  },
];

export default function ProjectStarLink({ currentPage, language, onNavigate, onLanguageChange }: Props) {
  const { handleProjectImageClickCapture, projectImageLightbox } = useProjectImageLightbox();

  return (
    <div className="layout-viewport hide-scrollbar bg-grey-normal">
      <div className="layout-canvas" style={{ "--layout-base-height": `${VEILANCE_LAYOUT_BASE_HEIGHT}px` } as CSSProperties}>
        <div className="layout-canvas-inner">
          <div className="relative" style={{ minHeight: "var(--layout-base-height)" } as CSSProperties}>
            <div className="tinypaws-page-enter-overlay" aria-hidden>
              <span className="tinypaws-page-enter-overlay-base" />
            </div>
            <div className="tinypaws-page-enter-content" onClickCapture={handleProjectImageClickCapture}>
            <Header currentPage={currentPage} language={language} onNavigate={onNavigate} onLanguageChange={onLanguageChange} />
            <div className="flex flex-col gap-0 mt-12">
              <ProjectHeader
                title="Starlink"
                titleFontSize={148}
                category="Motion"
                timeline="1 month"
                tools={['Adobe After Effect', 'Adobe Illustrator']}
                role="Independent"
                roleLabel="Role"
                reference="Starlink"
                referenceUrl="https://starlink.com/"
                description={[
                  'Developed as an academic motion graphics project, this video explains Starlink’s satellite system to help viewers understand how it works. ',
                  'Using fully graphic visuals created in Adobe After Effects, the project compares Starlink’s low-Earth orbit satellites with traditional satellites, highlighting differences in orbit, coverage, and communication.'
                ]}
              />

              {/* Hero image */}
              <section className="px-7 -mt-8" data-lightbox-disabled="true">
                <div className="flex justify-center">
                  <div className="w-full max-w-[1400px] h-[520px] overflow-hidden">
                    <img
                      src={StarLinkBanner}
                      alt="StarLink overview"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div>
              {/* 01 Design Process */}
              <section className="px-7 pb-16 mt-16">
                <div className="grid grid-cols-[260px_1fr] gap-12 items-start">
                  <h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">01 Design Process</h2>
                  <div className="project-right-column pl-48 max-w-[1280px]">
                    <div className="project-sub-block">
                      <p className="type-body-lg m-0 text-black-normal font-semibold leading-[1.2]">Design Approach</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5]">
                        This motion graphics project adopts Starlink’s official visual language, characterized by monochrome tones and sharp graphic elements.
                        <br />
                        The design recreates the futuristic atmosphere associated with space technology, using modern and minimal visuals to reflect SpaceX’s focus on space exploration. All graphics were illustrated from scratch and animated in Adobe After Effects, with an emphasis on smooth motion to create a clear and cohesive visual experience.
                      </p>
                    </div>

                    <div className="project-sub-block mt-8">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Typography</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5] max-w-[1120px]">
                        Avenir was used for the typography to reinforce the project’s modern and clean visual tone, providing clear readability while complementing the minimal, technology-focused design.
                      </p>
                      <div className="grid grid-cols-[260px_1fr] gap-10 items-start mt-1">
                        <div className="text-[12px] leading-[1.5] text-black-normal space-y-3">
                          {starlinkTypographyRows.map((row) => (
                            <div key={row.label} className="grid grid-cols-[140px_1fr] items-start gap-6">
                              <div>
                                <p className="m-0 text-[16px] font-normal leading-[1.3]">{row.label}</p>
                                <p className="m-0 text-[12px] font-normal leading-[1.3] whitespace-nowrap">{row.value}</p>
                              </div>
                              <div className="flex items-center pl-14" style={{ minHeight: row.sampleMinHeight ?? 44 }}>
                                <p className="m-0 text-black-normal leading-[1.1] whitespace-nowrap" style={row.style}>
                                  {row.sample}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="project-sub-block mt-12">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Background</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5] max-w-[1120px]">
                        The background uses a black canvas with white dots to represent stars, creating a minimal graphic
                        interpretation of outer space. Varying dot sizes add a sense of depth and distance.
                        <br />
                        For the intro and outro, the CC Star Burst effect was keyframed to create a rapid star-field
                        motion, reinforcing the feeling of entering and exiting space.
                      </p>

                      <div className="grid grid-cols-2 gap-8 max-w-[1120px] mt-2 items-start">
                        {STARLINK_BACKGROUND_IMAGES.map((imageSrc, index) => (
                          <img
                            key={imageSrc}
                            src={imageSrc}
                            alt={`Starlink background ${index + 1}`}
                            className="w-full h-auto block"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="project-sub-block mt-12">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Soundtrack</p>
                      <p className="type-body m-0 text-black-normal leading-[1.5] max-w-[1120px]">
                        The soundtrack &quot;First Step&quot; from the Interstellar Original Motion Picture Soundtrack by Hans
                        Zimmer was used to reinforce the sense of scale and exploration associated with space. Its gradual
                        build and atmospheric tone support the smooth motion graphics and enhance the immersive, space-themed
                        narrative.
                      </p>

                      <div className="max-w-[1120px] mt-2">
                        <audio controls preload="metadata" className="w-full">
                          <source src={StarlinkSoundtrack} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* 02 Final Result */}
              <section className="px-7 pb-16 mt-12">
                <div className="grid grid-cols-[260px_1fr] gap-12 items-start">
                  <h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">02 Final Result</h2>
                  <div className="project-right-column pl-48 max-w-[1280px]">
                    <div className="project-right-block">
                      <p className="type-heading-3 text-black-normal m-0 leading-[1.2]">Video</p>
                      <div className="max-w-[1180px] mt-2">
                        <video controls preload="metadata" className="w-full h-auto block">
                          <source src={StarlinkVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="project-right-block">
                      <p className="type-heading-3 text-black-normal m-0 leading-[1.3]">Mockup</p>
                      <div className="grid grid-cols-1 gap-6 max-w-[1180px]">
                        <div className="grid grid-cols-3 gap-6">
                          {MATCHA_MOCKUP_ROW_ONE_IMAGES.map((imageSrc, index) => (
                            <div key={imageSrc} className="w-full aspect-[4/3] overflow-hidden">
                              <img
                                src={imageSrc}
                                alt={`Matcha latte mockup ${index + 1}`}
                                className="w-full h-full object-cover block"
                                style={index === 0 ? { objectPosition: '54% center' } : undefined}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="w-full aspect-[16/10] overflow-hidden">
                          <img
                            src={MatchaMockup4}
                            alt="Matcha latte mockup 4"
                            className="w-full h-full object-cover block"
                            style={{ objectPosition: 'center 48%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {projectImageLightbox}
              <Footer onNavigate={onNavigate} top={VEILANCE_FOOTER_TOP} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
