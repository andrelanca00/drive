import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const depoimentos = [
  {
    autor: 'Lucas Santos',
    paragrafos: [
      'Um dos caras mais geniais que eu conheço, o Step Up mudou nossa agência, lancei novos produtos três dias depois, e de 4 colaboradores já somos 27!',
    ],
  },
  {
    autor: 'Júnior Mendes — Renke',
    paragrafos: [
      'Muito obrigado pelo evento. Esse ano eu fui em 11 eventos de marketing, alguns deles nichados no marketing médico, e nenhum deles a entrega foi tão valiosa quanto o Step Up Hands On.',
      'Esse formato de evento foi incrível, parabéns! Realmente abriram as portas de casa e mostraram muito, sensacional!',
    ],
  },
  {
    autor: 'Thiago — THG Marketing Médico',
    paragrafos: [
      'Cara, meu faturamento mudou muito. A gente cresceu algo em torno de 300%, e não estou exagerando, é real.',
      'A primeira vez que participei foi um divisor de águas na minha carreira, na minha vida e na minha agência. Eu acredito que a gente sempre precisa beber da fonte de quem realmente vive aquilo que ensina.',
      'Voltar agora me deu até uma sensação de saudade. E também deu para perceber o quanto a Result amadureceu, evoluiu e conseguiu transmitir isso de forma muito clara, assim como aconteceu na primeira vez.',
      'Foi muito interessante ver a estrutura que vocês construíram, a modernização dos processos, as novas ferramentas e, principalmente, a preocupação com pessoas, equipe e desenvolvimento dos profissionais. Isso mostra exatamente onde devemos investir para crescer de forma consistente.',
      'Quando digo que o Step Up mudou a minha vida, estou falando da minha capacidade de absorver o conteúdo e transformar aquilo em ação. A lição foi entregue, mas eu também tive coragem de aplicar. Isso me amadureceu muito profissionalmente, quebrou diversas crenças limitantes e me deu confiança para enfrentar desafios que antes pareciam maiores do que realmente eram.',
      'Se eu tivesse que indicar o Step Up para alguém, indicaria para colegas de mercado, donos de agência e profissionais que querem construir algo sólido. Nosso mercado está carente de profissionais preparados de verdade.',
      'E, com certeza, se vocês me derem a oportunidade, eu volto trazendo a minha equipe inteira.',
    ],
  },
  {
    autor: 'Yannie',
    paragrafos: [
      'O Step Up não dá para descrever. Você fica sem palavras, você apenas sente, porque aqui você vive.',
    ],
  },
  {
    autor: 'Fiama Ribeiro — Reflexosolutions',
    paragrafos: [
      'Foi extraordinário! Divos acessíveis, queridos e receptivos do começo ao fim! Sentar ao lado de pessoas que estão há mais tempo que a gente e têm mais experiência, não tem preço! Aprendi muito com o time Result, mas também com os colegas que estão há mais tempo no mercado e compartilharam um pouco mais sobre suas experiências com quem tá engatinhando.',
      'Gratidão! E por favor, façam outro!',
    ],
  },
  {
    autor: 'Ana Vitória Campanario',
    paragrafos: [
      'Antes do evento eu tinha expectativas muito altas, e já que eu acompanhava a Result há um tempo, me inspirava, era e continuo sendo muito fã. O que eu tenho pra dizer é que as minhas expectativas foram muito mais do que superadas. Ver todo o time em ação, a entrega de todo mundo, a criatividade, a personalização, tudo isso ali acontecendo na nossa frente e a gente sentindo a experiência Result em cada detalhe da imersão. Eu busquei participar desse evento porque eu queria pensar fora da caixa, trazer estratégias diferentes, um novo olhar para o marketing médico que vai muito além do digital, que é esse universo offline, esse universo da experiência, de encantar o paciente. E eu saí de lá com muito mais que isso. Tenho certeza que a minha confiança aumentou muito mais a minha credibilidade no mercado da minha região também. E estou muito mais feliz, muito mais segura. E o que eu tenho pra dizer pra vocês é que invistam, porque vale cada centavo e vocês vão sair de lá com muito mais do que vocês imaginam.',
    ],
  },
  {
    autor: 'Jeff Feitosa — Agência Gota',
    paragrafos: [
      'Foi, sem dúvidas, um dos melhores investimentos que já fiz: aprendizado de alto nível, trocas incríveis e uma energia muito boa.',
      'Foi um privilégio conhecer tanta gente competente de diferentes lugares e, em especial, o time Result, profissionais de ponta que foram extremamente generosos em nos receber e dividir tanto conhecimento sobre esse mercado lindo e maluco que é a medicina.',
      'Que Deus abençoe a vida e o trabalho de cada um. E, se um dia forem a Campos dos Goytacazes, será um prazer enorme recebê-los por lá.',
    ],
  },
  {
    autor: 'Tamires Marcon',
    paragrafos: [
      '... um dos pontos principais que eu notei uma grande diferença pós Step Up foi na questão da visão da minha agência. Antes, eu via ela PEQUENA, eu via EU FAZENDO TUDO, eu não via grandes crescimentos porque eu NÃO SABIA ONDE IR. E após o Step Up ouvindo e vendo tudo que o pessoal da Result falou, tudo que o André Lança falou, eu vi que eu realmente precisava APRENDER A DELEGAR, eu precisava de uma ESTRUTURA MAIS MADURA, se eu quisesse profissionalizar e realmente ATINGIR O ALTO TICKET, que é o que eu trabalho. Então eu vejo que o que me impulsiona realmente é essa questão do crescimento, é a questão de estruturar, é o profissionalismo. Eu recomendo pra todo mundo que está meio perdido, que não sabe pra onde ir, que não consegue visualizar a agência grande e acha que é impossível. Os meus NÚMEROS pós Step Up AUMENTARAM porque a agência amadureceu assim como eu durante um dia inteiro ouvindo o André Lança falar, absorvi muita coisa, cresci junto. Eu agradeço o André Lança e toda a equipe pela entrega que foi muito sensacional.',
    ],
  },
]

export default function Depoimentos() {
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
      { threshold: 0.1 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [controls])

  const labelV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const titleV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  }

  const stackV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25, delayChildren: 0.5 } },
  }

  const itemV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-preto py-[5rem] text-branco md:py-[12rem]"
    >
      <div className="relative z-10 mx-auto max-w-[78rem] px-[2rem] md:px-[4rem]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={labelV}
          className="flex items-center gap-[0.8rem] font-sans text-[0.7rem] uppercase tracking-[0.35em] text-cobre"
        >
          <span>[</span>
          <span>DEPOIMENTOS</span>
          <span>]</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={titleV}
          className="mt-[2rem] max-w-[55rem] font-lighters text-[2.4rem] md:text-[3.8rem] uppercase leading-[1.05] tracking-[0.02em] text-branco"
        >
          QUEM JÁ ESTEVE <span className="font-vogue text-cobre">COM ANDRÉ</span>.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={stackV}
          className="mt-[5rem] flex flex-col gap-[3rem] md:mt-[7rem] md:gap-[4rem]"
        >
          {depoimentos.map((d, i) => (
            <motion.figure
              key={i}
              variants={itemV}
              className="relative grid grid-cols-1 gap-[2rem] border-t border-cobre/40 pt-[3rem] md:grid-cols-[1fr_3fr] md:gap-[4rem] md:pt-[4rem]"
            >
              <div className="pointer-events-none absolute -top-[2.5rem] right-0 font-lighters text-[7rem] leading-none text-cobre/25 md:-top-[4rem] md:text-[11rem]">
                &ldquo;
              </div>

              <figcaption className="order-2 flex flex-col gap-[0.5rem] md:order-1">
                <span className="block h-px w-[2rem] bg-cobre" />
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-cobre">
                  DEPOIMENTO
                </span>
                <span className="mt-[0.75rem] font-lighters text-[1.4rem] md:text-[1.8rem] uppercase leading-[1.1] tracking-[0.02em] text-branco">
                  {d.autor}
                </span>
              </figcaption>

              <blockquote className="order-1 flex flex-col gap-[1.25rem] md:order-2">
                {d.paragrafos.map((p, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-[1.05rem] md:text-[1.2rem] leading-[1.7] text-branco/85"
                  >
                    {p}
                  </p>
                ))}
              </blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
