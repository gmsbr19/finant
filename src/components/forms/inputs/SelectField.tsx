import * as styles from "../FormField.css"

type Option = {
    label: string
    value: string | number
}

type SelectFieldProps = {
    props: React.InputHTMLAttributes<HTMLInputElement>
    options: Option[]
}

const SelectField = ({ props, options }: SelectFieldProps) => {
    return (
        <>
            <input
                
                {...props}
                type="text"
                list="catdtl"
                className={styles.inputField}
            />

            <datalist id="catdtl">
                {options.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.label}
                    </option>
                ))}
            </datalist>
        </>
    )
}

export default SelectField
