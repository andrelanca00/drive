import { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import logoDrive from '../assets/logo/logo-drive.svg'

const territorios = [
  {
    numero: '01',
    titulo: 'Marca pessoal e precificação.',
  },
  {
    numero: '02',
    titulo: 'Operação, gestão e cultura.',
  },
  {
    numero: '03',
    titulo: 'Leitura de mercado, novos produtos e IA.',
  },
]

export default function Revelacao() {
  const sectionRef = useRef(null)
  const controls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const logoY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05])

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

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const titleV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: 'easeOut' } },
  }

  const lineV = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.1, delay: 0.5, ease: 'easeOut' } },
  }

  const bodyV = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.7, ease: 'easeOut' } },
  }

  const territoriosStaggerV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } },
  }

  const territorioV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const quoteV = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.6, ease: 'easeOut' } },
  }

  const logoWatermarkV = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.13, transition: { duration: 2 } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-branco py-[5rem] text-preto md:py-[14rem]"
    >
      <motion.img
        initial="hidden"
        animate={controls}
        variants={logoWatermarkV}
        style={{ y: logoY, scale: logoScale }}
        src={logoDrive}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2 select-none md:w-[100vw]"
      />

      <div
        className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 font-sans text-[0.7rem] uppercase tracking-[0.5em] text-preto/40 md:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        O QUE É A DRIVE
      </div>

      <div className="relative z-10 mx-auto max-w-[80rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[1rem] font-sans text-[0.7rem] uppercase tracking-[0.4em] text-cobre"
        >
          <span className="block h-px w-[2rem] bg-cobre" />
          <span>CAPÍTULO 01</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[1.5rem] font-lighters text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] uppercase leading-[1] tracking-[-0.01em] text-preto"
        >
          <span className="text-cobre">[</span> O QUE É A <span className="font-vogue text-cobre">DRIVE</span> <span className="text-cobre">]</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={lineV}
          style={{ originX: 0 }}
          className="mt-[3rem] h-px w-full bg-preto/20"
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={bodyV}
          className="mt-[4rem] grid grid-cols-1 gap-[3rem] md:grid-cols-[1fr_1fr] md:gap-[5rem]"
        >
          <div className="max-w-[34rem]">
            <p className="font-sans text-[1rem] md:text-[1.05rem] leading-[1.85] tracking-[0.005em] text-preto/85">
              Drive é um programa de <span className="font-vogue text-[1.15rem] md:text-[1.2rem] text-cobre">seis meses</span> onde André senta com um grupo selecionado de donos de agência e abre o processo por trás das decisões que constroem o próximo nível.
            </p>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex items-center gap-[1rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre">
              <span className="block h-px w-[1.5rem] bg-cobre" />
              <span>OS TRÊS TERRITÓRIOS</span>
            </div>

            <motion.ul
              initial="hidden"
              animate={controls}
              variants={territoriosStaggerV}
              className="flex flex-col gap-[0.5rem]"
            >
              {territorios.map(t => (
                <motion.li
                  key={t.numero}
                  variants={territorioV}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group grid grid-cols-[3.5rem_1fr] items-center gap-[1.25rem] border-b border-preto/15 py-[1.25rem] transition-colors duration-300 hover:border-cobre"
                >
                  <span className="font-lighters text-[2.2rem] leading-none text-cobre">
                    {t.numero}
                  </span>
                  <span className="font-sans text-[1rem] md:text-[1.05rem] leading-[1.4] text-preto">
                    {t.titulo}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={quoteV}
          className="relative mt-[6rem] overflow-hidden border-l-[4px] border-cobre bg-preto p-[2.5rem] md:mt-[8rem] md:p-[4rem]"
        >
          <div className="pointer-events-none absolute -right-[3rem] -top-[5rem] font-lighters text-[14rem] leading-none text-cobre/15 md:-right-[2rem] md:text-[20rem]">
            &ldquo;
          </div>
          <p className="relative z-10 max-w-[52rem] font-serif text-[1.15rem] md:text-[1.4rem] leading-[1.55] tracking-[0.01em] text-branco">
            Drive funciona em <span className="font-vogue text-cobre">sala fechada</span>. Quem entra senta ao lado de outros donos de agência que estão construindo o próximo capítulo do próprio negócio, com André conduzindo a sala e dois conselheiros entrando em momentos específicos do programa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
