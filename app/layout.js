import './globals.css';
import SiteShell from '../components/SiteShell';
export const viewport = {width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#26352c'};
export const metadata = {title:{default:'Up & Over | Garage Door Repair & Installation',template:'%s | Up & Over'},description:'Garage door repair, spring and cable service, opener repair, and installation. Explore service locations and request a quote.'};
export default function RootLayout({children}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
