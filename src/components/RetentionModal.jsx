import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PopupButton } from '@typeform/embed-react'
import { trackRegistration, trackCustom } from '../lib/pixel'

const TYPEFORM_ID = 'bvBLEskP'

export default function RetentionModal({ open, onClose, onCtaClick }) {
  useEffect(() => {
    if (!open) return
    trackCustom('RetentionModalShown', { delay_seconds: 30 })
    const handleKey = e => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  const handleCta = () => {
    if (onCtaClick) onCtaClick()
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-preto/85 px-[1.25rem] backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-[42rem] overflow-hidden border border-marsala/50 bg-carvao p-[1.75rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:p-[2.5rem] md:p-[3.5rem]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-[1rem] top-[1rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center text-branco/60 transition-colors duration-200 hover:text-branco md:right-[1.25rem] md:top-[1.25rem]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center gap-[0.8rem]">
              <span className="block h-px w-[2rem] bg-marsala" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-marsala">
                UMA PALAVRA
              </span>
            </div>

            <h3 className="mt-[1.5rem] font-lighters text-[1.6rem] uppercase leading-[1.15] tracking-[0.02em] text-branco md:text-[2.1rem]">
              Eu queria te dizer <span className="font-vogue text-marsala">uma coisa</span>.
            </h3>

            <p className="mt-[1.75rem] font-serif text-[0.95rem] leading-[1.7] text-branco/85 md:text-[1.05rem]">
              Em um ano como esse, com tudo o que mudou no mercado, dar um passo como o da Drive é uma decisão de quem está pensando além do óbvio. A maioria está esperando o cenário melhorar. Quem se move agora chega no próximo nível antes dos outros.
            </p>

            <div className="mt-[2rem] h-px w-full bg-marsala/30" />

            <div className="mt-[2rem] flex flex-col items-center gap-[1rem] sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onClose}
                className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-branco/50 transition-colors duration-200 hover:text-branco/80"
              >
                AGORA NÃO
              </button>

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(165,49,72,0.7)',
                    '0 0 0 14px rgba(165,49,72,0)',
                    '0 0 0 0 rgba(165,49,72,0)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <PopupButton
                  id={TYPEFORM_ID}
                  size={85}
                  onClick={handleCta}
                  onSubmit={trackRegistration}
                  style={{ backgroundColor: '#A53148', color: '#FAFAF7', border: 'none' }}
                  className="cursor-pointer px-[1.75rem] py-[1.1rem] font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] shadow-[0_14px_40px_rgba(165,49,72,0.6)] sm:px-[2.5rem] sm:text-[0.85rem] sm:tracking-[0.25em] md:text-[0.9rem]"
                >
                  INSCREVA-SE PARA A DRIVE 2026
                </PopupButton>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
