import { useState } from 'react';

export default function Tabs({ tabs, defaultTab, onChange, className = '' }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleClick = (tabId) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/10 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === tab.id
                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            {tab.count !== undefined && (
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                active === tab.id ? 'bg-purple-500/30 text-purple-300' : 'bg-white/10 text-gray-500'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.find(t => t.id === active)?.content}
      </div>
    </div>
  );
}

export function SimpleTabs({ tabs, activeTab, onTabChange, className = '' }) {
  return (
    <div className={`flex gap-6 border-b border-white/10 ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pb-3 text-sm font-medium transition-all duration-200 relative ${
            activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
