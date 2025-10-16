import type { JSX } from "react"

export const GetIcon: React.FC<{ iconName: string, color?: string }> = ({ iconName, color }): JSX.Element => {
    return <i style={{ color: color }} className={iconName}></i>
}