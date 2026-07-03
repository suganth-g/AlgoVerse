import { useState } from 'react';
import { Play, Save, Download, Upload, Copy, Maximize2, Settings, Type } from 'lucide-react';
import Editor from '@monaco-editor/react';
import Button from '../components/ui/Button';
import CodeOutput from '../components/features/CodeOutput';
import PageHeader from '../components/layout/PageHeader';
import Split from 'react-split';

export default function CodeEditor() {
  const [code, setCode] = useState('// Welcome to AlgoVerse Playground\n// Write your code here and hit Run\n\nfunction main() {\n  console.log("Hello, World!");\n}\n\nmain();');
  const [language, setLanguage] = useState('javascript');
  const [outputStatus, setOutputStatus] = useState(null);

  const handleRun = () => {
    setOutputStatus('Running...');
    setTimeout(() => {
      setOutputStatus('Accepted');
    }, 1000);
  };

  return (
    <div className="animate-fade-in h-[calc(100vh-6rem)] -m-4 lg:-m-6 flex flex-col p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h1 className="text-xl font-bold text-white font-poppins">Playground</h1>
        <div className="flex items-center gap-3">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-navy-800 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          <div className="w-px h-6 bg-white/10 mx-1" />
          <Button variant="secondary" size="sm" icon={Save}>Save Draft</Button>
          <Button variant="primary" size="sm" icon={Play} onClick={handleRun}>Run Code</Button>
        </div>
      </div>

      <div className="flex-1 bg-navy-900 border border-white/10 rounded-2xl overflow-hidden shadow-glass flex flex-col min-h-0">
        <div className="h-12 bg-[#252526] border-b border-[#333] flex items-center justify-between px-4 shrink-0">
          <div className="text-sm font-medium text-gray-300">index.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : 'cpp'}</div>
          <div className="flex items-center gap-1 text-gray-400">
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Copy Code"><Copy className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Download Code"><Download className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Upload Code"><Upload className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-[#444] mx-1" />
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Font Size"><Type className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Settings"><Settings className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-white/5 rounded-md hover:text-white transition-colors" title="Fullscreen"><Maximize2 className="w-4 h-4" /></button>
          </div>
        </div>

        <Split 
          className="flex-1 flex flex-col sm:flex-row overflow-hidden" 
          sizes={[65, 35]} 
          minSize={200} 
          gutterSize={6}
          direction="horizontal"
          cursor="col-resize"
        >
          {/* Editor */}
          <div className="h-full relative bg-[#1e1e1e]">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={setCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
                lineHeight: 24,
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
                formatOnPaste: true,
              }}
            />
          </div>

          {/* Output */}
          <div className="h-full bg-navy-900 border-l border-white/5">
            <CodeOutput 
              status={outputStatus}
              output={outputStatus === 'Accepted' ? 'Hello, World!' : null}
              executionTime={outputStatus === 'Accepted' ? 12 : null}
              memory={outputStatus === 'Accepted' ? 32.4 : null}
            />
          </div>
        </Split>
      </div>
    </div>
  );
}
