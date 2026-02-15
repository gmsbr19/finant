import { ReactNode } from "react"
import * as styles from "./FormField.css"

type InputProps = {
    label: string
    children: ReactNode
}

const FormField = ({ label, children }: InputProps) => {
    return (
        <label className={styles.label}>
            {label}
            {children}
        </label>
    )
}

export default FormField
