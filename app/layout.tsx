import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components'
import RegisterModal from './components/Modals/RegisterModal/RegisterModal'
import ToastProvider from './components/providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal/LoginModal'
import getCurrentUser from './components/actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Full Stack Airbnb Clone.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const TheCurrentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
          <Navbar currentUser={TheCurrentUser}/> 
         {children}
         </body>
    </html>
  )
}
