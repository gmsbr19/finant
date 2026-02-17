import { LucideIcon } from "lucide-react"
import { ComponentProps, CSSProperties, JSX, isValidElement, ReactNode, ComponentType } from "react"
import * as styles from "./IconButton.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { vars } from "@/styles/theme.css"

interface IconButtonProps extends ComponentProps<"button"> {
    Icon: LucideIcon | ComponentType<{ size?: number }> | JSX.Element
    color?: string
    hoverColor?: string
}

const IconButton = ({ Icon, color, hoverColor, ...props }: IconButtonProps) => {
    const isJSXElement = isValidElement(Icon)
    const IconComponent = Icon as ComponentType<{ size?: number }>

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
            {isJSXElement ? Icon : <IconComponent size={24} />}
        </button>
    )
}

export default IconButton
