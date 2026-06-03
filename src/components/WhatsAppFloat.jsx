import { motion } from 'framer-motion'
import { trackCustom } from '../lib/pixel'

const WHATSAPP_URL =
  'https://wa.me/5544991844853?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20mentoria%20Drive.'

export default function WhatsAppFloat() {
  const handleClick = () => {
    trackCustom('WhatsAppClick', { source: 'floating-icon' })
  }

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        boxShadow: [
          '0 0 0 0 rgba(37,211,102,0.45)',
          '0 0 0 14px rgba(37,211,102,0)',
          '0 0 0 0 rgba(37,211,102,0)',
        ],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 2 },
        scale: { duration: 0.6, delay: 2 },
        y: { duration: 0.6, delay: 2 },
        boxShadow: { duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 3 },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{ backgroundColor: '#25D366' }}
      className="fixed bottom-5 right-4 z-50 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] sm:bottom-6 sm:right-6 sm:h-[4rem] sm:w-[4rem]"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="sm:h-[32px] sm:w-[32px]"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.54 1.74 6.52L3 29l6.66-1.74A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.7c-2.04 0-4.04-.55-5.79-1.59l-.42-.25-3.95 1.03 1.05-3.85-.27-.42A10.7 10.7 0 1 1 16 26.7Zm5.86-8a18.7 18.7 0 0 1-1.74-.86c-.23-.08-.4-.13-.57.13-.17.26-.66.86-.81 1.03-.15.17-.3.19-.55.06a8.74 8.74 0 0 1-2.57-1.59 9.66 9.66 0 0 1-1.78-2.22c-.19-.32-.02-.5.14-.66.14-.14.32-.36.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.17-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.43h-.49a.94.94 0 0 0-.68.32 2.84 2.84 0 0 0-.9 2.13c0 1.26.92 2.47 1.05 2.64.13.17 1.81 2.77 4.4 3.88a14.96 14.96 0 0 0 1.46.54c.61.2 1.17.17 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.2-.05-.1-.21-.17-.45-.29Z"
          fill="#FAFAF7"
        />
      </svg>
    </motion.a>
  )
}
