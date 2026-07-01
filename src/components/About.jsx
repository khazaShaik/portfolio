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
            The longer version — how I got here and what makes me tick.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="max-w-prose space-y-5 text-[15px] leading-relaxed text-neutral-600 dark:text-glow-100/60 md:text-base">
            <p>
              I started out writing{' '}
              <strong className="text-neutral-950 dark:text-glow-100">Java and Angular</strong>{' '}
              for enterprise systems — telecom, supply chain, railroads, finance. Over{' '}
              <strong className="text-neutral-950 dark:text-glow-100">{years} years</strong>{' '}
              I&apos;ve shipped software that processes hundreds of thousands of daily
              transactions, serves thousands of retail stores, and handles real money in
              clearing-house systems.
            </p>
            <p>
              A couple of years back I got pulled into{' '}
              <strong className="text-neutral-950 dark:text-glow-100">AI engineering</strong> and
              never really came back. The problems hooked me: retrieval that actually returns the
              right context, agents that self-correct instead of spiraling, eval frameworks that
              tell you whether a change improved quality or just moved it sideways. I work mostly
              in{' '}
              <strong className="text-neutral-950 dark:text-glow-100">
                Python with LangChain, LangGraph, and vector DBs
              </strong>
              , but I&apos;ll reach for whatever fits the problem.
            </p>
            <p>
              <strong className="text-neutral-950 dark:text-glow-100">
                What I bring to an AI team:
              </strong>{' '}
              I&apos;ve seen what happens when ML prototypes hit production without proper
              engineering around them. My enterprise background means I think about failure modes,
              observability, and deployment from day one — not as an afterthought.
            </p>
            <p>
              Outside of work: cricket, reading about how other engineers build things, and the
              occasional deep-dive into something completely unrelated.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Based in', value: 'Hyderabad, India' },
              { label: 'Experience', value: `${years} years` },
              { label: 'Currently', value: 'Concentrix · T-Mobile SCM' },
              { label: 'Scale', value: '5,000+ stores · 500K+ daily txns' },
              { label: 'Domains', value: 'Telecom · Supply chain · Railroads · Finance' },
              { label: 'Education', value: 'B.Tech, Electronics & Communication' },
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
