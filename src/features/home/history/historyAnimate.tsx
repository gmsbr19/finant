"use client"
import { useAutoAnimate } from "@formkit/auto-animate/react"

export const AnimateList = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    const [parent] = useAutoAnimate()
    return (
        <div ref={parent} className={className}>
            {children}
        </div>
    )
}
