"use client"
import FormField from "@/components/forms/FormField"
import * as styles from "./TransactionForm.css"
import InputField from "@/components/forms/inputs/InputField"
import SelectField from "@/components/forms/inputs/SelectField"
import { ArrowDownToLine, ArrowUpFromLine, Send, X } from "lucide-react"
import { useState } from "react"
import { Transaction } from "@/generated"
import { getNamesAndIds } from "@/services/categories"

type ActiveType = "income" | "expense" | null

type TransactionFormProps = {
    categories: { name: string; id: number }[]
}

const TransactionForm = ({ categories }: TransactionFormProps) => {
    const [activeType, setActiveType] = useState<ActiveType>(null)
    const [formStatus, setFormStatus] = useState<"pending" | "loading" | null>()
    const [formData, setFormData] = useState<Partial<Transaction>>({})

    const selectOptions = categories.map((c) => ({
        label: c.name,
        value: c.id,
    }))

    const isFormValid = Boolean(
        formData?.amount &&
        formData.description?.trim() &&
        formData.categoryId &&
        formData.date
    )

    const handleOpen = (type: ActiveType) => {
        setActiveType(type)
        setFormStatus("pending")
    }

    const handleClose = () => {
        setActiveType(null)
        setFormStatus(null)
        setFormData({})
    }

    const renderActionButtons = () => (
        <div className={styles.buttonsContainer}>
            <button
                onClick={(e) => handleOpen("expense")}
                className={styles.expenseButton}
            >
                <ArrowUpFromLine width={24} />
            </button>
            <button
                onClick={(e) => handleOpen("income")}
                className={styles.incomeButton}
            >
                <ArrowDownToLine width={24} />
            </button>
        </div>
    )

    const renderFormButtons = () => (
        <div className={styles.buttonsContainer}>
            <button
                onClick={(e) => handleClose()}
                disabled={formStatus == "loading"}
                className={styles.closeButton}
            >
                <X width={24} />
            </button>
            <button
                onClick={(e) => handleFormSubmit()}
                disabled={!isFormValid || formStatus == "loading"}
                className={styles.sendButton}
            >
                <Send width={24} />
            </button>
        </div>
    )

    const handleFormSubmit = async () => {
        setFormStatus("loading")

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 2500)
        })

        handleClose()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target

        if (value === "") {
            setFormData((prev) => ({ ...prev, [name]: undefined }))
            return
        }

        let finalValue: string | number = value

        if (type === "number" || name === "amount") {
            finalValue = parseFloat(value)
        }

        setFormData((prev) => ({
            ...prev,
            [name]: finalValue,
        }))
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(e.target.value)
        setFormData((prev) => ({
            ...prev,
            categoryId: value,
        }))
    }

    console.log(formData)

    return (
        <div className={styles.popupContainer}>
            {activeType ? (
                <>
                    <form className={styles.transactionForm}>
                        <FormField label="Nome">
                            <InputField
                                name="description"
                                type="text"
                                onChange={(e) => handleInputChange(e)}
                                value={formData.description || ""}
                            />
                        </FormField>
                        <FormField label="Valor">
                            <InputField
                                name="amount"
                                type="number"
                                onChange={(e) => handleInputChange(e)}
                                value={Number(formData.amount)}
                            />
                        </FormField>
                        <FormField label="Data">
                            <InputField
                                name="date"
                                type="date"
                                onChange={(e) => handleInputChange(e)}
                                value={formData.date ? String(formData.date) : ''}
                            />
                        </FormField>
                        <FormField label="Categoria">
                            <SelectField
                                props={{
                                    name: "categoryId",
                                    onChange: handleSelectChange,
                                    value: formData?.categoryId || "",
                                }}
                                options={selectOptions}
                            />
                        </FormField>
                    </form>
                    {renderFormButtons()}
                </>
            ) : (
                renderActionButtons()
            )}
        </div>
    )
}

export default TransactionForm
