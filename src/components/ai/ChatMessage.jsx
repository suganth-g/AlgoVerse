import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { Copy, Check, ThumbsUp, ThumbsDown, RotateCcw, Share2, Edit2, Trash2, X } from 'lucide-react';
import { useAIChat } from '../../context/AIChatContext';

export default function ChatMessage({ message, isTyping }) {
  const isUser = message.role === 'user';
  const { regenerateResponse, editPrompt, messages } = useAIChat();
  const [copiedCode, setCopiedCode] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(message.content);

  const isLatestAI = !isUser && messages[messages.length - 1]?.id === message.id;

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleEditSubmit = () => {
    if (editValue.trim() !== message.content) {
      editPrompt(message.id, editValue);
    }
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-4 w-full group ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shrink-0 mt-1">
          🤖
        </div>
      )}

      <div className={`max-w-[85%] ${isUser ? 'order-1' : 'order-2'}`}>
        <div className={`
          p-4 rounded-2xl relative
          ${isUser 
            ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-tr-sm shadow-lg' 
            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm shadow-glass'}
        `}>
          {isTyping && !isUser ? (
            <div className="flex space-x-1.5 h-6 items-center">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-purple-400 rounded-full" />
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-purple-400 rounded-full" />
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-purple-400 rounded-full" />
            </div>
          ) : isEditing ? (
             <div className="flex flex-col gap-2">
                <textarea 
                  value={editValue} 
                  onChange={e => setEditValue(e.target.value)} 
                  className="w-full bg-black/20 rounded p-2 text-sm outline-none resize-none" 
                  rows={4}
                  autoFocus
                />
                <div className="flex justify-end gap-2">
                   <button onClick={() => setIsEditing(false)} className="text-xs bg-white/10 px-2 py-1 rounded hover:bg-white/20">Cancel</button>
                   <button onClick={handleEditSubmit} className="text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600">Save & Submit</button>
                </div>
             </div>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-transparent"
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  const codeString = String(children).replace(/\n$/, '');
                  return !inline && match ? (
                    <div className="relative rounded-lg overflow-hidden my-4 border border-white/10 group/code">
                      <div className="flex items-center justify-between px-4 py-2 bg-navy-900 border-b border-white/10">
                        <span className="text-xs font-mono text-gray-400">{match[1]}</span>
                        <div className="flex items-center gap-2">
                           <button
                             onClick={() => handleCopyCode(codeString)}
                             className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
                           >
                             {copiedCode === codeString ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                             {copiedCode === codeString ? 'Copied!' : 'Copy'}
                           </button>
                        </div>
                      </div>
                      <SyntaxHighlighter
                        {...props}
                        children={codeString}
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, borderRadius: 0, background: '#0f172a' }}
                      />
                    </div>
                  ) : (
                    <code {...props} className="bg-white/10 rounded px-1.5 py-0.5 text-sm font-mono text-purple-300">
                      {children}
                    </code>
                  )
                }
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>

        {/* Message Actions */}
        {!isTyping && !isEditing && (
          <div className={`flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity ${isUser ? 'justify-end' : 'justify-start'}`}>
            {isUser ? (
              <>
                <button onClick={() => setIsEditing(true)} className="p-1 text-gray-500 hover:text-white transition-colors" title="Edit Prompt"><Edit2 className="w-4 h-4" /></button>
              </>
            ) : (
              <>
                <button className="p-1 text-gray-500 hover:text-green-400 transition-colors" title="Like"><ThumbsUp className="w-4 h-4" /></button>
                <button className="p-1 text-gray-500 hover:text-red-400 transition-colors" title="Dislike"><ThumbsDown className="w-4 h-4" /></button>
                {isLatestAI && (
                  <button onClick={regenerateResponse} className="p-1 text-gray-500 hover:text-white transition-colors" title="Regenerate"><RotateCcw className="w-4 h-4" /></button>
                )}
                <button className="p-1 text-gray-500 hover:text-white transition-colors" title="Share"><Share2 className="w-4 h-4" /></button>
              </>
            )}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 mt-1 order-3 text-white text-sm font-bold shadow-lg">
          U
        </div>
      )}
    </motion.div>
  );
}
