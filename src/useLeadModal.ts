import { useCallback } from 'react'

/**
 * Abre o modal de captação de leads disparando um evento global.
 * Evita prop-drilling e não requer lib de estado adicional.
 */
export function useOpenLeadModal() {
  return useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-lead-modal'))
  }, [])
}
