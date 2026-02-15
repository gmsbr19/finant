import { ReactNode } from "react"
import * as styles from "./FormField.css"

type FormFieldProps = {
    label: string
    children: ReactNode
    props?: React.LabelHTMLAttributes<HTMLLabelElement>
}

const FormField = ({ label, children, props }: FormFieldProps) => {
    return (
        <label {...props} className={styles.label}>
            {label}
            {children}
        </label>
    )
}

export default FormField
