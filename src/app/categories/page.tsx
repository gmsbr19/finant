import FormField from "@/components/forms/FormField"
import InputField from "@/components/forms/inputs/InputField"
import SelectField from "@/components/forms/inputs/SelectField"

const Categories = () => {
    const testOptions = [{
        label: "Teste",
        value: "Teste"
    }]

    return (
        <div>
            <FormField label="Valor">
                <InputField type="text" placeholder="20,00"/>
            </FormField>
            <FormField label="Categoria" >
                <SelectField props={{}} options={testOptions}/>
            </FormField>
        </div>
    )
}

export default Categories
