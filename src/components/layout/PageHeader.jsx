import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, description, breadcrumbs = [], actions }) {
  return (
    <div className="mb-6 lg:mb-8">
      {breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {item.path ? (
                <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-poppins">{title}</h1>
          {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
        </div>
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
