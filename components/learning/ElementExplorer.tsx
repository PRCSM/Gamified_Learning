'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TreeNode {
  tag: string;
  children?: TreeNode[];
  codeLine: number;
}

interface CodeLine {
  line: number;
  content: string;
}

interface ElementExplorerProps {
  tree: TreeNode;
  codeLines: CodeLine[];
  title?: string;
}

function TreeNodeView({
  node,
  activeLine,
  setActiveLine,
}: {
  node: TreeNode;
  activeLine: number | null;
  setActiveLine: (line: number | null) => void;
}) {
  const isActive = activeLine === node.codeLine;

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setActiveLine(node.codeLine)}
        onMouseLeave={() => setActiveLine(null)}
        className={`
          px-3 py-1.5 text-xs font-haffer-mono font-semibold rounded-[5px] border-2 transition-all duration-200 cursor-pointer
          ${isActive
            ? 'bg-text-primary text-white border-text-primary shadow-lg'
            : 'bg-bg-secondary text-text-primary border-border-primary hover:border-accent'
          }
        `}
      >
        &lt;{node.tag}&gt;
      </motion.button>

      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-3 bg-border-primary" />
          <div className="flex gap-3 items-start relative">
            {node.children.length > 1 && (
              <div
                className="absolute top-0 h-px bg-border-primary"
                style={{
                  left: `calc(50% / ${node.children.length})`,
                  right: `calc(50% / ${node.children.length})`,
                }}
              />
            )}
            {node.children.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-3 bg-border-primary" />
                <TreeNodeView node={child} activeLine={activeLine} setActiveLine={setActiveLine} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ElementExplorer({ tree, codeLines, title }: ElementExplorerProps) {
  const [activeLine, setActiveLine] = useState<number | null>(null);

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      <div className="px-4 py-3 border-b border-border-primary">
        <h4 className="text-sm font-semibold font-haffer">{title || 'Element Explorer'}</h4>
        <p className="text-[11px] text-text-muted mt-0.5">Hover any element to highlight its code</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border-primary">
        {/* Tree */}
        <div className="p-6 flex justify-center overflow-x-auto bg-bg-primary/50">
          <TreeNodeView node={tree} activeLine={activeLine} setActiveLine={setActiveLine} />
        </div>

        {/* Code */}
        <div className="bg-[#1e1e2e] p-4 overflow-x-auto">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
            <span className="ml-auto text-[10px] font-haffer-mono text-white/30">HTML</span>
          </div>
          <pre className="text-sm leading-relaxed">
            {codeLines.map((line) => (
              <div
                key={line.line}
                onMouseEnter={() => setActiveLine(line.line)}
                onMouseLeave={() => setActiveLine(null)}
                className={`px-2 -mx-2 rounded cursor-pointer transition-all duration-200 ${
                  activeLine === line.line
                    ? 'bg-white/10 border-l-2 border-accent'
                    : 'border-l-2 border-transparent'
                }`}
              >
                <span className="inline-block w-6 text-right mr-3 text-white/20 select-none text-xs font-haffer-mono">
                  {line.line}
                </span>
                <span className="text-[#e2e8f0] font-haffer-mono">{line.content}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}
