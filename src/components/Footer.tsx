export default function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-6xl mx-auto px-6 border-t border-divider-light pt-16">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="font-serif text-xl text-white mb-1">Prospera</p>
            <p className="text-sm text-white/40">
              Mentoria Financeira &middot; Luana Carraro
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contato@luanacarrarofinancas.com.br"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              contato@luanacarrarofinancas.com.br
            </a>
            <span className="text-white/20">&middot;</span>
            <a
              href="#inscricao"
              className="text-sm font-semibold text-light hover:text-white transition-colors"
            >
              Garantir vaga
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-divider-light text-center">
          <p className="text-xs text-white/30">
            &copy; 2025 Programa Prospera. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
