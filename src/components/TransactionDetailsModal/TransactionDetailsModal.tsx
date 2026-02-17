"use client"

import { Ellipsis, Pencil, Save, Trash2, X } from "lucide-react"
import IconButton from "../ui/IconButton"
import * as styles from "./TransactionDetailsModal.css"
import * as typography from "@/styles/typography.css"
import { vars } from "@/styles/theme.css"
import Divider from "../ui/Divider"
import IncomeBody from "./transactionTypes/IncomeBody"
import { useState } from "react"
import { Loader } from "../animate-ui/icons/loader"
import { XIcon } from "../animate-ui/icons/x"
import { AnimateIcon } from "../animate-ui/icons/icon"
import { Check } from "../animate-ui/icons/check"
import { Transaction } from "@/generated"
import { formatCurrency } from "@/utils/format"

export type BodyProps = {
    isEditModeOn: boolean
}

type TransactionDetailsModal = {
    transaction: Transaction
}

const TransactionDetailsModal = ({transaction} : TransactionDetailsModal) => {
    const t = transaction

    const [isEditMode, setIsEditMode] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [showCheckAnimation, setShowCheckAnimation] = useState(false)

    const handleDetailsSave = async () => {
        setIsEditMode(false)
        setIsSaving(true)
        
        await new Promise((resolve) => {
            setTimeout(() => {
                setShowCheckAnimation(true)
                resolve(true)
            }, 2500)
        })
        
        setIsSaving(false)
        
        await new Promise((resolve) => {
            setTimeout(() => {
                setShowCheckAnimation(false)
                resolve(true)
            }, 1500)
        })
    }

    console.log("Edit mode: " + isEditMode)
    console.log("Saving? " + isSaving)

    return (
        <div className={styles.overlay}>
            <div className={styles.modalCard}>
                <div className={styles.topMenu}>
                    <span></span>
                    <span className={typography.h3}>Detalhes</span>
                    <div className={styles.closeButtonContainer}>
                        <IconButton Icon={Ellipsis} disabled={isSaving} />
                        <AnimateIcon
                                animateOnHover={!isSaving}
                                animation="path"
                            >
                                <IconButton
                                    onClick={() => setIsEditMode(false)}
                                    Icon={<XIcon size={24} />}
                                    hoverColor={vars.colors.danger}
                                    disabled={isSaving}
                                />
                            </AnimateIcon>
                    </div>
                </div>
                <Divider />
                <div className={styles.body}>
                    <div className={styles.mainInfo}>
                        <span className={typography.h2}>{t.description}</span>
                        <span className={typography.moneyL}>{formatCurrency(t.amount)}</span>
                    </div>
                    <Divider />
                    <IncomeBody isEditModeOn={isEditMode} />
                    <Divider />
                </div>
                <Divider />
                <div className={styles.footer}>
                    {isEditMode || isSaving ? (
                        <>
                            <AnimateIcon
                                animateOnHover={!isSaving}
                                animation="path"
                            >
                                <IconButton
                                    onClick={() => setIsEditMode(false)}
                                    Icon={<XIcon size={24} />}
                                    hoverColor={vars.colors.danger}
                                    disabled={isSaving}
                                />
                            </AnimateIcon>
                            <IconButton
                                Icon={
                                    isSaving ? (
                                        <Loader size={24} animate />
                                    ) : (
                                        Save
                                    )
                                }
                                onClick={() => handleDetailsSave()}
                                disabled={isSaving}
                            />
                        </>
                    ) : (
                        <IconButton
                            color={showCheckAnimation ? vars.colors.income : ''}
                            onClick={() => setIsEditMode(true)}
                            Icon={showCheckAnimation ? <Check size={24} animate /> : Pencil}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default TransactionDetailsModal
