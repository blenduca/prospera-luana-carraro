import Reveal from './Reveal'

const testimonials = [
  {
    name: 'Bruna Gomes',
    highlight: 'divisor de águas na minha vida — controle emocional e financeiro ao mesmo tempo.',
    text: 'Foi uma experiência transformadora. A Lu me fez ter controle emocional e financeiro. Me mostrou que posso ter uma vida controlada e feliz ao mesmo tempo. Tinha zero conhecimento de como tratar o meu dinheiro e hoje consigo me planejar para fazer exatamente tudo.',
  },
  {
    name: 'Aldine Muller',
    highlight: 'Me mostrou que posso ter controle sobre minhas finanças.',
    text: 'Muito aprendizado. Luana, você me fez enxergar muitas coisas que antes eu não conseguia ver. Com disciplina e planejamento tudo pode ser feito. Você foi essencial na minha vida.',
  },
  {
    name: 'Cassiana Ogg dos Santos',
    highlight: 'Meus sonhos se tornaram metas e estou prestes a alcançá-las.',
    text: 'A Luana mudou completamente a minha visão sobre dinheiro. A partir de sua mentoria entendo minhas necessidades e consigo me organizar financeiramente, mesmo com imprevistos.',
  },
  {
    name: 'Gisah Barreto',
    highlight: 'Quando achei que não tinha mais saída, ela me mostrou um caminho.',
    text: 'A Luana foi um divisor de águas para minha vida. Sou extremamente grata por toda dedicação, compromisso, paciência e ensinamentos.',
  },
  {
    name: 'Iane Abreu',
    highlight: 'Organização financeira traz tranquilidade.',
    text: 'Sempre me incomodou não ser organizada financeiramente. Fiz a mentoria e hoje sei exatamente quanto entra, quanto sai, consigo juntar dinheiro e separar empresa de vida pessoal.',
  },
  {
    name: 'Ellen Araujo',
    highlight: 'Além dos resultados, ela me ensinou como organizar, poupar e realizar metas.',
    text: 'Realizei a mentoria financeira para pessoa física e empresa com a Luana e amei. Os resultados foram significativos e a experiência valeu muito a pena.',
  },
  {
    name: 'Luiza Azzolini Lopes',
    highlight: 'Você termina sabendo exatamente o que precisa fazer.',
    text: 'Hoje sou muito mais consciente financeiramente. Tudo é tratado de forma leve e clara. Vale muito a pena essa experiência.',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Avaliação 5 estrelas no Google">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-[#FBBC04]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-body/50">
        Google
      </span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-light py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="font-serif text-[2.6rem] leading-[1.05] text-dark md:text-[4.25rem]">
            O que dizem quem já viveu a transformação
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-body md:justify-self-end">
            Resultados reais de quem passou pela mentoria de Luana Carraro e transformou a relação com o próprio dinheiro.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-divider bg-white p-7 shadow-[0_8px_32px_rgba(16,32,28,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(16,32,28,0.08)] md:p-8">
                <Stars />

                <p className="mt-5 font-serif text-xl italic leading-snug text-dark md:text-2xl">
                  "{t.highlight}"
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-body md:text-base">
                  {t.text}
                </p>

                <div className="mt-6 border-t border-divider pt-5">
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-body/50">
                    Participante do Prospera
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
