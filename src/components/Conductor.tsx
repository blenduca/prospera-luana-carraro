import { useState } from 'react'
import Reveal from './Reveal'

const stats = [
  { value: '+5 anos', label: 'atuando na área' },
  { value: '300+', label: 'pessoas atendidas' },
  { value: '', label: 'Finanças comportamentais' },
]

export default function Conductor() {
  const [imgError, setImgError] = useState(false)
  const assetBase = import.meta.env.BASE_URL

  return (
    <section id="conducao" className="bg-light py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(320px,0.82fr)_1fr] md:items-center md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-divider bg-light-alt shadow-[0_34px_100px_rgba(16,32,28,0.08)]">
              {imgError ? (
                <div className="editorial-portrait-fallback flex h-full w-full items-end p-8">
                  <div className="relative z-10 border-l border-secondary pl-5 text-white">
                    <p className="font-serif text-4xl leading-tight">Luana Carraro</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/70">
                      Mentoria financeira
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={`${assetBase}assets/luana-carraro.png`}
                  alt="Luana Carraro"
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              Quem conduz
            </p>
            <h2 className="mb-8 font-serif text-[3rem] leading-[1.04] text-dark md:text-[4.8rem]">
              Luana Carraro
            </h2>
            <div className="mb-9 flex flex-wrap gap-0 border-y border-divider divide-x divide-divider">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col justify-center px-6 py-4 first:pl-0 last:pr-0">
                  {stat.value && (
                    <p className="font-serif text-2xl leading-none text-dark">
                      {stat.value}
                    </p>
                  )}
                  <p className={`text-xs font-medium uppercase tracking-wider text-primary ${stat.value ? 'mt-1' : 'text-sm'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-body md:text-xl">
              Mentora e consultora financeira há mais de 5 anos, com mais de 300
              pessoas atendidas entre mentorias e consultorias individuais.
            </p>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-body md:text-xl">
              Trabalha com finanças comportamentais - não apenas organização e
              planejamento - porque acredita que o problema financeiro da maioria
              das pessoas não é técnico. É comportamental.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-body md:text-xl">
              Criadora do Programa de Mentoria Prospera, que já transformou a
              relação de centenas de profissionais com o próprio dinheiro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
