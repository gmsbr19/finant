'use client'

import { Boxes, LayoutDashboard } from 'lucide-react';
import NavItem, { NavItemProps } from './NavItem';
import * as styles from './NavSidebar.css';
import { usePathname } from 'next/navigation';

const navLinks: NavItemProps[] = [
    {
        label: "Dashboard",
        path: "/",
        active: true,
        Icon: LayoutDashboard
    },
    {
        label: "Categorias",
        path: "/categories",
        active: false,
        Icon: Boxes
    }
]

const NavSidebar = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
            {navLinks.map(c => (
                <NavItem {...c} active={c.path === pathname} />
            ))}
        </nav>
    );
}
 
export default NavSidebar;