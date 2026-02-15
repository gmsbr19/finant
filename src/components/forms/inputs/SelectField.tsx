import * as styles from "../FormField.css"

type Option = {
    label: string
    value: string | number
}

type SelectFieldProps = {
    props: React.SelectHTMLAttributes<HTMLSelectElement>
    options: Option[]
}

const SelectField = ({ props, options }: SelectFieldProps) => {
    return (
        <select {...props} id="catdtl" className={styles.inputField}>
            {options.map((c) => (
                <option key={c.value} value={c.value}>
                    {c.label}
                </option>
            ))}
        </select>
    )
}

export default SelectField
