import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"

type ActiveType = string | null

export const useMenu = () => {
    let [active, setActive] = useState<ActiveType>(null)
    const history = useHistory()

    const getItemType = (type: string) => () => {
        setActive(type)
        history.push(type)
    }

    const color = useCallback((type: string) => {
        if (active === type) {
            return "secondary"
        }
        return "inherit"

    }, [active])
    return {getItemType, color}
}