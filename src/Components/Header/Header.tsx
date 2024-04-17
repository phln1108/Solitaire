import styles from "./Header.module.css"

import logo from "../../assets/logo.png"
import { Dropdown } from "../DropDown/DropDown"

interface HeaderProps {
    restart: () => void,
    about?: () => void,
    return?: () => void,
}

export function Header(props: HeaderProps) {
    return (
        <header className={styles.header}>
            <img src={logo} alt="paciencia"/>
            <strong>Paciencia</strong>
            <div className={styles.dropDownArea}>
                <Dropdown restart={props.restart} about={props.about} return={props.return} />
            </div>
        </header>
    )
}