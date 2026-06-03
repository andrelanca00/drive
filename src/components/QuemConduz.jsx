import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import andreRetrato from '../assets/images/andre-retrato-peb.jpg'
import andreRetratoSm from '../assets/images/andre-retrato-peb-sm.jpg'

const paragrafos = [
  'André conduz a Result, maior agência de marketing médico do Brasil há anos. Construiu negócios além dela. Uma indústria farmacêutica de manipulação. Participações no mercado internacional. Mais de cento e vinte agências passaram pelo método dele no Step Up.',
  'Nos últimos anos, alguns dos clientes que procuram André chegam de outros segmentos. Indústria, construção, rebranding de marcas que estão sendo reposicionadas no Brasil inteiro. Empresários que pagam um ticket diferente porque procuram outra coisa. O nome de André hoje carrega o tipo de peso que abre essas portas.',
  'Na Drive, ele abre como esse movimento foi construído por dentro. Marca pessoal e precificação. Operação, gestão e cultura. Leitura de mercado, novos produtos e o que a IA está fazendo com o mercado. Tudo o que decide se uma agência continua crescendo ou trava.',
]

export default function QuemConduz() {
  const sectionRef = useRef(null)
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], isMobile ? [-20, 20] : [-60, 60])

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
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [controls])

  const photoV = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: 'easeOut' } },
  }

  const overlayV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' } },
  }

  const bracketLabelV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' } },
  }

  const paragrafosStaggerV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 1 } },
  }

  const paragrafoV = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-preto text-branco"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={photoV}
          className="relative md:col-span-7 md:min-h-screen"
        >
          <motion.div style={{ y: photoY }} className="relative h-[70vh] w-full md:h-full">
            <img
              src={andreRetrato}
              srcSet={`${andreRetratoSm} 800w, ${andreRetrato} 1600w`}
              sizes="(max-width: 768px) 100vw, 58vw"
              alt="André Lança"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-preto/40 via-preto/20 to-preto/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-preto via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={overlayV}
            className="absolute inset-x-0 bottom-0 px-[2rem] pb-[3rem] md:px-[4rem] md:pb-[5rem]"
          >
            <div className="mb-[1.5rem] flex items-center gap-[1rem]">
              <span className="block h-px w-[2rem] bg-cobre" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-branco/80">
                ANDRÉ LANÇA
              </span>
            </div>
            <h2 className="max-w-[34rem] font-serif text-[1.8rem] md:text-[2.6rem] uppercase leading-[1.1] tracking-[0.03em] text-branco">
              A DRIVE TRABALHA O QUE <span className="font-vogue text-cobre">SUSTENTA</span> O PRÓXIMO NÍVEL DE UMA AGÊNCIA MADURA.
            </h2>
          </motion.div>
        </motion.div>

        <div className="relative flex flex-col justify-center px-[2rem] py-[5rem] md:col-span-5 md:px-[4rem] md:py-[8rem]">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={bracketLabelV}
            className="mb-[2.5rem] flex items-center gap-[0.6rem] font-sans text-[0.75rem] uppercase tracking-[0.3em] text-cobre"
          >
            <span>[</span>
            <span>QUEM CONDUZ</span>
            <span>]</span>
          </motion.div>

          <motion.h3
            initial="hidden"
            animate={controls}
            variants={overlayV}
            className="font-lighters text-[2.8rem] md:text-[3.4rem] uppercase leading-[1.05] tracking-[0.02em] text-branco"
          >
            ANDRÉ<br />LANÇA
          </motion.h3>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={bracketLabelV}
            className="mt-[3rem] flex items-center gap-[1rem]"
          >
            <span className="block h-px w-[1.5rem] bg-cobre" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-branco/70">
              TRAJETÓRIA
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={paragrafosStaggerV}
            className="mt-[2rem] flex flex-col gap-[1.5rem]"
          >
            {paragrafos.map((p, i) => (
              <motion.p
                key={i}
                variants={paragrafoV}
                className="font-sans text-[0.9rem] md:text-[0.95rem] leading-[1.7] tracking-[0.01em] text-branco/85"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[6rem] -translate-x-1/2 bg-cobre/60" />
    </section>
  )
}
