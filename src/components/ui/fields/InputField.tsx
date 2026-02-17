import * as styles from "./FormField.css"

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>

const InputField = (props: InputFieldProps) => {
    return <input {...props} className={styles.input}/>
}

export default InputField
