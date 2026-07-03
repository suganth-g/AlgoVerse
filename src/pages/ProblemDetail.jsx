import { useState } from 'react';
import { 
  Play, Send, Save, RotateCcw, ChevronLeft, ChevronRight, 
  Settings, Maximize2, FileText, CheckCircle2, MessageSquare, AlertCircle, Bookmark
} from 'lucide-react';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Tag from '../components/ui/Tag';
import CodeOutput from '../components/features/CodeOutput';
import { SimpleTabs } from '../components/ui/Tabs';

export default function ProblemDetail() {
  const [activeTab, setActiveTab] = useState('Description');
  const [code, setCode] = useState('function twoSum(nums, target) {\n    // Write your code here\n    \n};');
  const [outputStatus, setOutputStatus] = useState(null);

  const handleRun = () => {
    setOutputStatus('Running...');
    setTimeout(() => {
      setOutputStatus('Accepted');
    }, 1500);
  };

  const handleSubmit = () => {
    setOutputStatus('Evaluating...');
    setTimeout(() => {
      setOutputStatus('Accepted');
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-6rem)] -m-4 lg:-m-6 flex flex-col animate-fade-in">
      {/* Top Bar */}
      <div className="h-12 bg-navy-900 border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button className="p-1.5 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button className="p-1.5 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
          <span className="text-sm font-medium text-white hidden sm:block">1. Two Sum</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" icon={Play} onClick={handleRun}>Run</Button>
          <Button variant="primary" size="sm" icon={Send} onClick={handleSubmit}>Submit</Button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-white/5 rounded-md text-gray-400 hover:text-purple-400 transition-colors"><Bookmark className="w-5 h-5" /></button>
          <button className="p-1.5 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
          <button className="p-1.5 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors hidden sm:block"><Maximize2 className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Split Pane */}
      <Split 
        className="flex-1 flex overflow-hidden" 
        sizes={[40, 60]} 
        minSize={300} 
        gutterSize={6}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        {/* Left Pane: Description/Discussion/Solutions */}
        <div className="h-full flex flex-col bg-navy-900 border-r border-white/5 overflow-hidden">
          <div className="px-4 pt-2 border-b border-white/5 shrink-0">
            <SimpleTabs 
              tabs={['Description', 'Editorial', 'Solutions', 'Submissions']} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {activeTab === 'Description' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-3">1. Two Sum</h1>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="easy">Easy</Badge>
                    <div className="flex items-center gap-2">
                      <Tag color="gray">Array</Tag>
                      <Tag color="gray">Hash Table</Tag>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert prose-p:text-gray-300 prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/5 max-w-none">
                  <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
                  <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>
                  <p>You can return the answer in any order.</p>

                  <h4 className="text-white mt-6 mb-2">Example 1:</h4>
                  <pre><code>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>

                  <h4 className="text-white mt-6 mb-2">Example 2:</h4>
                  <pre><code>Input: nums = [3,2,4], target = 6
Output: [1,2]</code></pre>

                  <h4 className="text-white mt-6 mb-2">Constraints:</h4>
                  <ul>
                    <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
                    <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
                    <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
                    <li><strong>Only one valid answer exists.</strong></li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab !== 'Description' && (
              <div className="h-full flex items-center justify-center text-gray-500">
                Content for {activeTab}
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: Code Editor + Output */}
        <div className="h-full flex flex-col bg-[#1e1e1e]">
          {/* Editor Header */}
          <div className="h-10 bg-[#252526] flex items-center justify-between px-4 shrink-0">
            <select className="bg-transparent text-sm text-gray-300 focus:outline-none cursor-pointer">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-white transition-colors p-1" title="Reset to default code"><RotateCcw className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          
          <div className="flex-1 min-h-0 relative">
            <Editor
              height="100%"
              defaultLanguage="javascript"
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
          
          {/* Output Panel (conditionally shown or resizable later, fixed for now) */}
          <div className="h-1/3 border-t border-[#333] shrink-0">
            <CodeOutput 
              status={outputStatus}
              output={outputStatus === 'Accepted' ? '[0, 1]' : null}
              executionTime={outputStatus === 'Accepted' ? 52 : null}
              memory={outputStatus === 'Accepted' ? 42.1 : null}
            />
          </div>
        </div>
      </Split>
    </div>
  );
}
