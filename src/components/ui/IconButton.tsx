import { LucideIcon } from "lucide-react"
import { ComponentProps, CSSProperties } from "react"
import * as styles from "./IconButton.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { vars } from "@/styles/theme.css"

interface IconButtonProps extends ComponentProps<"button"> {
    Icon: LucideIcon
    color?: string
    hoverColor?: string
}

const IconButton = ({ Icon, color, hoverColor, ...props }: IconButtonProps) => {
    return (
        <button
            className={styles.iconButton}
            {...props}
            style={
                {
                    ...assignInlineVars({
                        [styles.color]: color || vars.colors.textPrimary,
                        [styles.hoverColor]: hoverColor || color || vars.colors.textPrimary,
                    }),
                } as CSSProperties
            }
        >
            <Icon size={24} />
        </button>
    )
}

export default IconButton
