import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something amazing</h2>
        <p className="text-white/70 mt-3">
          I’m open to freelance work, full-time roles, and collaborations. Tell me about your idea and
          I’ll help you bring it to life with Flutter.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:developer@example.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold"
          >
            <Mail size={18} /> Email me
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg border border-white/15 hover:bg-white/10"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg border border-white/15 hover:bg-white/10"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-lg border border-white/15 hover:bg-white/10"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} FlutterDev — Crafted with ❤️ and Flutter energy</p>
      </div>
    </section>
  );
}
