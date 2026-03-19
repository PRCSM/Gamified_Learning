'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Play, Copy, Check } from 'lucide-react';

interface LiveCodeEditorProps {
  initialCode: string;
  language?: string;
  title?: string;
}

export default function LiveCodeEditor({ initialCode, language = 'html', title }: LiveCodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [preview, setPreview] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRun = useCallback(() => {
    setPreview(code);
  }, [code]);

  const handleReset = () => {
    setCode(initialCode);
    setPreview(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCodeChange = (val: string) => {
    setCode(val);
  };

  const lines = code.split('\n');

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border-primary bg-bg-tertiary/50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="text-xs text-text-muted font-haffer-mono ml-2">
            {title || `editor.${language}`}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-[5px] text-xs text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors border border-border-primary"
          >
            {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-[5px] text-xs text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors border border-border-primary"
          >
            <RotateCcw size={12} /> Reset
          </button>
          <button
            onClick={handleRun}
            className="flex items-center gap-1 px-3 py-1.5 rounded-[5px] text-xs font-semibold bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            <Play size={12} /> Run
          </button>
        </div>
      </div>

      {/* Split pane */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border-primary">
        {/* Code editor */}
        <div className="relative bg-[#1e1e2e] min-h-[280px] max-h-[450px] overflow-auto">
          <div className="absolute top-0 left-0 w-10 h-full bg-[#1e1e2e] border-r border-white/5 flex flex-col items-end pt-3 pr-2 select-none pointer-events-none">
            {lines.map((_, i) => (
              <span key={i} className="text-[11px] leading-[1.65rem] text-white/20 font-haffer-mono">
                {i + 1}
              </span>
            ))}
          </div>
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            spellCheck={false}
            className="w-full h-full min-h-[280px] bg-transparent text-[#e2e8f0] font-haffer-mono text-sm leading-[1.65rem] p-3 pl-12 outline-none resize-none"
            style={{ tabSize: 2 }}
          />
        </div>

        {/* Live preview */}
        <div className="bg-white min-h-[280px] flex flex-col">
          <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-200 flex items-center gap-2 shrink-0">
            <Play size={11} className="text-gray-400" />
            <span className="text-[10px] text-gray-400 font-medium">Live Preview</span>
          </div>
          {preview ? (
            <iframe
              srcDoc={preview}
              sandbox="allow-scripts"
              title="preview"
              className="w-full flex-1 min-h-[252px] border-0"
            />
          ) : (
            <div className="flex-1 min-h-[252px] flex items-center justify-center text-sm text-gray-400">
              Click <span className="inline-flex items-center gap-1 mx-1.5 px-2 py-0.5 bg-accent/10 text-accent rounded font-semibold text-xs"><Play size={10} /> Run</span> to see the output
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
