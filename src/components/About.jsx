import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getYearsOfExperienceLabel } from '../utils/experience';
import SectionBadge from './SectionBadge';
import { SCROLL_MARGIN_CLASS } from '../constants/layout';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const years = getYearsOfExperienceLabel();

  return (
    <section
      id="about"
      className={`${SCROLL_MARGIN_CLASS} bg-stone-50/80 dark:bg-ink-900/30`}
      aria-label="About me"
    >
      <motion.div
        className="section-container"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-12 md:mb-16">
          <SectionBadge align="left">About</SectionBadge>
          <h2 className="section-title text-left">A bit more about me</h2>
          <p className="section-subtitle text-left">
            The long version — how I got here and what I&apos;m into lately.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="max-w-prose space-y-5 text-[15px] leading-relaxed text-neutral-600 dark:text-glow-100/60 md:text-base">
            <p>
              I started out writing{' '}
              <strong className="text-neutral-950 dark:text-glow-100">Java and Angular</strong>{' '}
              for big enterprise systems — telecom, supply chain, railroads, finance. Over{' '}
              <strong className="text-neutral-950 dark:text-glow-100">{years} years</strong>{' '}
              I&apos;ve shipped a lot of software, broken plenty of things in production, and
              learned how to ship again the next day.
            </p>
            <p>
              A couple of years back I got pulled into{' '}
              <strong className="text-neutral-950 dark:text-glow-100">AI</strong> and never really
              came back. I like the problems: retrieval that actually returns useful stuff, agents
              that don&apos;t spiral, evals that tell you whether a change made things better or
              just different. I mostly work in{' '}
              <strong className="text-neutral-950 dark:text-glow-100">
                Python with LangChain, LangGraph, and vector DBs like ChromaDB
              </strong>
              , but I&apos;ll reach for whatever fits the problem.
            </p>
            <p>
              Right now I&apos;m a cloud consultant at Concentrix, working on{' '}
              <strong className="text-neutral-950 dark:text-glow-100">T-Mobile&apos;s</strong>{' '}
              supply-chain platform by day, and building AI side projects whenever I get a quiet
              weekend — RAG assistants, small agent experiments, self-hosted LLM tooling. Most of
              them end up on the projects page.
            </p>
            <p>
              Outside of work: cricket, long-form cricket arguments, a mild crypto habit, and
              reading about how other engineers build things.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Based in', value: 'Hyderabad, India' },
              { label: 'Experience', value: `${years} years` },
              { label: 'Currently', value: 'Concentrix · on T-Mobile SCM' },
              { label: 'Worked on', value: 'Telecom · Supply chain · Railroads · Finance' },
              { label: 'Studied', value: 'B.Tech, Electronics & Communication' },
              { label: 'Into', value: 'AI, cricket, crypto, good coffee' },
              { label: 'Availability', value: 'Open to new roles' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index, ease: 'easeOut' }}
                className="flex items-center gap-4 rounded-2xl border border-neutral-200/90 bg-white p-4
                           dark:border-white/[0.08] dark:bg-ink-900/50"
              >
                <span className="w-32 shrink-0 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-glow-100/50">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-neutral-900 dark:text-glow-100">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
