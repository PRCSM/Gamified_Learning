'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface BoxModelVisualizerProps {
  title?: string;
}

export default function BoxModelVisualizer({ title }: BoxModelVisualizerProps) {
  const [margin, setMargin] = useState(16);
  const [padding, setPadding] = useState(24);
  const [border, setBorder] = useState(2);

  const controls = [
    { label: 'Margin', value: margin, setter: setMargin, color: '#F97316', max: 48 },
    { label: 'Padding', value: padding, setter: setPadding, color: '#A855F7', max: 48 },
    { label: 'Border', value: border, setter: setBorder, color: '#3B82F6', max: 12 },
  ];

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      <div className="px-4 py-3 border-b border-border-primary">
        <h4 className="text-sm font-semibold font-haffer">{title || 'CSS Box Model'}</h4>
        <p className="text-[11px] text-text-muted mt-0.5">Drag the sliders to see the box model in action</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border-primary">
        {/* Visual */}
        <div className="p-8 flex items-center justify-center bg-bg-primary/50 min-h-[280px]">
          {/* Margin layer */}
          <motion.div
            animate={{ padding: margin }}
            transition={{ duration: 0.3 }}
            className="rounded-[5px] relative"
            style={{ backgroundColor: '#F97316' + '20', border: '1px dashed #F97316' }}
          >
            <span className="absolute top-1 left-2 text-[9px] font-haffer-mono text-[#F97316] font-bold">
              margin: {margin}px
            </span>

            {/* Border layer */}
            <motion.div
              animate={{ borderWidth: border }}
              transition={{ duration: 0.3 }}
              className="rounded-[4px] relative"
              style={{ borderColor: '#3B82F6', borderStyle: 'solid' }}
            >
              {border > 0 && (
                <span className="absolute -top-4 right-1 text-[9px] font-haffer-mono text-[#3B82F6] font-bold">
                  border: {border}px
                </span>
              )}

              {/* Padding layer */}
              <motion.div
                animate={{ padding }}
                transition={{ duration: 0.3 }}
                className="rounded-[3px] relative"
                style={{ backgroundColor: '#A855F7' + '15' }}
              >
                <span className="absolute top-1 left-2 text-[9px] font-haffer-mono text-[#A855F7] font-bold">
                  padding: {padding}px
                </span>

                {/* Content */}
                <div className="bg-accent/10 border border-accent/30 rounded-[3px] px-4 py-3 text-center">
                  <span className="text-sm font-semibold font-haffer text-text-primary">Content</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Controls + code */}
        <div className="p-5 flex flex-col gap-5">
          {/* Sliders */}
          <div className="flex flex-col gap-4">
            {controls.map((ctrl) => (
              <div key={ctrl.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium font-haffer flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: ctrl.color }} />
                    {ctrl.label}
                  </span>
                  <span className="text-xs font-haffer-mono text-text-muted">{ctrl.value}px</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={ctrl.max}
                  value={ctrl.value}
                  onChange={(e) => ctrl.setter(Number(e.target.value))}
                  className="w-full h-1.5 bg-bg-tertiary rounded-full appearance-none cursor-pointer accent-accent"
                />
              </div>
            ))}
          </div>

          {/* Generated CSS */}
          <div className="bg-[#1e1e2e] rounded-[7px] p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
              <div className="w-2 h-2 rounded-full bg-green-400/50" />
            </div>
            <pre className="text-xs leading-relaxed font-haffer-mono">
              <span className="text-[#89b4fa]">.element</span>
              <span className="text-[#cdd6f4]">{' {'}</span>
              {'\n'}
              <span className="text-[#cdd6f4]">  margin: </span>
              <span className="text-[#fab387]">{margin}px</span>
              <span className="text-[#cdd6f4]">;</span>
              {'\n'}
              <span className="text-[#cdd6f4]">  padding: </span>
              <span className="text-[#fab387]">{padding}px</span>
              <span className="text-[#cdd6f4]">;</span>
              {'\n'}
              <span className="text-[#cdd6f4]">  border: </span>
              <span className="text-[#fab387]">{border}px</span>
              <span className="text-[#cdd6f4]"> solid </span>
              <span className="text-[#a6e3a1]">#3B82F6</span>
              <span className="text-[#cdd6f4]">;</span>
              {'\n'}
              <span className="text-[#cdd6f4]">{'}'}</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
