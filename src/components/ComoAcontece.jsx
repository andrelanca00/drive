import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const blocos = [
  {
    numero: '01',
    titulo: 'Encontros em grupo.',
    paragrafos: [
      'Ao longo dos 6 meses, são 12 aulas em grupo no total. Cada aula com duas horas. A primeira hora é uma aula sobre algo concreto. A segunda hora é debate aplicado ao contexto de cada um.',
      'Dessas 12 aulas, 9 são conduzidas pelo André e 3 são conduzidas por convidados especiais. Os nomes dos convidados não são revelados antes, são parte da surpresa do programa.',
      'Entre as 9 aulas com André, 6 têm um formato especial chamado board. Nesses encontros, qualquer mentorado pode enviar um case do próprio negócio com antecedência. André analisa o case ao vivo, com 2 conselheiros convidados ao lado dele, e a turma também participa da análise.',
    ],
  },
  {
    numero: '02',
    titulo: 'Encontro individual com o André.',
    paragrafos: [
      'Todo mentorado tem direito a um encontro individual com o André ao longo dos 6 meses. 10 dias antes da sua data, você recebe um questionário para preparar o conteúdo do encontro, garantindo que o tempo com ele seja aproveitado ao máximo.',
      'Na modalidade Drive Partner, são 3 encontros individuais com André, um a cada bimestre, todos com o mesmo questionário preparatório.',
    ],
  },
  {
    numero: '03',
    titulo: 'Encontro presencial em São Paulo.',
    paragrafos: [
      'No fim do ano, todos os mentorados se encontram presencialmente em São Paulo para o encerramento da Drive.',
    ],
  },
  {
    numero: '04',
    titulo: 'Onboarding.',
    paragrafos: [
      'Assim que você confirmar sua entrada, recebe um questionário guia. Esse questionário dá ao André e aos conselheiros da mentoria mais contexto sobre sua marca pessoal e sua empresa, para que o trabalho ao longo dos 6 meses seja direcionado a você.',
    ],
  },
]

export default function ComoAcontece() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.2 } },
  }

  const listV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.7 } },
  }

  const blocoV = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-branco py-[5rem] text-preto md:py-[12rem]"
    >
      <div className="relative z-10 mx-auto max-w-[75rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>COMO A DRIVE FUNCIONA EM DETALHES</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[2.5rem] max-w-[50rem] font-lighters text-[2.2rem] md:text-[3.6rem] uppercase leading-[1.05] tracking-[0.02em] text-preto"
        >
          SÃO <span className="font-vogue text-cobre">6 MESES</span>, DE JULHO A DEZEMBRO DE 2026.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={listV}
          className="mt-[5rem]"
        >
          {blocos.map((b, i) => (
            <motion.div
              key={b.numero}
              variants={blocoV}
              className={`grid grid-cols-1 gap-[1.5rem] py-[2.5rem] md:grid-cols-[8rem_1fr] md:gap-[3rem] md:py-[3rem] ${
                i > 0 ? 'border-t border-preto/15' : ''
              }`}
            >
              <div className="flex items-baseline gap-[0.8rem] md:flex-col md:items-start md:gap-[0.5rem]">
                <span className="font-serif text-[2.8rem] md:text-[3.5rem] leading-none text-cobre">
                  {b.numero}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-[1.4rem] md:text-[1.9rem] uppercase leading-[1.15] tracking-[0.02em] text-preto">
                  {b.titulo}
                </h3>
                <div className="mt-[1.5rem] flex flex-col gap-[1.25rem]">
                  {b.paragrafos.map((p, idx) => (
                    <p
                      key={idx}
                      className="font-sans text-[0.9rem] md:text-[1rem] leading-[1.7] text-preto/85"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
