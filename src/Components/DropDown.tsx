import { useState } from "react";
import styles from "./DropDown.module.css"

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (

        <div>
            <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>≡</button>

            {isOpen && (
               <div>
                <label>opa</label>
               </div>

            )}

        </div>

    );

};