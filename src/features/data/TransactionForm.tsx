"use client"
import FormField from "@/components/forms/FormField"
import * as styles from "./TransactionForm.css"
import InputField from "@/components/forms/inputs/InputField"
import SelectField from "@/components/forms/inputs/SelectField"
import { ArrowDownToLine, ArrowUpFromLine, Send, X } from "lucide-react"
import { useState } from "react"
import { Transaction } from "@/generated"
import RadioField from "@/components/forms/inputs/RadioField"

import { assignInlineVars } from "@vanilla-extract/dynamic"
import { createTransaction } from "@/services/actions"

type ActiveType = "income" | "expense" | null

type BasicInfoType = { name: string; id: number }

type TransactionFormProps = {
    categories: BasicInfoType[]
    accounts: BasicInfoType[]
}

const radioOptions = [
    { label: "Débito", value: "debit" },
    { label: "Crédito", value: "credit" },
]

const TransactionForm = ({ categories, accounts }: TransactionFormProps) => {
    const [activeType, setActiveType] = useState<ActiveType>(null)
    const [formStatus, setFormStatus] = useState<"pending" | "loading" | null>()
    const [formData, setFormData] = useState<Partial<Transaction>>({
        installmentTotal: 1,
    })
    const [isCredit, setIsCredit] = useState<boolean>(false)

    const categoriesSelectOptions = categories.map((c) => ({
        label: c.name,
        value: c.id,
    }))

    const accountSelectOptions = accounts.map((c) => ({
        label: c.name,
        value: c.id,
    }))

    const installmentOptions = Array.from({ length: 12 }, (_, i) => ({
        label: String(i + 1),
        value: i + 1,
    }))

    const isFormValid = Boolean(
        formData?.amount &&
        formData.description?.trim() &&
        formData.categoryId &&
        formData.date,
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

        const transactionDate = formData.date ? new Date(formData.date) : new Date()

        let competenceDate = transactionDate
        
        if (isCredit) {
            competenceDate = new Date(transactionDate.getFullYear(), transactionDate.getMonth() + 1, 5)
        }

        const result = await createTransaction({
            ...formData,
            date: transactionDate,
            type: activeType?.toUpperCase(),
            isPaid: transactionDate <= new Date(),
            competenceDate
        } as Transaction)

        if (result.success) {
            handleClose()
        } else {
            setFormStatus("pending")
            return
        }
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
        const { name, value } = e.target

        let finalValue: string | number = value

        const valueType = typeof value

        if (valueType === "number" || name === "installmentTotal") {
            finalValue = Number(value)
        }

        setFormData((prev) => ({
            ...prev,
            [name]: finalValue,
        }))
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCredit(e.target.value === "credit")
        e.target.value === "debit" &&
            setFormData((prev) => ({ ...prev, installmentTotal: 1 }))
    }

    console.log(formData)
    console.log(isCredit)

    return (
        <div className={styles.popupContainer}>
            {activeType ? (
                <>
                    <form
                        className={styles.transactionForm}
                        style={assignInlineVars({
                            [styles.formRowsAmount]: isCredit ? "4" : "3",
                        })}
                    >
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
                                value={Number(formData.amount) || ""}
                            />
                        </FormField>
                        <FormField label="Data">
                            <InputField
                                name="date"
                                type="date"
                                onChange={(e) => handleInputChange(e)}
                                value={
                                    formData.date ? String(formData.date) : ""
                                }
                            />
                        </FormField>
                        <FormField label="Categoria">
                            <SelectField
                                props={{
                                    name: "categoryId",
                                    onChange: handleSelectChange,
                                    value: formData?.categoryId || "",
                                }}
                                options={categoriesSelectOptions}
                            />
                        </FormField>
                        <FormField label="Tipo">
                            <RadioField
                                options={radioOptions}
                                name="transactionType"
                                onChange={handleRadioChange}
                                value={isCredit ? "credit" : "debit"}
                            />
                        </FormField>
                        <FormField label="Conta">
                            <SelectField
                                props={{
                                    name: "fromAccId",
                                    onChange: handleSelectChange,
                                    value: formData?.fromAccId || "",
                                }}
                                options={accountSelectOptions}
                            />
                        </FormField>
                        {isCredit && (
                            <FormField
                                props={{ style: { gridColumn: "1/3" } }}
                                label="Parcelas"
                            >
                                <SelectField
                                    props={{
                                        name: "installmentTotal",
                                        onChange: handleSelectChange,
                                        value: formData?.installmentTotal || "",
                                    }}
                                    options={installmentOptions}
                                />
                            </FormField>
                        )}
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
