import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TJ | Software Developer",
  description: "The guy you want to hire",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
