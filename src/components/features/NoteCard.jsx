import { Calendar, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Dropdown from '../ui/Dropdown';
import Tag from '../ui/Tag';

export default function NoteCard({ title, snippet, date, tags = [], onEdit, onDelete }) {
  const menuItems = [
    { label: 'Edit', icon: Edit2, onClick: onEdit },
    { divider: true },
    { label: 'Delete', icon: Trash2, onClick: onDelete, danger: true },
  ];

  return (
    <GlassCard className="flex flex-col h-full group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1">{title}</h3>
        <div onClick={(e) => e.stopPropagation()}>
          <Dropdown
            trigger={<button className="p-1 text-gray-500 hover:text-white rounded-md hover:bg-white/10 transition-colors"><MoreVertical className="w-4 h-4" /></button>}
            items={menuItems}
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-3 font-mono bg-navy-900/50 p-3 rounded-lg border border-white/5">
        {snippet}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <Tag key={i} color="gray" className="!px-1.5 !py-0.5 !text-[10px]">{tag}</Tag>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
      </div>
    </GlassCard>
  );
}
