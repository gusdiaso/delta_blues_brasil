import type { Metadata } from 'next'
import './globals.css'
import { Darker_Grotesque } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// 👉 Evita o carregamento automático do CSS interno
config.autoAddCss = false

const darkerGrotesque = Darker_Grotesque({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-darker-grotesque'
})

export const metadata: Metadata = {
    title: 'Delta Blues Brasil',
    description:
        'Canal e escola online de blues por Pedro Friedrich — videoaulas grátis, mentorias, tablaturas e cursos de slide guitar.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" className={darkerGrotesque.className}>
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
