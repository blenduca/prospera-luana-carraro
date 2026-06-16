import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  {
    q: 'Para quem não é profissional liberal ou empreendedor, o evento serve?',
    a: 'O evento é voltado principalmente para profissionais liberais e empreendedores, mas qualquer pessoa que deseje transformar sua relação com o dinheiro é bem-vinda.',
  },
  {
    q: 'Vou sair do evento com uma planilha ou método para aplicar?',
    a: 'Você sairá com ferramentas práticas e, mais importante, com clareza sobre os padrões comportamentais que precisam mudar para que qualquer ferramenta funcione.',
  },
  {
    q: 'Preciso levar algum material?',
    a: 'Não é necessário. Todo o material será fornecido no local.',
  },
  {
    q: 'O evento é só para mulheres?',
    a: 'Não. O evento é para todas as pessoas que desejam transformar sua relação com o dinheiro, independente de gênero.',
  },
  {
    q: 'Como funciona o reembolso em caso de impossibilidade de participar?',
    a: 'Entre em contato conosco pelo e-mail informado. Avaliamos cada caso individualmente para encontrar a melhor solução.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  function toggle(i: number) {
    setOpen(open === i ? null : i)
  }

  return (
    <section className="bg-light-alt py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            FAQ
          </p>
          <h2 className="font-serif text-[2.6rem] leading-[1.05] text-dark md:text-[4.25rem]">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-divider bg-light shadow-[0_24px_80px_rgba(16,32,28,0.05)]">
            {items.map(({ q, a }, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={i < items.length - 1 ? 'border-b border-divider' : ''}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-6 text-left transition hover:bg-light-alt md:px-8 md:py-7"
                  >
                    <span className="text-lg font-medium leading-snug text-dark md:text-xl">
                      {q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden px-5 transition-all duration-300 ease-in-out md:px-8 ${
                      isOpen ? 'max-h-96 pb-7' : 'max-h-0'
                    }`}
                  >
                    <p className="max-w-3xl text-base leading-relaxed text-body md:text-lg">
                      {a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
