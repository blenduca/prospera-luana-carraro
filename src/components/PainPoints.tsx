import Reveal from './Reveal'

const pains = [
  'Ganho bem, mas não sei para onde vai meu dinheiro.',
  'Confundo minha conta pessoal com o CNPJ — e tenho vergonha de admitir isso.',
  'Já tentei planilhas, cursos e aplicativos, mas nunca consigo aplicar.',
  'Sou ótima em ajudar os outros, porém me sinto uma fraude comigo mesma quando o assunto é dinheiro.',
  'Não quero me tornar refém de números. Quero leveza, não controle por obrigação.',
]

export default function PainPoints() {
  return (
    <section id="evento" className="bg-light py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              A dor que quase ninguém vê
            </p>
            <h2 className="max-w-[560px] font-serif text-[2.8rem] leading-[1.04] text-dark md:text-[4.5rem]">
              Talvez você já tenha percebido que faturar bem não significa ter
              clareza financeira.
            </h2>
          </Reveal>

          <div className="border-y border-divider">
            {pains.map((pain, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div
                  className={`grid gap-5 py-7 md:grid-cols-[72px_1fr] md:py-9 ${
                    i < pains.length - 1 ? ' border-b border-divider' : ''
                  }`}
                >
                  <span className="font-serif text-3xl leading-none text-secondary md:text-4xl">
                    0{i + 1}
                  </span>
                  <p className="text-xl italic leading-relaxed text-dark md:text-2xl">
                    {pain}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-4xl border-l border-primary pl-6 text-xl leading-relaxed text-dark-alt md:ml-[42%] md:mt-24 md:text-2xl">
            Então o Evento Prospera foi feito para você. Não porque você tem um
            problema financeiro - mas porque existe uma relação com o dinheiro
            que ainda não foi trabalhada. E isso custa mais do que qualquer conta
            mal fechada.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
