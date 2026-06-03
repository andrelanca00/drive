import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const pilares = [
  {
    numero: '01',
    nome: 'Direção',
    descricao: 'Clareza sobre onde a sua agência precisa estar nos próximos anos.',
  },
  {
    numero: '02',
    nome: 'Repertório',
    descricao: 'Referências que separam o estrategista do operador.',
  },
  {
    numero: '03',
    nome: 'Identidade',
    descricao: 'Marca pessoal como ativo de negócio e argumento de ticket.',
  },
  {
    numero: '04',
    nome: 'Visão',
    descricao: 'Leitura de mercado antes do mercado pedir.',
  },
  {
    numero: '05',
    nome: 'Estratégia',
    descricao: 'Decisão que vira movimento, e movimento que vira resultado.',
  },
]

export default function CincoPilares() {
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

  const titleV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  }

  const subtitleV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  }

  const gridV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.8 } },
  }

  const cardV = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
          <span>CINCO PILARES</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[2.5rem] max-w-[55rem] font-lighters text-[2.4rem] md:text-[4rem] uppercase leading-[1.05] tracking-[0.02em] text-branco"
        >
          A ARQUITETURA QUE <span className="font-vogue text-cobre">SUSTENTA</span> OS SEIS MESES.
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={subtitleV}
          className="mt-[2rem] max-w-[40rem] font-sans text-[0.95rem] md:text-[1rem] leading-[1.7] text-branco/75"
        >
          Cinco camadas conectadas que organizam o trabalho ao longo do programa.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={gridV}
          className="mt-[5rem] grid grid-cols-1 gap-[1rem] md:grid-cols-6 md:gap-[1.25rem]"
        >
          {pilares.map((p, i) => (
            <motion.div
              key={p.numero}
              variants={cardV}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`group flex min-h-[15rem] flex-col border border-cobre/30 bg-carvao p-[2rem] transition-colors duration-300 ease-out hover:border-cobre/80 md:col-span-2 md:p-[2.25rem] ${
                i === 3 ? 'md:col-start-2' : ''
              }`}
            >
              <div className="flex items-center gap-[0.6rem]">
                <span className="block h-px w-[1.25rem] bg-cobre" />
                <span className="font-serif text-[1.1rem] text-cobre">
                  {p.numero}
                </span>
              </div>

              <h3 className="mt-[2rem] font-serif text-[1.8rem] md:text-[2rem] uppercase leading-[1.1] tracking-[0.02em] text-branco transition-colors duration-300 group-hover:text-cobre">
                {p.nome}
              </h3>

              <p className="mt-[1rem] font-sans text-[0.85rem] md:text-[0.9rem] leading-[1.55] text-branco/70">
                {p.descricao}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
