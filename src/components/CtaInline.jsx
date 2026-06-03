import { motion } from 'framer-motion'
import { PopupButton } from '@typeform/embed-react'
import { trackRegistration } from '../lib/pixel'

const TYPEFORM_ID = 'bvBLEskP'

export default function CtaInline({ rotulo, titulo, destaque, source, onClick, variante = 'preto' }) {
  const isLight = variante === 'branco'
  const bg = isLight ? 'bg-branco' : 'bg-preto'
  const fg = isLight ? 'text-preto' : 'text-branco'
  const borderTone = isLight ? 'border-preto/10' : 'border-branco/15'

  return (
    <section className={`relative w-full overflow-hidden ${bg} ${fg} py-[3.5rem] md:py-[5rem]`}>
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marsala/60 to-transparent`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-marsala/60 to-transparent`} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-[78rem] flex-col items-start gap-[2rem] px-[1.5rem] md:flex-row md:items-center md:justify-between md:gap-[3rem] md:px-[4rem]"
      >
        <div className="flex flex-col gap-[0.85rem]">
          <div className="flex items-center gap-[0.8rem]">
            <span className="block h-px w-[1.75rem] bg-marsala" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-marsala md:text-[0.7rem]">
              {rotulo}
            </span>
          </div>
          <h3 className={`max-w-[44rem] font-lighters text-[1.6rem] uppercase leading-[1.1] tracking-[0.01em] sm:text-[2rem] md:text-[2.4rem]`}>
            {titulo}
            {destaque && (
              <>
                {' '}
                <span className="font-vogue text-marsala">{destaque}</span>
              </>
            )}
          </h3>
        </div>

        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(165,49,72,0.55)',
              '0 0 0 14px rgba(165,49,72,0)',
              '0 0 0 0 rgba(165,49,72,0)',
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 self-start md:self-auto"
        >
          <PopupButton
            id={TYPEFORM_ID}
            size={85}
            onClick={onClick}
            onSubmit={trackRegistration}
            style={{ backgroundColor: '#A53148', color: '#FAFAF7', border: 'none' }}
            className="cursor-pointer whitespace-nowrap px-[1.75rem] py-[1.1rem] font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] shadow-[0_14px_40px_rgba(165,49,72,0.55)] sm:px-[2.5rem] sm:py-[1.2rem] sm:text-[0.85rem] sm:tracking-[0.25em]"
          >
            INSCREVA-SE PARA A DRIVE 2026
          </PopupButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
