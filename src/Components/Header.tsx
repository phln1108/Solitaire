import styles from "./Header.module.css"

import logo from "../assets/logo.png"
import { Dropdown } from "./DropDown"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="paciencia"/>
            <strong>Paciencia</strong>
            <div className={styles.dropDownArea}>
                <Dropdown />
            </div>
        </header>
    )
}