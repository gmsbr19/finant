import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"
import * as styles from "./HomeCardContainer.css"
import { CategoryHomeCardProps } from "@/components/CategoryHomeCard/CategoryHomeCard"
import { ReactNode } from "react"

type HomeCardContainerProps = {
    colNums: number,
    children: ReactNode
}

const HomeCardContainer = ({colNums, children}: HomeCardContainerProps) => {
    return (
        <div className={styles.homeCardContainer} style={{gridTemplateColumns: `repeat(${colNums}, 1fr)`}}>
            {children}
        </div>
    )
}

export default HomeCardContainer
