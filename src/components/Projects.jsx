import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Sparkles, Cloud, Store } from 'lucide-react';

const projects = [
  {
    title: 'Foodly – Delivery App',
    desc: 'End-to-end delivery experience with maps, live tracking, and payments.',
    tags: ['Flutter', 'BLoC', 'Stripe', 'Google Maps'],
    icon: <Smartphone size={20} />,
  },
  {
    title: 'FitPulse – Fitness Coach',
    desc: 'Gamified workouts, animations, and real-time analytics.',
    tags: ['Flutter', 'Riverpod', 'Animations', 'Supabase'],
    icon: <Sparkles size={20} />,
  },
  {
    title: 'Nimbus – Team Chat',
    desc: 'Secure messaging with push notifications and offline-first sync.',
    tags: ['Flutter', 'Firebase', 'Cloud Functions'],
    icon: <Cloud size={20} />,
  },
  {
    title: 'ShopEasy – Ecommerce',
    desc: 'Catalog, cart, checkout, and admin dashboard with clean architecture.',
    tags: ['Flutter', 'Clean Arch', 'GetIt', 'REST API'],
    icon: <Store size={20} />,
  },
];

const Tag = ({ label }) => (
  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs text-white/80 border border-white/10">
    {label}
  </span>
);

const Card = ({ p, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: i * 0.05 }}
    className="group rounded-2xl border border-white/10 p-5 bg-gradient-to-b from-white/[0.06] to-transparent hover:from-white/[0.09] transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.35)]"
  >
    <div className="flex items-center gap-2 text-cyan-300">
      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
        {p.icon}
      </div>
      <h3 className="text-lg font-semibold">{p.title}</h3>
    </div>
    <p className="text-white/70 mt-3 text-sm leading-relaxed">{p.desc}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {p.tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>
    <div className="mt-5 flex items-center gap-3">
      <a
        href="#"
        className="text-sm text-cyan-300 hover:text-cyan-200"
        onClick={(e) => e.preventDefault()}
      >
        Case study
      </a>
      <a
        href="#"
        className="text-sm text-white/70 hover:text-white"
        onClick={(e) => e.preventDefault()}
      >
        Source
      </a>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <p className="text-white/60 mt-2">A selection of apps I’ve designed and built with Flutter.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-sm"
          >
            Work with me
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
