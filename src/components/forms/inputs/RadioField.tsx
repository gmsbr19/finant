import React from "react"
import * as styles from './RadioField.css';

type RadioFieldProps = {
    options: string[]
    props: React.InputHTMLAttributes<HTMLInputElement>
}

const RadioField = ({options, props}: RadioFieldProps) => {
    return (
        <div className={styles.radioFieldContainer}>
            {options.map(c => (
                <React.Fragment key={c}>
                    <input className={styles.radioInput} name="transactionType" id={c} {...props} type="radio" />
                    <label className={styles.radioLabel} htmlFor={c}>{c}</label>
                </React.Fragment>
            ))}
        </div>
    );
}
 
export default RadioField;