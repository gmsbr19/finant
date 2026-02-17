import { LucideIcon } from "lucide-react"
import { ComponentProps } from "react"
import * as styles from "./IconButton.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"

interface IconButtonProps extends ComponentProps<"button"> {
    Icon: LucideIcon
    color: string
    hoverColor?: string
}

const IconButton = ({ Icon, color, hoverColor, ...props }: IconButtonProps) => {
    return (
        <button
            className={styles.iconButton}
            {...props}
            style={assignInlineVars({
                [styles.color]: color,
                [styles.hoverColor]: hoverColor || color,
            })}
        >
            <Icon size={24} />
        </button>
    )
}

export default IconButton
