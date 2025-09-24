import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav 
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground mb-4", className)}
      aria-label="Навигационные крошки"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )}
          
          {item.href ? (
            <Link 
              to={item.href}
              className="hover:text-primary transition-colors truncate"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;