import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import logoBranco from '../assets/logo/logo-2-branco.svg'
import resultBranco from '../assets/logo/result-branco.png'
import { trackRegistration } from '../lib/pixel'

const TYPEFORM_ID = 'bvBLEskP'

export default function Aplicacao({ onInscrevaClick, onOpenPrivacy }) {
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
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [controls])

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  }

  const mainV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.4 } },
  }

  const buttonV = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.2 } },
  }

  const footerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 1.8 } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-preto py-[5rem] text-branco md:py-[12rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobre/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cobre/60 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[60rem] flex-col items-center px-[2rem] text-center md:px-0">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>APLICAÇÃO</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={mainV}
          className="mt-[3rem] max-w-[48rem] font-lighters text-[2.4rem] md:text-[4rem] uppercase leading-[1.05] tracking-[0.02em] text-branco"
        >
          AS VAGAS DA DRIVE 2026 SÃO ACESSADAS <span className="font-vogue text-cobre">POR AQUI</span>.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={buttonV}
          className="mt-[4rem]"
        >
          <div className="inline-block">
            <button
              disabled
              style={{ backgroundColor: '#2E2A26', color: '#FAFAF780', border: 'none' }}
              className="cursor-not-allowed px-[1.75rem] py-[1.25rem] font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] sm:px-[3rem] sm:py-[1.5rem] sm:text-[0.9rem] sm:tracking-[0.25em] md:px-[3.5rem] md:py-[1.6rem] md:text-[1rem] md:tracking-[0.3em]"
            >
              INSCRIÇÕES ENCERRADAS
            </button>
          </div>
        </motion.div>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={footerV}
          className="mt-[1.5rem] max-w-[36rem] font-sans text-[0.7rem] leading-[1.5] text-branco/55"
        >
          Ao se inscrever você concorda com nossa{' '}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="font-bold text-branco/80 underline decoration-cobre/50 transition-colors hover:text-branco"
          >
            Política de Privacidade
          </button>{' '}
          e com o tratamento dos seus dados conforme a LGPD.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={footerV}
          className="mt-[6rem] flex flex-col items-center gap-[1.5rem]"
        >
          <img src={logoBranco} alt="Drive" className="h-auto w-[14rem] md:w-[18rem]" />

          <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-branco/50">
            DRIVE 2026. MENTORIA ANDRÉ LANÇA.
          </p>

          <div className="mt-[1.5rem] flex flex-col items-center gap-[0.75rem] border-t border-branco/15 pt-[1.5rem]">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-branco/45">
              UMA INICIATIVA
            </span>
            <img src={resultBranco} alt="Result" className="h-auto w-[6rem] opacity-80 md:w-[7rem]" />
          </div>

          <button
            type="button"
            onClick={onOpenPrivacy}
            className="mt-[1rem] font-sans text-[0.65rem] uppercase tracking-[0.3em] text-branco/40 transition-colors hover:text-branco/80"
          >
            POLÍTICA DE PRIVACIDADE
          </button>
        </motion.div>
      </div>
    </section>
  )
}
