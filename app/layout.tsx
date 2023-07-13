import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components'
import { Modal } from './components/Modals'
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
      <body className={font.className}> <Modal isOpen={true} title={"Cows"} /> <Navbar /> {children}</body>
    </html>
  )
}
