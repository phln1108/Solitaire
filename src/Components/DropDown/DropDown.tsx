import { useState } from "react";
import styles from "./DropDown.module.css"


interface DropDownProps {
    restart: () => void,
    about?: () => void,
    return?: () => void,
}

export const Dropdown = (props: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleRestart() {
        setIsOpen(false);
        props.restart()
    }

    function handleAbout() {
        setIsOpen(false);
        props.about?.()
    }

    function handleReturn() {
        setIsOpen(false);
        props.return?.()
    }


    return (
        <div>
            <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>≡</button>
            {isOpen &&
                <div className={styles.dropDownList} >
                    <ul>
                        <li onClick={handleRestart} className={styles.dropDownItem}>Restart</li>
                        <li onClick={handleAbout} className={styles.dropDownItem}>About Project</li>
                        <li onClick={handleReturn} className={styles.dropDownItem}>Return</li>
                    </ul>
                </div>
            }
        </div>

    );

};
