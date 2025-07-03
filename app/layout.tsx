// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/AuthContext/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apolo App',
  description: 'Tu aplicación con autenticación Firebase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-lt-installed="true">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

