import { Check, X } from 'lucide-react'
import Reveal from './Reveal'


const forItems = [
  'Fatura bem, mas ainda não vê o dinheiro sobrando no final do mês',
  'Já tentou planilhas, aplicativos ou cursos financeiros',
  'Mistura finanças pessoais e empresariais',
  'Tem vergonha ou ansiedade ao olhar os números',
  'Quer organizar as finanças sem perder qualidade de vida',
  'Quer tomar decisões com clareza e confiança',
]

const notForItems = [
  'Busca apenas uma planilha pronta',
  'Não está disponível para autoconhecimento e mudança de comportamento',
  'Busca milagres e soluções rápidas',
]

export default function ForWho() {
  return (
    <section id="para-quem" className="bg-light-alt py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 max-w-4xl md:mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            Para quem é
          </p>
          <h2 className="font-serif text-[2.7rem] leading-[1.04] text-dark md:text-[4.5rem]">
            Clareza para quem quer crescer sem continuar repetindo o mesmo ciclo.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <article className="h-full border border-[rgba(43,108,112,0.24)] bg-light p-7 shadow-[0_24px_80px_rgba(16,32,28,0.06)] md:p-10">
              <h3 className="mb-8 font-serif text-3xl leading-tight text-dark md:text-4xl">
              Esse evento é para você que:
            </h3>
              <ul>
              {forItems.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-t border-divider py-5">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
                    <span className="text-lg leading-relaxed text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            </article>
          </Reveal>

          <Reveal delay={0.15}>
            <article className="h-full border border-divider bg-light p-7 shadow-[0_24px_80px_rgba(16,32,28,0.04)] md:p-10">
              <h3 className="mb-8 font-serif text-3xl leading-tight text-dark md:text-4xl">
              Esse evento não é para você que:
            </h3>
              <ul>
              {notForItems.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-t border-divider py-5">
                    <X className="mt-1 h-5 w-5 shrink-0 text-dark/30" strokeWidth={1.8} />
                    <span className="text-lg leading-relaxed text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
