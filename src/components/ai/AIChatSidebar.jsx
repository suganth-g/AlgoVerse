import React, { useState } from 'react';
import { Plus, MessageSquare, Pin, Search, MoreVertical, Trash2, Edit2, Bot, ChevronDown, Check, X } from 'lucide-react';
import { useAIChat } from '../../context/AIChatContext';

export default function AIChatSidebar({ currentModel, setCurrentModel, isMobileOpen, setIsMobileOpen }) {
  const { chatHistory, activeChatId, setActiveChatId, createNewChat, deleteChat, renameChat, pinChat, clearHistory } = useAIChat();
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  const models = [
    { id: 'gpt-4o', name: 'ChatGPT', icon: '🤖', description: 'Versatile assistant' },
    { id: 'claude-3-opus-20240229', name: 'Claude 3', icon: '🧠', description: 'Advanced reasoning & coding' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', icon: '✨', description: 'Fast & multimodal' },
    { id: 'deepseek-coder', name: 'DeepSeek', icon: '🐋', description: 'Open-source coding' },
    { id: 'llama-3', name: 'Llama 3', icon: '🦙', description: 'Meta open source' },
    { id: 'mistral-large', name: 'Mistral', icon: '🌪️', description: 'Fast & efficient' },
  ];

  const filteredHistory = chatHistory.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const pinnedChats = filteredHistory.filter(c => c.pinned);
  const unpinnedChats = filteredHistory.filter(c => !c.pinned);

  const handleRenameSubmit = (id) => {
    if (editTitle.trim()) {
      renameChat(id, editTitle.trim());
    }
    setEditingId(null);
  };

  return (
    <div className={`
      flex flex-col w-64 bg-navy-900 border-r border-white/5 h-full transition-all duration-300 z-20 shrink-0
      ${isMobileOpen ? 'translate-x-0 absolute left-0' : '-translate-x-full absolute left-0 md:relative md:translate-x-0'}
    `}>
      <div className="p-4 border-b border-white/5">
        <button 
          onClick={createNewChat}
          className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-2.5 px-4 rounded-xl font-medium transition-all shadow-glow"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      <div className="p-4 border-b border-white/5 relative">
        <button 
          onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
          className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{models.find(m => m.id === currentModel)?.icon || '🤖'}</span>
            <div className="text-left">
              <div className="text-sm font-medium text-white">{models.find(m => m.id === currentModel)?.name || 'Select Model'}</div>
            </div>
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isModelDropdownOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-navy-800 border border-white/10 rounded-xl shadow-xl overflow-hidden z-30 animate-fade-in max-h-64 overflow-y-auto custom-scrollbar">
            {models.map(model => (
              <button
                key={model.id}
                onClick={() => {
                  setCurrentModel(model.id);
                  setIsModelDropdownOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 text-left hover:bg-white/5 transition-colors ${currentModel === model.id ? 'bg-purple-500/10' : ''}`}
              >
                <span className="text-xl">{model.icon}</span>
                <div>
                  <div className={`text-sm font-medium ${currentModel === model.id ? 'text-purple-400' : 'text-gray-200'}`}>
                    {model.name}
                  </div>
                  <div className="text-xs text-gray-500">{model.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-b border-white/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search chats..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-4">
        {pinnedChats.length > 0 && (
          <div>
            <div className="px-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Pinned</div>
            {pinnedChats.map(chat => (
              <div key={chat.id} className={`w-full flex items-center justify-between p-2 rounded-lg group transition-colors cursor-pointer ${activeChatId === chat.id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`} onClick={() => setActiveChatId(chat.id)}>
                <div className="flex items-center gap-2 truncate flex-1">
                  <Pin className="w-4 h-4 text-purple-400 flex-shrink-0" onClick={(e) => { e.stopPropagation(); pinChat(chat.id); }} />
                  {editingId === chat.id ? (
                     <div className="flex items-center gap-1 w-full" onClick={e => e.stopPropagation()}>
                        <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleRenameSubmit(chat.id)} autoFocus className="bg-navy-900 border border-purple-500/50 rounded px-1 w-full text-sm outline-none" />
                        <Check className="w-4 h-4 text-green-400 cursor-pointer" onClick={() => handleRenameSubmit(chat.id)} />
                        <X className="w-4 h-4 text-red-400 cursor-pointer" onClick={() => setEditingId(null)} />
                     </div>
                  ) : (
                     <span className="text-sm truncate">{chat.title}</span>
                  )}
                </div>
                {!editingId && (
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                    <Edit2 className="w-3.5 h-3.5 text-gray-400 hover:text-white" onClick={(e) => { e.stopPropagation(); setEditingId(chat.id); setEditTitle(chat.title); }} />
                    <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" onClick={(e) => { e.stopPropagation(); deleteChat(chat.id); }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {unpinnedChats.length > 0 && (
          <div>
            <div className="px-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">Recent</div>
            {unpinnedChats.map(chat => (
              <div key={chat.id} className={`w-full flex items-center justify-between p-2 rounded-lg group transition-colors cursor-pointer ${activeChatId === chat.id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`} onClick={() => setActiveChatId(chat.id)}>
                <div className="flex items-center gap-2 truncate flex-1">
                  <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {editingId === chat.id ? (
                     <div className="flex items-center gap-1 w-full" onClick={e => e.stopPropagation()}>
                        <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleRenameSubmit(chat.id)} autoFocus className="bg-navy-900 border border-purple-500/50 rounded px-1 w-full text-sm outline-none" />
                        <Check className="w-4 h-4 text-green-400 cursor-pointer" onClick={() => handleRenameSubmit(chat.id)} />
                        <X className="w-4 h-4 text-red-400 cursor-pointer" onClick={() => setEditingId(null)} />
                     </div>
                  ) : (
                     <span className="text-sm truncate">{chat.title}</span>
                  )}
                </div>
                {!editingId && (
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                    <Pin className="w-3.5 h-3.5 text-gray-400 hover:text-purple-400" onClick={(e) => { e.stopPropagation(); pinChat(chat.id); }} />
                    <Edit2 className="w-3.5 h-3.5 text-gray-400 hover:text-white" onClick={(e) => { e.stopPropagation(); setEditingId(chat.id); setEditTitle(chat.title); }} />
                    <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" onClick={(e) => { e.stopPropagation(); deleteChat(chat.id); }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {chatHistory.length > 0 && (
          <div className="pt-4 border-t border-white/5">
             <button onClick={clearHistory} className="w-full text-xs text-red-400 hover:text-red-300 py-1 flex items-center justify-center gap-1">
               <Trash2 className="w-3 h-3" /> Clear History
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
