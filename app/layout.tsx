import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components'
import RegisterModal from './components/Modals/RegisterModal/RegisterModal'
import ToastProvider from './components/providers/ToasterProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Full Stack Airbnb Clone.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
          <Navbar /> 
         {children}
         </body>
    </html>
  )
}
