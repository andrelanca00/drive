import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import andreSentado from '../assets/images/andre-sentado-ambiente-claro.jpg'
import andreSentadoSm from '../assets/images/andre-sentado-ambiente-claro-sm.jpg'

export default function Boards() {
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
      { threshold: 0.15 }
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
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2 } },
  }

  const para = delay => ({
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  })

  const highlightV = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.3 } },
  }

  const lineGrowV = {
    hidden: { width: 0 },
    visible: { width: '5rem', transition: { duration: 0.9, delay: 1.7 } },
  }

  const finalV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 2 } },
  }

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-preto py-[5rem] text-branco md:py-[12rem]"
    >
      <div className="relative z-10 mx-auto max-w-[75rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>O FORMATO QUE DEFINE A DRIVE</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[2.5rem] font-lighters text-[3.5rem] md:text-[7rem] uppercase leading-[0.95] tracking-[0.02em] text-branco"
        >
          OS <span className="font-vogue text-cobre">BOARDS</span>
        </motion.h2>

        <div className="mt-[4rem] grid grid-cols-1 gap-[2rem] md:grid-cols-2 md:gap-[4rem]">
          <motion.p
            initial="hidden"
            animate={controls}
            variants={para(0.5)}
            className="font-sans text-[0.9rem] md:text-[0.95rem] leading-[1.75] text-branco/85"
          >
            Seis vezes ao longo da Drive, um mentorado leva o próprio caso. Uma decisão travada. Um produto novo que está sendo desenhado. Uma operação que está consumindo mais do que entregando. Uma contratação que está pendente. Um aumento de ticket que ainda não saiu do papel.
          </motion.p>

          <motion.p
            initial="hidden"
            animate={controls}
            variants={para(0.8)}
            className="font-sans text-[0.9rem] md:text-[0.95rem] leading-[1.75] text-branco/85"
          >
            O caso é analisado ao vivo. André conduz. Dois conselheiros convidados sentam ao lado. A turma observa, participa, contribui.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative mt-[5rem] h-[28rem] w-full overflow-hidden md:mt-[7rem] md:h-[36rem]"
        >
          <img
            src={andreSentado}
            srcSet={`${andreSentadoSm} 800w, ${andreSentado} 1600w`}
            sizes="(max-width: 1024px) 100vw, 75rem"
            alt="André Lança"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-preto via-preto/30 to-preto/60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end p-[2rem] md:p-[3rem]">
            <div className="flex items-center gap-[1rem]">
              <span className="block h-px w-[2rem] bg-cobre" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-branco/80">
                ANDRÉ LANÇA
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={highlightV}
          className="mt-[3rem] border-y border-cobre/40 py-[3rem] md:mt-[4rem]"
        >
          <p className="mx-auto max-w-[44rem] text-center font-serif text-[1.8rem] md:text-[2.6rem] uppercase leading-[1.1] tracking-[0.03em] text-branco">
            <span className="font-vogue text-cobre">CONSELHO</span> EXECUTIVO APLICADO AO SEU NEGÓCIO.
          </p>
        </motion.div>

        <div className="mt-[4rem] flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineGrowV}
            className="h-px bg-cobre"
          />
          <motion.p
            initial="hidden"
            animate={controls}
            variants={finalV}
            className="mt-[1.5rem] text-center font-sans text-[0.7rem] uppercase tracking-[0.35em] text-branco/60"
          >
            OS CONSELHEIROS SÃO SELECIONADOS A CADA BOARD.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
