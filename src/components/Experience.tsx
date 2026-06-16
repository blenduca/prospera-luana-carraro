import { Brain, BadgeDollarSign, Cpu, Eye, MessageCircle, Target } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  {
    icon: Brain,
    title: 'Entender a mente que sabota o bolso',
    description:
      'Mapear vieses cognitivos, gatilhos emocionais e padrões herdados que moldam suas decisões financeiras.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Aprender a vender sem culpa',
    description:
      'Entender como o quanto você cobra está ligado ao quanto você se valoriza.',
  },
  {
    icon: Cpu,
    title: 'Entender como a Inteligência Artificial afeta seu negócio e suas finanças',
    description:
      'Ver como a IA pode otimizar seu negócio e apoiar decisões financeiras.',
  },
  {
    icon: Eye,
    title: 'Identificar os hábitos invisíveis que travam seu crescimento',
    description:
      'Reconhecer padrões que impedem clareza financeira, mesmo com faturamento crescente.',
  },
  {
    icon: MessageCircle,
    title: 'Ouvir histórias reais de quem virou o jogo',
    description: 'Painel com mentorados do Programa Prospera.',
  },
  {
    icon: Target,
    title: 'Sair com clareza do próximo passo',
    description: 'Sair com uma decisão clara sobre o que precisa mudar.',
  },
]

export default function Experience() {
  return (
    <section className="bg-light py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            O que você vai vivenciar
          </p>
          <h2 className="font-serif text-[2.5rem] leading-[1.05] text-dark md:text-[4.25rem]">
            Ao longo do dia, você vai atravessar os pontos que realmente
            sustentam a sua vida financeira.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <article className="h-full border border-divider bg-light-alt p-7 shadow-[0_18px_60px_rgba(16,32,28,0.04)] transition hover:-translate-y-1 hover:border-[rgba(43,108,112,0.35)] md:p-8">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-divider bg-light">
                  <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-serif text-2xl leading-tight text-dark">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-body">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
