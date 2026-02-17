import { ComponentProps, CSSProperties, ReactNode } from "react"
import * as styles from "./FormField.css"
import { LucideIcon } from "lucide-react"
import { assignInlineVars } from "@vanilla-extract/dynamic"

interface FormFieldProps extends ComponentProps<"label"> {
    label?: string
    Icon?: LucideIcon
    children: ReactNode
    colSpan?: "span 1" | "span 2"
}

const FormField = ({
    label,
    Icon,
    children,
    colSpan,
    ...props
}: FormFieldProps) => {
    return (
        <div
            className={styles.formFieldContainer}
            style={assignInlineVars({ [styles.colSpan]: colSpan || "span 1" }) as CSSProperties}
        >
            <label {...props} className={styles.label}>
                {label}
            </label>
            <div className={styles.iconInputContainer}>
                <div className={styles.iconContainer}>
                    {Icon && <Icon size={24} />}
                </div>
                {children}
            </div>
        </div>
    )
}

export default FormField
