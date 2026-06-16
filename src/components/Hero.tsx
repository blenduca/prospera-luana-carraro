import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useOpenLeadModal } from '../useLeadModal'

export default function Hero() {
  const [desktopImageError, setDesktopImageError] = useState(false)
  const [mobileImageError, setMobileImageError] = useState(false)
  const assetBase = import.meta.env.BASE_URL
  const openModal = useOpenLeadModal()

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="hidden min-h-[calc(100svh-72px)] md:block">
        {desktopImageError ? (
          <div className="editorial-hero-fallback absolute inset-0" aria-hidden="true" />
        ) : (
          <img
            src={`${assetBase}assets/hero-desktop.png`}
            alt="Luana Carraro"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={() => setDesktopImageError(true)}
          />
        )}

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-5 py-8 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="max-w-[560px] lg:max-w-[620px]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-light">
              Evento presencial Prospera
            </p>

            <h1 className="mt-4 font-serif text-[3.25rem] leading-[0.98] text-white lg:text-[3.75rem] xl:text-[4.15rem]">
              Você fatura acima de R$ 20 mil por mês e ainda não sabe para onde o dinheiro vai?
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
              Um dia presencial para empreendedores que já superaram o problema de vender, mas ainda não resolveram o que fazer com o que ganham.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-white/20 py-4 text-sm font-medium text-white/80">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-light" />
                29 de agosto
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-light" />
                08h30 às 18h
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-light" />
                Requinte Convention Center, Chapecó
              </span>
            </div>

            <button
              type="button"
              id="hero-cta-desktop"
              onClick={openModal}
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/35 bg-light px-8 py-3.5 text-base font-semibold text-primary shadow-[0_22px_70px_rgba(43,108,112,0.28)] transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Quero garantir minha vaga
            </button>
          </motion.div>
        </div>
      </div>

      <div className="relative min-h-[100svh] overflow-hidden md:hidden">
        {mobileImageError ? (
          <div className="editorial-hero-fallback absolute inset-0" aria-hidden="true" />
        ) : (
          <img
            src={`${assetBase}assets/hero-mobile.png`}
            alt="Luana Carraro"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={() => setMobileImageError(true)}
          />
        )}

        <div className="relative flex min-h-[100svh] items-end px-5 pb-16 pt-[58vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-light">
              Evento presencial Prospera
            </p>

            <h1 className="mt-5 font-serif text-[3rem] leading-[1.02] text-white min-[430px]:text-[3.35rem]">
              Você fatura acima de R$ 20 mil por mês e ainda não sabe para onde o dinheiro vai?
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Um dia presencial para empreendedores que já superaram o problema de vender, mas ainda não resolveram o que fazer com o que ganham.
            </p>

            <div className="mt-8 grid gap-3 border-y border-white/20 py-5 text-sm font-medium text-white/75">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-light" />
                29 de agosto
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-light" />
                08h30 às 18h
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-light" />
                Requinte Convention Center, Chapecó
              </span>
            </div>

            <button
              type="button"
              id="hero-cta-mobile"
              onClick={openModal}
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-white/35 bg-light px-8 py-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Quero garantir minha vaga
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
