import { useEffect, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';

type ProjectLightboxImage = {
  src: string;
  alt: string;
};

const BLOCKED_KEYWORDS = ['banner', 'usability'];

function isLightboxBlocked(target: HTMLImageElement) {
  if (target.closest('[data-lightbox-disabled="true"]')) return true;

  const altText = (target.alt || '').toLowerCase();
  const source = (target.currentSrc || target.src || '').toLowerCase();

  return BLOCKED_KEYWORDS.some((keyword) => altText.includes(keyword) || source.includes(keyword));
}

export function useProjectImageLightbox() {
  const [activeImage, setActiveImage] = useState<ProjectLightboxImage | null>(null);

  useEffect(() => {
    if (!activeImage || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  const handleProjectImageClickCapture = (event: MouseEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;
    if (isLightboxBlocked(target)) return;

    const source = target.currentSrc || target.src;
    if (!source) return;

    setActiveImage({
      src: source,
      alt: target.alt || 'Project image',
    });
  };

  const projectImageLightbox =
    activeImage && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="fixed inset-0 z-[500] flex items-center justify-center p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded project image"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="absolute inset-0 bg-black/35"
              style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="relative z-[1] block w-auto h-auto max-w-[92vw] max-h-[88vh] rounded-[4px] object-contain shadow-[0_24px_72px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )
      : null;

  return {
    handleProjectImageClickCapture,
    projectImageLightbox,
  };
}
