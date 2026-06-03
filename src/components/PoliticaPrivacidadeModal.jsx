import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PoliticaPrivacidadeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-preto/90 px-[1rem] py-[3rem] backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative my-auto w-full max-w-[44rem] border border-cobre/40 bg-carvao p-[1.75rem] text-branco shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:p-[2.5rem] md:p-[3rem]"
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
              <span className="block h-px w-[2rem] bg-cobre" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre">
                LGPD · LEI 13.709/2018
              </span>
            </div>

            <h3 className="mt-[1.25rem] font-lighters text-[1.6rem] uppercase leading-[1.1] tracking-[0.02em] text-branco md:text-[2rem]">
              POLÍTICA DE PRIVACIDADE
            </h3>

            <div className="mt-[2rem] flex flex-col gap-[1.5rem] font-sans text-[0.85rem] leading-[1.7] text-branco/85 md:text-[0.9rem]">
              <p>
                Esta página da Drive 2026 — mentoria conduzida por André Lança — coleta e processa dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
              </p>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Dados coletados</p>
                <ul className="mt-[0.5rem] list-disc space-y-[0.4rem] pl-[1.25rem]">
                  <li><strong>Navegação:</strong> cookies, endereço IP, dispositivo, páginas visitadas, tempo de visita — coletados via Meta Pixel para mensuração de campanhas.</li>
                  <li><strong>Aplicação:</strong> nome, e-mail, telefone, contexto profissional — fornecidos voluntariamente por você ao preencher o formulário de inscrição (via Typeform).</li>
                </ul>
              </div>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Finalidades</p>
                <ul className="mt-[0.5rem] list-disc space-y-[0.4rem] pl-[1.25rem]">
                  <li>Avaliar sua aplicação para entrada no programa Drive 2026.</li>
                  <li>Comunicação relacionada ao processo de aplicação e ao programa.</li>
                  <li>Otimização e mensuração de campanhas publicitárias.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Compartilhamento</p>
                <ul className="mt-[0.5rem] list-disc space-y-[0.4rem] pl-[1.25rem]">
                  <li><strong>Typeform</strong> — processamento do formulário (<a href="https://www.typeform.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline decoration-cobre/50 hover:text-branco">privacidade Typeform</a>).</li>
                  <li><strong>Meta/Facebook</strong> — Pixel para mensuração e remarketing (<a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="underline decoration-cobre/50 hover:text-branco">privacidade Meta</a>).</li>
                  <li>Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais não relacionados.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Seus direitos</p>
                <p className="mt-[0.5rem]">
                  Você pode, a qualquer momento, solicitar acesso, correção, eliminação, portabilidade dos seus dados, revogação do consentimento ou informações sobre compartilhamento. Para exercer esses direitos, entre em contato pelo e-mail <a href="mailto:contato@andrelanca.com" className="font-bold text-cobre underline">contato@andrelanca.com</a>.
                </p>
              </div>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Cookies</p>
                <p className="mt-[0.5rem]">
                  Esta página utiliza cookies para mensuração de campanhas. Você pode desabilitá-los nas configurações do seu navegador. A desativação pode afetar a navegação.
                </p>
              </div>

              <div>
                <p className="font-bold uppercase tracking-[0.15em] text-cobre">Alterações</p>
                <p className="mt-[0.5rem]">
                  Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.
                </p>
              </div>

              <p className="text-[0.75rem] text-branco/55">
                Última atualização: junho de 2026.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
