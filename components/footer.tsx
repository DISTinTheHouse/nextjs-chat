import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Click aqui para regresar al{' '}
      <ExternalLink href="https://portal-lazzar.com/">Portal-Lazzar</ExternalLink> o la sección de{' '}
      <ExternalLink href="https://portal-lazzar.com/intranet/">
        Intranet
      </ExternalLink>
      .
    </p>
  )
}
