'use client';

import { motion } from 'framer-motion';

interface InteractiveDiagramProps {
  title: string;
  diagramType?: string;
}

export default function InteractiveDiagram({ title, diagramType = 'tree' }: InteractiveDiagramProps) {
  if (diagramType === 'box-model') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-bg-secondary border border-border-primary rounded-[7px] p-6"
      >
        <h4 className="text-sm font-semibold font-haffer mb-4">{title}</h4>
        <div className="flex items-center justify-center">
          <div className="border-2 border-dashed border-orange-400/60 rounded-[7px] p-4 bg-orange-50/50">
            <div className="text-[10px] text-center text-orange-500 mb-1 font-medium font-haffer uppercase tracking-wider">Margin</div>
            <div className="border-2 border-blue-400/60 rounded-[5px] p-4 bg-blue-50/50">
              <div className="text-[10px] text-center text-blue-500 mb-1 font-medium font-haffer uppercase tracking-wider">Border</div>
              <div className="border-2 border-dashed border-purple-400/60 rounded-[5px] p-3 bg-purple-50/50">
                <div className="text-[10px] text-center text-purple-500 mb-1 font-medium font-haffer uppercase tracking-wider">Padding</div>
                <div className="bg-accent/30 rounded-[5px] p-4 text-center">
                  <div className="text-[10px] font-semibold text-text-primary font-haffer uppercase tracking-wider">Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-secondary border border-border-primary rounded-[7px] p-6"
    >
      <h4 className="text-sm font-semibold font-haffer mb-4">{title}</h4>
      <div className="flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-2 bg-text-primary text-white rounded-[5px] text-sm font-haffer-mono font-medium"
        >
          &lt;html&gt;
        </motion.div>
        <div className="w-px h-4 bg-border-secondary" />
        <div className="flex gap-8">
          {[
            { tag: '<head>', color: 'bg-purple-500', children: ['<title>'] },
            { tag: '<body>', color: 'bg-accent', textColor: 'text-black', children: ['<h1>', '<p>'] },
          ].map((node, i) => (
            <motion.div
              key={node.tag}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`px-3 py-1.5 ${node.color} ${node.textColor || 'text-white'} rounded-[5px] text-xs font-haffer-mono font-medium`}>
                {node.tag}
              </div>
              <div className="w-px h-3 bg-border-secondary" />
              <div className="flex gap-3">
                {node.children.map((child, j) => (
                  <motion.div
                    key={child}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + j * 0.1 }}
                    className="px-2 py-1 bg-bg-tertiary rounded-[5px] text-xs font-haffer-mono text-text-secondary"
                  >
                    {child}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
