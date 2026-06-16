import { CalendarDays, Clock, MapPin, Building2, Users } from 'lucide-react'
import Reveal from './Reveal'

const info = [
  { icon: CalendarDays, label: 'Data', value: '29 de agosto' },
  { icon: Clock, label: 'Horário', value: '8h30 às 18h' },
  { icon: MapPin, label: 'Local', value: 'Requinte Convention Center' },
  { icon: Building2, label: 'Cidade', value: 'Chapecó' },
  { icon: Users, label: 'Vagas', value: 'Vagas limitadas', highlight: true },
]

export default function AboutEvent() {
  return (
    <section className="fine-grid bg-light-alt py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_420px] md:items-start md:gap-20">
          <div>
            <Reveal>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                O que é o evento
              </p>
              <h2 className="mb-10 max-w-4xl font-serif text-[2.6rem] leading-[1.05] text-dark md:text-[4.2rem]">
                Uma imersão presencial para entender a raiz do seu
                comportamento financeiro.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-7 max-w-3xl text-lg leading-relaxed text-body md:text-xl">
                O Evento Prospera é uma imersão presencial de um dia inteiro,
                das 8h30 às 18h, criada para profissionais que faturam bem,
                trabalham com propósito — e ainda sentem que o dinheiro escapa
                sem explicação.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mb-7 max-w-3xl text-lg leading-relaxed text-body md:text-xl">
                Não é mais uma palestra, nem um curso de finanças. É uma experiência que une autoconhecimento, comportamento financeiro e estratégia, com a profundidade que seu negócio precisa e a assertividade que você sempre quis.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-3xl text-lg leading-relaxed text-body md:text-xl">
                Aqui você não vai aprender apenas a fazer planilha. Você vai entender o que vai além dos números, como seus hábitos, comportamentos e mentalidade afetam diretamente no seu resultado financeiro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <aside className="border border-[rgba(16,32,28,0.1)] bg-light p-8 shadow-[0_30px_90px_rgba(16,32,28,0.08)] md:sticky md:top-28 md:p-10">
              <p className="mb-7 font-serif text-3xl leading-tight text-dark">
                Um dia inteiro para parar de tratar dinheiro como improviso.
              </p>
              {info.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 py-5${
                    i < info.length - 1 ? ' border-b border-divider' : ''
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-divider bg-light-alt">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-body/60">
                      {item.label}
                    </p>
                    <p
                      className={`text-lg ${
                        item.highlight
                          ? 'font-semibold text-primary'
                          : 'font-medium text-dark'
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
