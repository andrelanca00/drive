// Meta Pixel helpers — eventos disparados via window.fbq que é injetado em index.html.
// Se o Pixel ainda não estiver carregado (ad blocker, primeira interação), os calls são silenciosos.

const safeFbq = (...args) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq(...args)
    } catch (e) {
      // ignorar erros de Pixel (não pode quebrar a página)
    }
  }
}

export const trackLead = (source = 'unknown') => {
  safeFbq('track', 'Lead', {
    content_name: 'Drive 2026',
    content_category: 'Mentoria',
    source,
  })
}

export const trackRegistration = () => {
  safeFbq('track', 'CompleteRegistration', {
    content_name: 'Drive 2026',
    status: 'submitted',
  })
}

export const trackViewContent = name => {
  safeFbq('track', 'ViewContent', { content_name: name })
}

export const trackCustom = (event, params = {}) => {
  safeFbq('trackCustom', event, params)
}
