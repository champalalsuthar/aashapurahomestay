import Footer from '../components/Common/Footer'
import Navbar from '../components/Common/Navbar'
import './globals.css'

export const metadata = {
  title: 'Homestay',
  description: 'Beautiful homestay booking',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}