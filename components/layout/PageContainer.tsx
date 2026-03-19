import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageContainer({ children, title, description }: PageContainerProps) {
  return (
    <div className="p-6 max-w-container mx-auto page-enter">
      {(title || description) && (
        <div className="mb-8">
          {title && <h1 className="text-2xl font-bold font-haffer tracking-tight">{title}</h1>}
          {description && <p className="text-text-secondary mt-1">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
