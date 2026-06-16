import { useState } from 'react'
import Reveal from './Reveal'

const speakers = [
  {
    name: 'Fernanda Ciello',
    instagram: '@fernandaciello',
    image: 'assets/fernanda-ciello.png',
    bio: 'Economista, especialista em venda comportamental e apaixonada por autoconhecimento. Desenvolve empreendedoras e times de vendas para acessar novos níveis de resultado através de uma venda intencional e persuasiva.',
    credentials: '+1100 vidas impactadas · +46 nichos de atuação · Brasil e Portugal',
    theme:
      'Como a autoestima financeira impacta diretamente no quanto você cobra.',
  },
  {
    name: 'Ricardo Werlang',
    instagram: '@ricardowerlang',
    image: 'assets/ricardo-werlang.jpg',
    bio: 'Engenheiro de Computação e Mestre em IA com mais de 15 anos transformando tecnologia em resultado real para negócios. Fundador da Blenduca, onde a inovação acelera o conhecimento, Ricardo atua como mentor e consultor para experts e empreendedores que querem usar IA de forma estratégica para escalar seu conhecimento, automatizar processos e faturar mais.',
    credentials: 'Founder & CTO da Blenduca · Estrategista Digital e Expert em IA para Negócios',
    theme:
      'Como a inteligência artificial pode trabalhar ao seu lado para atrair os clientes certos, fortalecer sua imagem, produzir conteúdo com consistência e, principalmente, ter mais clareza sobre as finanças do seu negócio.',
  },
]

function SpeakerImage({ src, name }: { src: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="editorial-portrait-fallback flex h-full w-full items-end p-7">
        <div className="relative z-10 border-l border-secondary pl-4 text-white">
          <p className="font-serif text-3xl leading-tight">{name}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">
            Palestrante convidado
          </p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-full w-full object-cover"
      onError={() => setImgError(true)}
    />
  )
}

export default function Speakers() {
  const assetBase = import.meta.env.BASE_URL

  return (
    <section className="bg-light-alt py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            Convidados
          </p>
          <h2 className="font-serif text-[2.7rem] leading-[1.04] text-dark md:text-[4.4rem]">
            Palestrantes convidados
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-2">
          {speakers.map((speaker, i) => (
            <Reveal key={speaker.name} delay={i * 0.15}>
              <article className="h-full overflow-hidden border border-divider bg-light shadow-[0_28px_90px_rgba(16,32,28,0.07)]">
                <div className="aspect-[5/4] overflow-hidden bg-light-alt">
                  <SpeakerImage src={`${assetBase}${speaker.image}`} name={speaker.name} />
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="mb-2 font-serif text-3xl leading-tight text-dark">
                    {speaker.name}
                  </h3>
                  <p className="mb-6 text-sm font-medium text-primary">
                    {speaker.instagram}
                  </p>
                  <p className="mb-7 text-base leading-relaxed text-body md:text-lg">
                    {speaker.bio}
                  </p>

                  {speaker.credentials && (
                    <p className="mb-7 border-l border-secondary pl-4 text-sm leading-relaxed text-body/70">
                      {speaker.credentials}
                    </p>
                  )}

                  <div className="border-t border-divider pt-6">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-body/60">
                      Tema:
                    </span>
                    <p className="text-lg font-medium leading-relaxed text-dark">
                      {speaker.theme}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
