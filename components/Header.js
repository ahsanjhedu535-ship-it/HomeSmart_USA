import Link from 'next/link';
const links = [['Solar Energy','/solar-energy'],['Home Improvement','/home-improvement'],['Smart Home','/smart-home'],['About','/about']];
export default function Header(){return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand"><span className="brand-mark">H</span><span>HomeSmart <b>USA</b><small>SMARTER LIVING STARTS HERE</small></span></Link><nav>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/contact" className="nav-cta">Contact us <span>↗</span></Link></nav></div></header>}
