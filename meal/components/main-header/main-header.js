
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import {usePathname} from "next/navigation";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader({title, description}) {



    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href='/' className={classes.logo}>
                    <Image src={logoImg} alt='logo' priority/>
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={'/meals'}>Browse Meals</NavLink>
                            {/*<Link href={'/meals'} className={path.startsWith('/meals') ? classes.active : undefined} >Browse Meals</Link>*/}
                        </li>
                        <li>
                            <NavLink href={'/community'}>Foodies Community</NavLink>

                            {/*<Link href={'/community'} className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link>*/}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}