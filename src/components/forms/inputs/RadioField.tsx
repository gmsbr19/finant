import React from "react"
import * as styles from "./RadioField.css"

type RadioOption = {
    label: string
    value: string
}

type RadioFieldProps = {
    name: string
    value: string
    options: RadioOption[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioField = ({ name, value, options, onChange }: RadioFieldProps) => {
    return (
        <div className={styles.radioFieldContainer}>
            {options.map((c) => (
                <React.Fragment key={c.value}>
                    <input
                        className={styles.radioInput}
                        value={c.value}
                        name={name}
                        id={c.value}
                        checked={value === c.value}
                        type="radio"
                        onChange={onChange}
                    />
                    <label className={styles.radioLabel} htmlFor={c.value}>
                        {c.label}
                    </label>
                </React.Fragment>
            ))}
        </div>
    )
}

export default RadioField
