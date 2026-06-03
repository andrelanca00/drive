import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const modalidades = [
  {
    marcador: 'I',
    titulo: 'DRIVE',
    legenda: 'PROGRAMA',
    itens: [
      '12 encontros em grupo ao longo de 6 meses.',
      '1 encontro individual com André no primeiro bimestre.',
      'Encontro presencial em São Paulo no encerramento.',
    ],
  },
  {
    marcador: 'II',
    titulo: 'DRIVE PARTNER',
    legenda: 'PROGRAMA AMPLIADO',
    itens: [
      '12 encontros em grupo ao longo de 6 meses.',
      '3 encontros individuais com André, um a cada bimestre.',
      'Encontro presencial em São Paulo no encerramento.',
    ],
  },
]

export default function Modalidades() {
  const sectionRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start('visible')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [controls])

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const cardLeftV = {
    hidden: { opacity: 0, x: -24, y: 24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.5, ease: 'easeOut' } },
  }

  const cardRightV = {
    hidden: { opacity: 0, x: 24, y: 24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.5, ease: 'easeOut' } },
  }

  const itensContainerV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 1.1 } },
  }

  const itemV = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const investmentV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 1.8 } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-preto py-[5rem] text-branco md:py-[12rem]"
    >
      <div className="relative z-10 mx-auto max-w-[80rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>AS DUAS MODALIDADES</span>
          <span>]</span>
        </motion.div>

        <div className="mt-[3rem] grid grid-cols-1 gap-[1.5rem] md:mt-[4rem] md:grid-cols-2 md:gap-[2rem]">
          {modalidades.map((m, idx) => (
            <motion.div
              key={m.titulo}
              initial="hidden"
              animate={controls}
              variants={idx === 0 ? cardLeftV : cardRightV}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group relative flex flex-col overflow-hidden border border-cobre/40 bg-carvao p-[2rem] transition-all duration-300 ease-out hover:border-cobre hover:shadow-[0_24px_60px_rgba(181,123,69,0.25)] md:p-[3rem]"
            >
              <div className="pointer-events-none absolute right-[1.5rem] top-[1.5rem] font-lighters text-[3.5rem] leading-none text-cobre/25 transition-colors duration-300 group-hover:text-cobre/50 md:right-[2rem] md:top-[2rem] md:text-[4.5rem]">
                {m.marcador}
              </div>

              <span className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-cobre">
                {m.legenda}
              </span>

              <h3 className="mt-[1.25rem] font-lighters text-[2.8rem] md:text-[3.5rem] uppercase leading-[1] tracking-[0.02em] text-branco">
                {m.titulo}
              </h3>

              <div className="mt-[2rem] h-px w-[3.5rem] bg-cobre" />

              <motion.ul
                initial="hidden"
                animate={controls}
                variants={itensContainerV}
                className="mt-[2.5rem] flex flex-col gap-[1.25rem]"
              >
                {m.itens.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemV}
                    className="grid grid-cols-[2.5rem_1fr] items-baseline gap-[0.75rem]"
                  >
                    <span className="font-lighters text-[1.4rem] leading-none text-cobre">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i === 1 ? (
                      <span className="font-vogue text-[1.15rem] md:text-[1.25rem] leading-[1.4] text-cobre">
                        {item}
                      </span>
                    ) : (
                      <span className="font-sans text-[0.95rem] md:text-[1rem] leading-[1.55] text-branco/85">
                        {item}
                      </span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-[2.5rem] flex items-center gap-[0.75rem]">
                <div className="h-px flex-1 bg-cobre/40" />
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-cobre/70">
                  JULHO · DEZEMBRO 2026
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={investmentV}
          className="mx-auto mt-[3.5rem] max-w-[42rem] text-center font-sans text-[0.9rem] italic leading-[1.6] text-branco/70"
        >
          O investimento é apresentado durante a conversa de aplicação.
        </motion.p>
      </div>
    </section>
  )
}
