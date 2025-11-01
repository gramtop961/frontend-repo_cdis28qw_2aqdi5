import React from 'react';
import SplineDefault, { Spline as SplineNamed } from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

// Support both default and named exports from @splinetool/react-spline
const Spline = SplineDefault ?? SplineNamed;

const SkillPill = ({ label }) => (
  <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs border border-white/10">
    {label}
  </span>
);

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28">
      {/* Non-blocking ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text column */}
        <div className="relative z-10 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Flutter Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Building beautiful, high-performance apps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/70 leading-relaxed max-w-xl"
          >
            I craft modern, pixel-perfect mobile experiences with Flutter and Dart — from idea to the
            app stores. I love clean architecture, smooth animations, and delightful UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {['Flutter','Dart','Firebase','Riverpod','BLoC','Animations','CI/CD','REST & GraphQL','Native iOS/Android'].map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_14px_40px_-8px_rgba(56,189,248,0.7)] transition-shadow"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 hover:bg-white/10 transition"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </div>

        {/* 3D Spline column */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          {Spline ? (
            <Spline
              scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/60 text-sm">
              Unable to load 3D scene
            </div>
          )}
          {/* Non-interfering gradient overlay so 3D remains interactive */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0e14] to-transparent" />
        </div>
      </div>
    </section>
  );
}
