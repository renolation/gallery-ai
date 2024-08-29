import Link from "next/link";
import logoImg from '@/assets/logo.jpg';
import Image from 'next/image';
import classes from './main-header.module.css'
import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>

                <ul>
                    {/*<li>*/}
                    {/*    <NavLink href='/'>Home</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink href='/news'>News</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}