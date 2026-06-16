import Reveal from './Reveal'

const items = [
  { time: '08h30', title: 'Chegada e café de conexão' },
  { time: '09h00', title: 'A mente que sabota o bolso' },
  { time: '11h15', title: 'Vender sem culpa' },
  { time: '12h15', title: 'Almoço' },
  { time: '13h15', title: 'IA para Negócios e Finanças' },
  { time: '14h15', title: 'O dinheiro que você não vê' },
  { time: '15h45', title: 'Vozes do Prospera' },
  { time: '16h30', title: 'Encerramento' },
  { time: '17h15', title: 'Networking e café' },
]

export default function Timeline() {
  return (
    <section id="programacao" className="bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 grid gap-7 md:mb-20 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-light">
              Programação
            </p>
            <h2 className="font-serif text-[2.8rem] leading-[1.02] text-white md:text-[4.6rem]">
            Como vai ser o dia
          </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/85 md:justify-self-end">
            Uma jornada presencial com ritmo, pausas e conversas pensadas para
            transformar percepção em decisão.
          </p>
        </Reveal>

        <div className="border-y border-divider-light">
          {items.map((item, i) => {
            const isLast = i === items.length - 1

            return (
              <Reveal key={item.time} delay={0.06 * i}>
                <div
                  className={`grid gap-3 py-7 md:grid-cols-[180px_1fr] md:items-baseline md:py-9 ${
                    isLast ? '' : 'border-b border-divider-light'
                  }`}
                >
                  <span className="font-serif text-4xl leading-none text-light md:text-5xl">
                    {item.time}
                  </span>
                  <span className="text-xl font-medium leading-snug text-white md:text-2xl">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
