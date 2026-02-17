import FormField from "@/components/ui/fields/FormField"
import InputField from "@/components/ui/fields/InputField"
import SelectField from "@/components/ui/fields/SelectField"
import TransactionDetailsModal from "@/components/TransactionDetailsModal/TransactionDetailsModal"
import { Decimal } from "@/generated/runtime/client"
import { Transaction } from "@/generated"

const Categories = () => {

    return (
        <div>
            <TransactionDetailsModal transaction={{amount: Decimal(234), description: "Teste"} as Transaction} />
        </div>
    )
}

export default Categories
