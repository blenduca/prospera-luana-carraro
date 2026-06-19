import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2 } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const WEBHOOK_URL = 'https://automacao.bagents.cloud/webhook/prospera-luana'
const CHECKOUT_URL = 'https://pay.kiwify.com.br/XRJXIBi'

function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  const utmKeys = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ]
  const result: Record<string, string> = {}
  utmKeys.forEach((key) => {
    const val = params.get(key)
    if (val) result[key] = val
  })
  return result
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

/** Versão auto-gerenciada: escuta o evento global 'open-lead-modal' */
export function LeadModalRoot() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('open-lead-modal', handler)
    return () => window.removeEventListener('open-lead-modal', handler)
  }, [])

  return <LeadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function LeadModal({ isOpen, onClose }: Props) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<{ nome?: string; email?: string; telefone?: string }>({})

  /* ── fechar com ESC ──────────────────────────────── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  /* ── travar scroll quando aberto ────────────────── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  /* ── formatar telefone ───────────────────────────── */
  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    return value
  }

  /* ── validação ──────────────────────────────────── */
  function validate() {
    const newErrors: { nome?: string; email?: string; telefone?: string } = {}
    if (!nome.trim()) newErrors.nome = 'Por favor, informe seu nome completo.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) newErrors.email = 'Por favor, informe seu e-mail.'
    else if (!emailRegex.test(email)) newErrors.email = 'Informe um e-mail válido.'
    const digits = telefone.replace(/\D/g, '')
    if (!telefone.trim()) newErrors.telefone = 'Por favor, informe seu WhatsApp/telefone.'
    else if (digits.length < 10) newErrors.telefone = 'Informe um número válido com DDD.'
    return newErrors
  }

  /* ── campos obrigatórios preenchidos ────────────── */
  const isFormFilled = nome.trim() !== '' && email.trim() !== '' && telefone.trim() !== ''

  /* ── submit ──────────────────────────────────────── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Guarda extra: impede qualquer submissão sem dados preenchidos
    if (!isFormFilled) return

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setFormState('loading')

    const utms = getUtmParams()

    // Captura os dados antes do fetch para garantir que o catch os acesse
    const dadosValidados = { nome: nome.trim(), email: email.trim(), telefone: telefone.trim() }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...dadosValidados,
          ...utms,
          origem: window.location.href,
        }),
      })
      setFormState('success')
      setTimeout(() => {
        window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
        onClose()
        // reset
        setNome('')
        setEmail('')
        setTelefone('')
        setFormState('idle')
      }, 1200)
    } catch {
      // Só redireciona se os dados foram devidamente preenchidos e validados
      if (dadosValidados.nome && dadosValidados.email && dadosValidados.telefone) {
        window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
      }
      onClose()
      setFormState('idle')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-dark/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 z-[9999] mx-auto max-w-md -translate-y-1/2 overflow-hidden rounded-2xl bg-light shadow-[0_32px_80px_rgba(16,32,28,0.36)]"
          >
            {/* Topo decorativo */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="p-7 md:p-9">
              {/* Fechar */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="absolute right-4 top-4 rounded-lg p-1.5 text-body/50 transition hover:bg-light-alt hover:text-body"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cabeçalho */}
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Última etapa
              </p>
              <h2
                id="lead-modal-title"
                className="font-serif text-2xl leading-snug text-dark md:text-3xl"
              >
                Antes de garantir sua vaga,<br />
                <span className="text-primary">precisamos te conhecer</span>
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-body/70">
                Preencha os dados abaixo e você será redirecionado para o
                pagamento em seguida.
              </p>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="lead-nome"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body/60"
                  >
                    Nome completo
                  </label>
                  <input
                    id="lead-nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value); setErrors((prev) => ({ ...prev, nome: undefined })) }}
                    disabled={formState === 'loading' || formState === 'success'}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-dark placeholder-body/40 outline-none ring-0 transition focus:ring-2 disabled:opacity-60 ${
                      errors.nome
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                        : 'border-divider focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.nome && <p className="mt-1.5 text-xs text-red-500">{errors.nome}</p>}
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body/60"
                  >
                    E-mail
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })) }}
                    disabled={formState === 'loading' || formState === 'success'}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-dark placeholder-body/40 outline-none ring-0 transition focus:ring-2 disabled:opacity-60 ${
                      errors.email
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                        : 'border-divider focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="lead-telefone"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body/60"
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="lead-telefone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => { setTelefone(formatPhone(e.target.value)); setErrors((prev) => ({ ...prev, telefone: undefined })) }}
                    disabled={formState === 'loading' || formState === 'success'}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-dark placeholder-body/40 outline-none ring-0 transition focus:ring-2 disabled:opacity-60 ${
                      errors.telefone
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                        : 'border-divider focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  {errors.telefone && <p className="mt-1.5 text-xs text-red-500">{errors.telefone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!isFormFilled || formState === 'loading' || formState === 'success'}
                  className={`relative mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-[0_12px_32px_rgba(43,108,112,0.35)] transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    isFormFilled && formState === 'idle'
                      ? 'bg-primary hover:bg-secondary'
                      : 'bg-primary/60'
                  }`}
                >
                  {formState === 'loading' && (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  )}
                  {formState === 'success' ? (
                    '✓ Redirecionando…'
                  ) : formState === 'loading' ? (
                    'Aguarde…'
                  ) : (
                    'Quero garantir minha vaga →'
                  )}
                </button>

                <p className="text-center text-[11px] leading-relaxed text-body/50">
                  🔒 Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
