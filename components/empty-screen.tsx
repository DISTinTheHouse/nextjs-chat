import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          OpenChat Lazzar te da la Bienvenida !
        </h1>
        <p className="leading-normal text-muted-foreground">
          Es un chatbot impulsado por IA, diseñado exclusivamente para Lazzar México. Su objetivo es brindar asistencia rápida y eficiente a los usuarios en todos los procesos relacionados con la empresa, como consultas sobre existencias, pedidos, cancelaciones, reembolsos y más.{' '}
          <ExternalLink href="https://portal-lazzar.com/">Portal-Lazzar</ExternalLink>.
        </p>
        <p className="leading-normal text-muted-foreground">
          los usuarios pueden obtener información en tiempo real, resolver dudas y gestionar sus pedidos de forma fácil y directa. Este asistente está entrenado específicamente para manejar todas las interacciones dentro del entorno de Lazzar México, garantizando respuestas precisas y actualizadas.
        </p>
      </div>
    </div>
  )
}
