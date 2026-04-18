import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiBolt,
  HiBriefcase,
  HiClock,
  HiGlobeAlt,
} from 'react-icons/hi2';
import { getYearsOfExperienceLabel } from '../utils/experience';
import SectionBadge from './SectionBadge';
import { SCROLL_MARGIN_CLASS } from '../constants/layout';

/** Light intro cards — the kind of things I'd say if you asked about me in person. */
export default function HiringHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const years = getYearsOfExperienceLabel();

  const tiles = [
    {
      Icon: HiBolt,
      eyebrow: 'What I do',
      stat: 'Build with AI',
      hint: 'Python · LangChain · RAG · agents',
      detail:
        'I like turning LLMs into real features — with retrieval, evals, and proper engineering around them.',
      accent: 'border-l-[3px] border-l-violet-500 dark:border-l-violet-400',
    },
    {
      Icon: HiClock,
      eyebrow: 'Background',
      stat: `${years} years coding`,
      hint: 'Fullstack · Java · Angular',
      detail:
        'Long career shipping web and backend systems. AI is the next chapter, not my first rodeo.',
      accent: 'border-l-[3px] border-l-teal-500 dark:border-l-teal-400',
    },
    {
      Icon: HiBriefcase,
      eyebrow: 'Right now',
      stat: 'Concentrix',
      hint: 'Cloud consultant',
      detail:
        "Working on T-Mobile's supply-chain platform — big system, real users, lots to learn from.",
      accent: 'border-l-[3px] border-l-amber-500 dark:border-l-amber-400',
    },
    {
      Icon: HiGlobeAlt,
      eyebrow: 'Looking for',
      stat: 'A good team',
      hint: 'Remote, hybrid, or on-site',
      detail:
        'Somewhere I can own AI features end-to-end and work with people who care about the craft.',
      accent: 'border-l-[3px] border-l-sky-500 dark:border-l-sky-400',
    },
  ];

  return (
    <section
      id="highlights"
      className={`${SCROLL_MARGIN_CLASS} border-y border-neutral-200/80 bg-neutral-50/90 dark:border-white/[0.06] dark:bg-ink-900/40`}
      aria-label="Quick summary"
    >
      <div className="section-container !py-16 md:!py-20" ref={ref}>
        <div className="mb-10 md:mb-14">
          <SectionBadge align="left">Quick intro</SectionBadge>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl dark:text-white">
            A little about me
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-glow-100/55 md:text-lg">
            The four things that come up most when people ask what I do.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => {
            const Icon = tile.Icon;
            return (
            <motion.article
              key={tile.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col rounded-2xl border border-neutral-200/90 bg-white p-5 pl-4 shadow-sm dark:border-white/[0.08] dark:bg-ink-950/80 ${tile.accent}`}
            >
              <div className="flex items-center gap-2 text-neutral-500 dark:text-glow-100/45">
                <Icon className="size-5 shrink-0" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {tile.eyebrow}
                </span>
              </div>
              <p className="mt-3 font-display text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                {tile.stat}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-glow-100/65">
                {tile.hint}
              </p>
              <p className="mt-3 text-sm leading-snug text-neutral-500 dark:text-glow-100/50">
                {tile.detail}
              </p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
