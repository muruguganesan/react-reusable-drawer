import { createPortal } from "react-dom";
import type { MouseEvent, ReactNode } from "react";
import { X } from "lucide-react";
import styles from "./css_modules/drawer.module.css"

const Drawer = ({
    isOpen,
    onClose,
    children
}: {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}) => {

    const handleCloseOff = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return createPortal(
        <div
            className={`${styles.drawer_wrapper} ${isOpen ? styles.mnu_active : styles.drawer_closed
                }`}
            onClick={onClose}
        >
            <div
                className={styles.drawer_cont}
                onClick={handleCloseOff}
            >
                <div className={styles.burger_close_wrapper}>
                    <button className={styles.burger_close_btn}><X color="#E67E22" onClick={onClose} /></button>
                </div>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Drawer;