'use client'

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './transactionTypes.css'
import FormField from '@/components/ui/fields/FormField';
import InputField from '@/components/ui/fields/InputField';
import { BanknoteArrowDown, Calendar, Landmark } from 'lucide-react';
import { CSSProperties } from 'react';
import { BodyProps } from '../TransactionDetailsModal';

const IncomeBody = ({isEditModeOn}: BodyProps) => {
    const fields = [
        { Icon: Calendar, value: "17/02/2026", colSpan: undefined },
        { Icon: BanknoteArrowDown, value: "Salário", colSpan: undefined },
        { Icon: Landmark, value: "C6 Bank", colSpan: "span 2" },
    ] as const

    return (
        <div className={styles.body} style={assignInlineVars({[styles.gridRowsNumber]: '2'}) as CSSProperties}>
            {fields.map(({ Icon, value, colSpan }, index) => (
                <FormField key={index} Icon={Icon} colSpan={colSpan}>
                    <InputField value={value} disabled={!isEditModeOn} />
                </FormField>
            ))}
        </div>
    );
}
 
export default IncomeBody;