import './globals.css'
import { Bebas_Neue, Montserrat, Inter, Playfair_Display, Outfit } from 'next/font/google'
import CursorBlur from "../components/CursorBlur";

const bebas = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-outfit',
})
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL('https://mrlegacies-official.vercel.app'),
  title: 'MR Legacies - Building towards Future',
  description: 'Tech, Robotics, & more. Buidling towards future world.',
  openGraph: {
    title: 'MR Legacies - Building towards Future',
    description: 'Tech, Robotics, & more. Buidling towards future world.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${outfit.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-inter">
        <CursorBlur/>
        {children}
      </body>
    </html>
  )
}