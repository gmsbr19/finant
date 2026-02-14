import { LucideIcon } from "lucide-react"
import * as styles from "./NavItem.css"
import Link from "next/link"

export type NavItemProps = {
    label: string
    Icon: LucideIcon
    path: string
    active: boolean
}

const NavItem = ({ label, active, Icon, path }: NavItemProps) => {
    return (
        <Link href={path} className={styles.navItem({ active })}>
            <Icon />
            <p>{label}</p>
        </Link>
    )
}

export default NavItem
