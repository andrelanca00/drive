import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { PopupButton } from '@typeform/embed-react'
import logoGrande from './assets/logo/logo-2-branco.svg'
import andreHero from './assets/images/andre-close-retrato-colorido.jpg'
import andreHeroSm from './assets/images/andre-close-retrato-colorido-sm.jpg'
import QuemConduz from './components/QuemConduz'
import Revelacao from './components/Revelacao'
import Boards from './components/Boards'
import TemasComAndre from './components/TemasComAndre'
import CincoPilares from './components/CincoPilares'
import ComoAcontece from './components/ComoAcontece'
import Modalidades from './components/Modalidades'
import Depoimentos from './components/Depoimentos'
import FaleComIsa from './components/FaleComIsa'
import Aplicacao from './components/Aplicacao'
import RetentionModal from './components/RetentionModal'
import CtaInline from './components/CtaInline'
import PoliticaPrivacidadeModal from './components/PoliticaPrivacidadeModal'
import WhatsAppFloat from './components/WhatsAppFloat'
import { trackLead, trackRegistration } from './lib/pixel'

const TYPEFORM_ID = 'bvBLEskP'

function App() {
  const [showLogo, setShowLogo] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)
  const [showApplyButton, setShowApplyButton] = useState(false)
  const [userActed, setUserActed] = useState(false)
  const [showRetention, setShowRetention] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleInscrevaClick = (source = 'unknown') => {
    setUserActed(true)
    trackLead(typeof source === 'string' ? source : 'unknown')
  }
  const closeRetention = () => setShowRetention(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 70, damping: 18, mass: 0.8 })
  const springY = useSpring(mouseY, { stiffness: 70, damping: 18, mass: 0.8 })
  const logoX = useTransform(springX, [-1, 1], [-18, 18])
  const logoY = useTransform(springY, [-1, 1], [-12, 12])
  const logoRotate = useTransform(springX, [-1, 1], [-1.5, 1.5])

  const { scrollY } = useScroll()
  const heroLogoOpacity = useTransform(scrollY, [0, 500], [0.14, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.94])
  const heroBlur = useTransform(scrollY, [0, 500], [0, 4])
  const heroFilter = useTransform(heroBlur, b => `blur(${b}px)`)

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 100)
    const labelTimer = setTimeout(() => setShowLabel(true), 700)
    const dateTimer = setTimeout(() => setShowDate(true), 1200)
    const indicatorTimer = setTimeout(() => setShowIndicator(true), 3000)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(labelTimer)
      clearTimeout(dateTimer)
      clearTimeout(indicatorTimer)
    }
  }, [])

  useEffect(() => {
    const handleMove = e => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleScroll = () => {
      setShowApplyButton(window.scrollY > window.innerHeight * 0.8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (userActed) return
    const timer = setTimeout(() => {
      setShowRetention(prev => (userActed ? prev : true))
    }, 30000)
    return () => clearTimeout(timer)
  }, [userActed])

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-preto text-branco">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: [
            '0 0 0 0 rgba(165,49,72,0.7)',
            '0 0 0 16px rgba(165,49,72,0)',
            '0 0 0 0 rgba(165,49,72,0)',
          ],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1.5, ease: 'easeOut' },
          y: { duration: 0.8, delay: 1.5, ease: 'easeOut' },
          boxShadow: { duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 2 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="fixed right-4 top-6 z-50 pointer-events-auto sm:right-6 sm:top-8"
      >
        <PopupButton
          id={TYPEFORM_ID}
          size={85}
          onClick={() => handleInscrevaClick('floating-button')}
          onSubmit={trackRegistration}
          style={{ backgroundColor: '#A53148', color: '#FAFAF7', border: 'none' }}
          className="cursor-pointer px-[1.5rem] py-[0.9rem] font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] shadow-[0_12px_36px_rgba(165,49,72,0.65)] sm:px-[2rem] sm:py-[1rem] sm:text-[0.85rem] sm:tracking-[0.25em]"
        >
          INSCREVA-SE
        </PopupButton>
      </motion.div>

      <section className="relative flex min-h-screen w-full items-stretch overflow-hidden bg-preto">
        <img
          src={andreHero}
          srcSet={`${andreHeroSm} 800w, ${andreHero} 1600w`}
          sizes="100vw"
          alt="André Lança"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-60 md:opacity-75"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-preto via-preto/80 to-preto/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-preto via-preto/30 to-preto/50" />

        <motion.img
          src={logoGrande}
          alt=""
          aria-hidden="true"
          style={{ opacity: heroLogoOpacity, scale: heroScale, filter: heroFilter, x: logoX, y: logoY, rotate: logoRotate }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-auto w-[60vw] max-w-[26rem] -translate-x-1/2 -translate-y-1/2 select-none sm:w-[50vw] sm:max-w-[36rem] md:w-[42vw] md:max-w-[48rem]"
        />

        <div
          className={`pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-[0.7rem] font-sans uppercase tracking-[0.5em] text-branco/40 transition-opacity duration-1000 md:block ${
            showLabel ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ writingMode: 'vertical-rl' }}
        >
          MENTORIA ANDRÉ LANÇA · 2026
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[80rem] flex-col justify-between px-[1.5rem] py-[5rem] md:px-[4rem] md:py-[5rem]">
          <div className={`transition-all duration-[1500ms] ease-out ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <img src={logoGrande} alt="Drive" className="h-auto w-[7rem] md:w-[10rem]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: showLogo ? 1 : 0, y: showLogo ? 0 : 24 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="my-auto flex flex-col items-start gap-[2rem] py-[3rem] md:gap-[2.5rem]"
          >
            <h1
              style={{
                fontFamily: '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Roboto", system-ui, sans-serif',
                fontWeight: 200,
                letterSpacing: '0.04em',
                textShadow: '0 2px 24px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)',
              }}
              className="max-w-[52rem] text-[1.8rem] uppercase leading-[1.15] text-branco sm:text-[2.4rem] md:text-[3rem] lg:text-[3.4rem]"
            >
              O <span style={{ fontFamily: '"classyvogue", Georgia, serif', fontWeight: 400, letterSpacing: '0.02em' }} className="text-marsala">PRÓXIMO NÍVEL</span> DA SUA AGÊNCIA. SEIS MESES COM <span style={{ fontFamily: '"classyvogue", Georgia, serif', fontWeight: 400, letterSpacing: '0.02em' }} className="text-marsala">ANDRÉ LANÇA</span>.
            </h1>

            <div className="flex flex-col items-start gap-[1rem] sm:flex-row sm:items-center sm:gap-[1.5rem]">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(165,49,72,0.7)',
                    '0 0 0 18px rgba(165,49,72,0)',
                    '0 0 0 0 rgba(165,49,72,0)',
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 2 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <PopupButton
                  id={TYPEFORM_ID}
                  size={85}
                  onClick={() => handleInscrevaClick('hero')}
                  onSubmit={trackRegistration}
                  style={{ backgroundColor: '#A53148', color: '#FAFAF7', border: 'none' }}
                  className="cursor-pointer px-[1.75rem] py-[1.1rem] font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] shadow-[0_14px_40px_rgba(165,49,72,0.6)] sm:px-[2.5rem] sm:py-[1.25rem] sm:text-[0.9rem] sm:tracking-[0.25em]"
                >
                  INSCREVA-SE PARA A DRIVE 2026
                </PopupButton>
              </motion.div>

              <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-branco/55">
                JULHO A DEZEMBRO 2026
              </span>
            </div>
          </motion.div>
        </div>

        <div
          className={`pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ease-out ${
            showIndicator ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="scroll-indicator mx-auto h-10 w-px bg-branco/40" />
        </div>
      </section>

      <QuemConduz />

      <CtaInline
        rotulo="PRÓXIMA TURMA"
        titulo="JULHO A DEZEMBRO DE 2026."
        destaque="VAGAS LIMITADAS."
        onClick={() => handleInscrevaClick('cta-pos-quemconduz')}
      />

      <Revelacao />
      <Boards />
      <TemasComAndre />
      <CincoPilares />
      <ComoAcontece />
      <Modalidades />
      <FaleComIsa />
      <Depoimentos />

      <Aplicacao
        onInscrevaClick={() => handleInscrevaClick('aplicacao')}
        onOpenPrivacy={() => setShowPrivacy(true)}
      />

      <RetentionModal
        open={showRetention}
        onClose={closeRetention}
        onCtaClick={() => handleInscrevaClick('retention-modal')}
      />

      <PoliticaPrivacidadeModal
        open={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />

      <WhatsAppFloat />
    </main>
  )
}

export default App
