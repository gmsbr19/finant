import { Decimal } from "@/generated/runtime/client"

export function formatCurrency(value: number | string | Decimal) {
    const amount =
        typeof value === "object" && "toNumber" in value
            ? value.toNumber()
            : Number(value)

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(amount)
}
