'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-text-primary rounded-[10px] p-12 md:p-20 overflow-hidden"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-haffer text-white tracking-tight leading-tight">
                Ready to<br />level up?
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <p className="text-gray-400 md:text-right max-w-sm">
                Join hundreds of students already learning web development the fun way. Free to start.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/register">
                  <button className="px-7 py-4 bg-accent text-black rounded-[7px] font-medium hover:brightness-90 transition-all inline-flex items-center gap-2 group">
                    Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/login">
                  <button className="px-7 py-4 border border-gray-600 text-white rounded-[7px] font-medium hover:border-gray-400 transition-colors">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
