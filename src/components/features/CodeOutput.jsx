import { CheckCircle2, XCircle, Clock, Cpu } from 'lucide-react';

export default function CodeOutput({ status, output, expectedOutput, executionTime, memory }) {
  if (!status) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-500">
        <p>Run your code to see the output here.</p>
      </div>
    );
  }

  const isSuccess = status === 'Accepted';
  const isError = status === 'Error' || status === 'Time Limit Exceeded' || status === 'Wrong Answer';

  return (
    <div className="flex flex-col h-full bg-navy-900 rounded-xl border border-white/10 overflow-hidden">
      <div className={`px-4 py-3 border-b flex items-center justify-between ${
        isSuccess ? 'bg-green-500/10 border-green-500/20' : 
        isError ? 'bg-red-500/10 border-red-500/20' : 
        'bg-white/5 border-white/10'
      }`}>
        <div className="flex items-center gap-2">
          {isSuccess ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : 
           isError ? <XCircle className="w-5 h-5 text-red-400" /> : null}
          <span className={`font-semibold ${isSuccess ? 'text-green-400' : isError ? 'text-red-400' : 'text-white'}`}>
            {status}
          </span>
        </div>
        {(executionTime || memory) && (
          <div className="flex items-center gap-4 text-xs">
            {executionTime && (
              <span className={`flex items-center gap-1 ${isSuccess ? 'text-green-300/70' : 'text-gray-400'}`}>
                <Clock className="w-3.5 h-3.5" /> {executionTime}ms
              </span>
            )}
            {memory && (
              <span className={`flex items-center gap-1 ${isSuccess ? 'text-green-300/70' : 'text-gray-400'}`}>
                <Cpu className="w-3.5 h-3.5" /> {memory}MB
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {output && (
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Output</h4>
            <pre className="font-mono text-sm bg-black/30 p-3 rounded-lg text-gray-300 overflow-x-auto">
              {output}
            </pre>
          </div>
        )}
        
        {expectedOutput && status === 'Wrong Answer' && (
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Expected Output</h4>
            <pre className="font-mono text-sm bg-black/30 p-3 rounded-lg text-green-400/80 overflow-x-auto">
              {expectedOutput}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
