import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { trackCustom } from '../lib/pixel'

const WHATSAPP_URL =
  'https://wa.me/44991812090?text=Ol%C3%A1%20Isa%2C%20vim%20da%20p%C3%A1gina%20da%20Drive.%20Tenho%20uma%20d%C3%BAvida.'

export default function FaleComIsa() {
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

  const topLineV = {
    hidden: { width: 0 },
    visible: { width: '4rem', transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  }

  const mainV = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, ease: 'easeOut' } },
  }

  const buttonV = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' } },
  }

  const closingLineV = {
    hidden: { width: 0 },
    visible: { width: '4rem', transition: { duration: 0.8, delay: 1.4, ease: 'easeOut' } },
  }

  const handleClick = () => {
    trackCustom('WhatsAppClick', { source: 'fale-com-isa-section' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-branco py-[6rem] text-preto md:py-[10rem]"
    >
      <div className="relative z-10 mx-auto flex max-w-[50rem] flex-col items-center px-[2rem] text-center md:px-0">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={topLineV}
          className="h-px bg-marsala"
        />

        <motion.p
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="mt-[2rem] font-sans text-[0.75rem] uppercase tracking-[0.35em] text-marsala"
        >
          DÚVIDAS
        </motion.p>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={mainV}
          className="mt-[3rem] max-w-[40rem] font-serif text-[1.7rem] leading-[1.3] text-preto md:text-[2.2rem]"
        >
          A Isa atende cada candidato individualmente. Pode chama-la direto.
        </motion.h2>

        <motion.a
          initial="hidden"
          animate={controls}
          variants={buttonV}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ backgroundColor: '#A53148', color: '#FAFAF7' }}
          className="mt-[4rem] inline-block cursor-pointer px-[3rem] py-[1.25rem] font-sans text-[0.9rem] font-medium uppercase tracking-[0.2em] no-underline shadow-[0_14px_40px_rgba(165,49,72,0.5)] transition-transform duration-300 ease-out"
        >
          FALAR COM A ISA NO WHATSAPP
        </motion.a>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={closingLineV}
          className="mt-[4rem] h-px bg-marsala"
        />
      </div>
    </section>
  )
}
