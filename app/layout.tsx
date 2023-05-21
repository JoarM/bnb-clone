import './globals.css'

import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar";
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

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
        <RegisterModal />
        <ToasterProvider />
      </body>
    </html>
  )
}
