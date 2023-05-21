import './globals.css'

import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar";
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'airbnb',
  description: 'airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={font.className}>
        <Navbar />
        {children}
        <Modal 
        isOpen
        title='Hello, World!'/>
      </body>
    </html>
  )
}
