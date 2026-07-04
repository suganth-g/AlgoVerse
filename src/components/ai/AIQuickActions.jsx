import React from 'react';
import { Lightbulb, Code2, Bug, Zap, Settings, Play, BookOpen, GraduationCap, Briefcase, GitPullRequest } from 'lucide-react';

export default function AIQuickActions({ setInput }) {
  const actions = [
    { id: 'explain-code', icon: Lightbulb, label: 'Explain Code', prompt: 'Please explain this code snippet in detail:\n\n```\n// Paste your code here\n```' },
    { id: 'debug-code', icon: Bug, label: 'Debug Code', prompt: 'I have a bug in my code. Here is the code and the error message:\n\n```\n// Paste code here\n```\n\nError:\n' },
    { id: 'optimize-code', icon: Zap, label: 'Optimize Code', prompt: 'How can I optimize this code for better time and space complexity?\n\n```\n// Paste code here\n```' },
    { id: 'generate-algo', icon: Code2, label: 'Generate Algorithm', prompt: 'Can you write an algorithm for the following problem statement?\n\n' },
    { id: 'explain-dsa', icon: BookOpen, label: 'Explain DSA', prompt: 'Can you explain the data structure or algorithm: [Insert topic here] with an example?' },
    { id: 'test-cases', icon: Play, label: 'Generate Test Cases', prompt: 'Please generate comprehensive test cases (including edge cases) for this problem/code:\n\n' },
    { id: 'interview-prep', icon: Briefcase, label: 'Interview Questions', prompt: 'Give me 5 common interview questions related to [Topic] and their solutions.' },
    { id: 'roadmap', icon: GitPullRequest, label: 'Learning Roadmap', prompt: 'Create a learning roadmap for mastering [Topic] in [Timeframe].' },
  ];

  return (
    <div className="flex flex-col w-64 bg-navy-900 border-l border-white/5 h-full shrink-0 hidden lg:flex">
      <div className="p-4 border-b border-white/5">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-400" />
          Quick Actions
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {actions.map(action => (
          <button
            key={action.id}
            onClick={() => setInput(action.prompt)}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/50 text-left transition-all group"
          >
            <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-purple-500/20 transition-colors">
              <action.icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {action.label}
            </span>
          </button>
        ))}

        <div className="mt-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Model Info</h4>
          <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-xs text-gray-400">
            <p className="mb-2"><span className="text-gray-300">Context Window:</span> 128k tokens</p>
            <p className="mb-2"><span className="text-gray-300">Knowledge Cutoff:</span> Feb 2026</p>
            <p><span className="text-gray-300">Latency:</span> ~1.2s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
