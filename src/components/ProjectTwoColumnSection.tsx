import type { ReactNode } from 'react';

type ProjectTwoColumnSectionProps = {
  left?: ReactNode;
  rightClassName: string;
  className?: string;
  children: ReactNode;
};

const BASE_CLASS_NAME = 'grid grid-cols-[260px_1fr] gap-12 items-start';

export default function ProjectTwoColumnSection({ left, rightClassName, className, children }: ProjectTwoColumnSectionProps) {
  const containerClassName = className ? `${BASE_CLASS_NAME} ${className}` : BASE_CLASS_NAME;

  return (
    <div className={containerClassName}>
      {left}
      <div className={rightClassName}>{children}</div>
    </div>
  );
}
