import Header from './Header';
import Footer from './Footer';
import { Language, Page } from '../types';
import React, { useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { PROJECT_LAYOUT_METRICS } from '../config/layoutConfig';
import { PROJECT_HIDDEN_ROW_OFFSETS, PROJECT_ROWS, type ProjectRow } from '../config/projectsRows';
import { PROJECTS_PAGE_LAYOUT } from '../config/projectsPageLayout';
import { PROJECTS_PAGE_TEXT } from '../config/projectsPageText';
type ProjectsPageProps = {
    currentPage: Page;
    language: Language;
    onNavigate: (page: Page) => void;
    onLanguageChange: (language: Language) => void;
};
function getRowTop(offset: number) {
    const hiddenRowsBefore = PROJECT_HIDDEN_ROW_OFFSETS.filter((hiddenOffset) => hiddenOffset < offset).length;
    if (offset <= PROJECTS_PAGE_LAYOUT.firstCategoryLastOffset) {
        return (PROJECTS_PAGE_LAYOUT.rowStart +
            offset * PROJECTS_PAGE_LAYOUT.rowGapWithinCategory -
            hiddenRowsBefore * PROJECTS_PAGE_LAYOUT.rowGapWithinCategory);
    }
    const firstCategoryCount = PROJECTS_PAGE_LAYOUT.firstCategoryLastOffset + 1;
    const baseTop = (PROJECTS_PAGE_LAYOUT.rowStart +
        PROJECTS_PAGE_LAYOUT.firstCategoryLastOffset * PROJECTS_PAGE_LAYOUT.rowGapWithinCategory +
        PROJECTS_PAGE_LAYOUT.rowGapBetweenCategories +
        (offset - firstCategoryCount) * PROJECTS_PAGE_LAYOUT.rowGapWithinCategory);
    return baseTop - hiddenRowsBefore * PROJECTS_PAGE_LAYOUT.rowGapWithinCategory;
}
export default function ProjectsPage({ currentPage, language, onNavigate, onLanguageChange }: ProjectsPageProps) {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const frameRef = useRef<HTMLDivElement | null>(null);
    const visibleRows = PROJECT_ROWS.filter((row) => !row.hidden);
    const activeRow = PROJECT_ROWS.find((row) => row.offset === hoveredRow);
    const activeThumbnail = activeRow?.thumbnail;
    const handleRowClick = (row: ProjectRow) => {
        if (row.page)
            onNavigate(row.page);
    };
    const thumbnailWidth = activeRow?.hoverThumbnailWidth ?? 360;
    const thumbnailHeightEstimate = activeRow?.hoverThumbnailHeight ?? 500;
    const frameWidth = frameRef.current?.offsetWidth ?? 1440;
    const frameHeight = frameRef.current?.offsetHeight ?? 1480;
    const thumbnailLeft = Math.max(PROJECTS_PAGE_LAYOUT.sideInset, Math.min(cursorPosition.x + PROJECTS_PAGE_LAYOUT.thumbOffsetX, frameWidth - thumbnailWidth - PROJECTS_PAGE_LAYOUT.sideInset));
    const thumbnailTop = Math.max(PROJECTS_PAGE_LAYOUT.sideInset, Math.min(cursorPosition.y - PROJECTS_PAGE_LAYOUT.thumbOffsetY, frameHeight - thumbnailHeightEstimate - PROJECTS_PAGE_LAYOUT.sideInset));
    const updateCursorPosition = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!frameRef.current)
            return;
        const rect = frameRef.current.getBoundingClientRect();
        const scaleX = rect.width / frameRef.current.offsetWidth || 1;
        const scaleY = rect.height / frameRef.current.offsetHeight || 1;
        const localX = (event.clientX - rect.left) / scaleX;
        const localY = (event.clientY - rect.top) / scaleY;
        setCursorPosition({ x: localX, y: localY });
    };
    const renderTextReveal = (content: ReactNode, delayMs: number) => (<span className="project-header-reveal-line projects-text-reveal-line" style={{ ['--project-header-reveal-delay' as string]: `${delayMs}ms` } as CSSProperties}>
      <span className="project-header-reveal-text">{content}</span>
    </span>);
    return (<div className="layout-viewport hide-scrollbar" style={{ "--layout-gutter": "0px" } as CSSProperties}>
      <div className="layout-canvas" style={{ "--layout-base-height": `${PROJECT_LAYOUT_METRICS.projects.baseHeight}px` } as CSSProperties}>
        <div className="layout-canvas-inner">
          <div ref={frameRef} className="relative bg-grey-normal" style={{ minHeight: "var(--layout-base-height)" } as CSSProperties}>
            <div className="tinypaws-page-enter-overlay" aria-hidden>
              <span className="tinypaws-page-enter-overlay-base"/>
            </div>
            <div className="tinypaws-page-enter-content">
            <Header currentPage={currentPage} language={language} onNavigate={onNavigate} onLanguageChange={onLanguageChange}/>

            <p className="absolute type-title-2 left-[20px] text-black-normal" style={{ top: PROJECTS_PAGE_LAYOUT.titleTop }} data-node-id="117:406">
              {renderTextReveal(PROJECTS_PAGE_TEXT.title.label, PROJECTS_PAGE_TEXT.title.revealDelay)}
            </p>
            <p className="absolute type-title-2 left-[20px] text-black-normal" style={{ top: PROJECTS_PAGE_LAYOUT.subtitleTop }} data-node-id="117:458">
              {renderTextReveal(PROJECTS_PAGE_TEXT.subtitle.label, PROJECTS_PAGE_TEXT.subtitle.revealDelay)}
            </p>

            <p className={`absolute z-[30] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] text-black-normal text-[18px] ${PROJECTS_PAGE_LAYOUT.columnLeft.workType}`} style={{ top: PROJECTS_PAGE_LAYOUT.headerTop, width: PROJECTS_PAGE_LAYOUT.columnWidths.workType, paddingLeft: 8 }} data-node-id="117:409">
              {renderTextReveal(PROJECTS_PAGE_TEXT.headers.category.label, PROJECTS_PAGE_TEXT.headers.category.revealDelay)}
            </p>
            <p className={`absolute z-[30] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] text-black-normal text-[18px] ${PROJECTS_PAGE_LAYOUT.columnLeft.title}`} style={{ top: PROJECTS_PAGE_LAYOUT.headerTop, width: PROJECTS_PAGE_LAYOUT.columnWidths.title, paddingLeft: 8 }} data-node-id="117:407">
              {renderTextReveal(PROJECTS_PAGE_TEXT.headers.title.label, PROJECTS_PAGE_TEXT.headers.title.revealDelay)}
            </p>
            <p className={`absolute z-[30] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] text-black-normal text-[18px] ${PROJECTS_PAGE_LAYOUT.columnLeft.role}`} style={{ top: PROJECTS_PAGE_LAYOUT.headerTop, width: PROJECTS_PAGE_LAYOUT.columnWidths.role, paddingLeft: 8 }} data-node-id="117:408">
              {renderTextReveal(PROJECTS_PAGE_TEXT.headers.role.label, PROJECTS_PAGE_TEXT.headers.role.revealDelay)}
            </p>
            <p className={`absolute z-[30] font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] text-black-normal text-[18px] text-right ${PROJECTS_PAGE_LAYOUT.columnLeft.year}`} style={{ top: PROJECTS_PAGE_LAYOUT.headerTop, width: PROJECTS_PAGE_LAYOUT.columnWidths.year, paddingRight: 8 }} data-node-id="117:410">
              {renderTextReveal(PROJECTS_PAGE_TEXT.headers.year.label, PROJECTS_PAGE_TEXT.headers.year.revealDelay)}
            </p>

            {activeThumbnail && (<div className="pointer-events-none absolute z-[20] transition-opacity duration-150 opacity-100" style={{ left: thumbnailLeft, top: thumbnailTop, width: thumbnailWidth }} aria-hidden>
                <img src={activeThumbnail} alt="" className="w-full h-auto object-contain rounded-[2px] shadow-[0_8px_28px_rgba(0,0,0,0.08)]"/>
              </div>)}

            {visibleRows.map((row, visibleIndex) => {
            const top = getRowTop(row.offset) + (row.topOffset ?? 0);
            const isInteractive = Boolean(row.page);
            const isActive = hoveredRow === row.offset;
            const rowBaseDelay = (PROJECTS_PAGE_TEXT.rowReveal.baseDelay +
                visibleIndex * PROJECTS_PAGE_TEXT.rowReveal.rowStep);
            return (<div key={row.offset} className="absolute left-0 right-0 z-[30]" style={{ top, height: PROJECTS_PAGE_LAYOUT.rowHeight }} onMouseEnter={(event) => {
                    setHoveredRow(row.offset);
                    updateCursorPosition(event);
                }} onMouseMove={updateCursorPosition} onMouseLeave={() => setHoveredRow((value) => (value === row.offset ? null : value))}>
                  <p className={`absolute projects-hover-cell ${PROJECTS_PAGE_LAYOUT.columnLeft.workType} ${isActive ? 'is-active' : ''} font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[normal] text-[24px]`} style={{ width: PROJECTS_PAGE_LAYOUT.columnWidths.workType, cursor: isInteractive ? 'pointer' : 'default' }} onClick={() => handleRowClick(row)}>
                    <span>{renderTextReveal(row.workType, rowBaseDelay + PROJECTS_PAGE_TEXT.rowReveal.columnOffset.workType)}</span>
                  </p>
                  <p className={`absolute projects-hover-cell ${PROJECTS_PAGE_LAYOUT.columnLeft.title} ${isActive ? 'is-active' : ''} font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[normal] text-[24px]`} style={{ width: PROJECTS_PAGE_LAYOUT.columnWidths.title, cursor: isInteractive ? 'pointer' : 'default' }} onClick={() => handleRowClick(row)}>
                    <span>{renderTextReveal(row.title, rowBaseDelay + PROJECTS_PAGE_TEXT.rowReveal.columnOffset.title)}</span>
                  </p>
                  <p className={`absolute projects-hover-cell ${PROJECTS_PAGE_LAYOUT.columnLeft.role} ${isActive ? 'is-active' : ''} font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[normal] text-[24px]`} style={{ width: PROJECTS_PAGE_LAYOUT.columnWidths.role, cursor: isInteractive ? 'pointer' : 'default' }} onClick={() => handleRowClick(row)}>
                    <span>{renderTextReveal(row.role, rowBaseDelay + PROJECTS_PAGE_TEXT.rowReveal.columnOffset.role)}</span>
                  </p>
                  <p className={`absolute projects-hover-cell projects-hover-cell-year ${PROJECTS_PAGE_LAYOUT.columnLeft.year} ${isActive ? 'is-active' : ''} font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[normal] text-[24px]`} style={{ width: PROJECTS_PAGE_LAYOUT.columnWidths.year, cursor: isInteractive ? 'pointer' : 'default' }} onClick={() => handleRowClick(row)}>
                    <span>{renderTextReveal(row.year, rowBaseDelay + PROJECTS_PAGE_TEXT.rowReveal.columnOffset.year)}</span>
                  </p>
                </div>);
        })}

            <Footer onNavigate={onNavigate} top={PROJECT_LAYOUT_METRICS.projects.footerTop}/>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
