'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Play, Check, X } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  language?: string;
}

export default function CodePreview({ code, language = 'html' }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setShowPreview(!showPreview);
  };

  // Wrap code in a basic HTML document if it's not a full page
  const previewHtml = code.includes('<html') || code.includes('<!DOCTYPE')
    ? code
    : `<!DOCTYPE html>
<html>
<head><style>body { font-family: system-ui, sans-serif; padding: 16px; }</style></head>
<body>${code}</body>
</html>`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-text-primary rounded-[7px] overflow-hidden border border-border-hover/30"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <span className="text-[11px] text-gray-500 font-haffer-mono uppercase tracking-wide">{language}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-[5px] font-haffer"
          >
            {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          {(language === 'html' || language === 'css') && (
            <button
              onClick={handleRun}
              className={`flex items-center gap-1 text-xs px-3 py-1 rounded-[5px] font-medium transition font-haffer ${
                showPreview
                  ? 'bg-white/10 text-white hover:bg-white/15'
                  : 'bg-accent text-white hover:brightness-90'
              }`}
            >
              {showPreview ? <><X size={11} /> Close</> : <><Play size={11} /> Run</>}
            </button>
          )}
        </div>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="font-haffer-mono text-gray-100 leading-relaxed whitespace-pre">{code}</code>
      </pre>

      {/* Live Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10">
              <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                <span className="text-[10px] text-gray-400 font-medium ml-1">Preview</span>
              </div>
              <iframe
                srcDoc={previewHtml}
                sandbox="allow-scripts"
                title="code-preview"
                className="w-full bg-white border-0"
                style={{ minHeight: '120px', height: '180px' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
