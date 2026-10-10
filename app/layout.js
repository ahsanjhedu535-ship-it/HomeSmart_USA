import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata = { title: { default: 'HomeSmart USA | Smarter Living Starts Here', template: '%s | HomeSmart USA' }, description: 'Practical guides to solar energy, home improvement, energy efficiency, and smart home technology for US homeowners.', metadataBase: new URL('https://homesmartusa.example') };
export default function RootLayout({children}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
