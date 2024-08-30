'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from './nav-link.module.css';

export default function NavLink({children, href}) {

    const path = usePathname();

    return (
        <Link href={href} className={
            path.startsWith(href) ? 'active' : undefined
                // ? `${classes.link} ${classes.active}`
                // : classes.link
        }
        >
            {children}
        </Link>
    );
}
