import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const temas = [
  'O teto invisível que está limitando o que você cobra.',
  'O que o seu cliente realmente compra quando contrata você.',
  'O que no seu modelo está consumindo mais do que gerando.',
  'As decisões de gestão que você sabe que precisa tomar e está adiando.',
  'O capital visual como argumento de precificação.',
  'Como ler o seu mercado antes que ele te pressione.',
  'O novo dono de agência na era da IA.',
  'O CEO como curador. Repertório, visão e tomada de decisão.',
  'Relacionamento com o motor de crescimento.',
]

export default function TemasComAndre() {
  const ref = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start('visible')
            obs.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [controls])

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const titleV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  }

  const subtitleV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  }

  const listV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
  }

  const itemV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const finalV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 2 } },
  }

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-branco py-[5rem] text-preto md:py-[12rem]"
    >
      <div
        className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 font-sans text-[0.7rem] uppercase tracking-[0.5em] text-preto/40 md:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        TEMAS · DRIVE 2026
      </div>

      <div className="relative z-10 mx-auto max-w-[70rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>O QUE SE TRABALHA COM ANDRÉ</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[2.5rem] max-w-[40rem] font-serif font-normal text-[2.2rem] md:text-[3.5rem] leading-[1.2] text-preto"
        >
          Os territórios abertos ao longo dos seis meses.
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={subtitleV}
          className="mt-[2rem] max-w-[45rem] font-sans font-normal text-[1rem] leading-[1.6] text-preto/70"
        >
          Cada encontro com André abre um território de decisão estratégica do dono de agência madura.
        </motion.p>

        <motion.ol
          initial="hidden"
          animate={controls}
          variants={listV}
          className="mt-[5rem] flex flex-col"
        >
          {temas.map((t, i) => (
            <motion.li
              key={i}
              variants={itemV}
              className="grid grid-cols-[5rem_1fr] items-baseline gap-[1.5rem] border-t border-preto/10 py-[2rem] md:grid-cols-[5rem_1fr] md:py-[2rem]"
            >
              <span className="font-serif font-normal text-[2.5rem] leading-none text-bordo">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif font-normal text-[1.1rem] md:text-[1.4rem] leading-[1.4] text-preto">
                {t}
              </span>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={finalV}
          className="mt-[3rem] font-sans text-[0.8rem] italic text-cobre"
        >
          Os temas evoluem com o momento do mercado e da turma.
        </motion.p>
      </div>
    </section>
  )
}
