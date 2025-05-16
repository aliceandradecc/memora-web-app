import styles from "@/components/GreenLeftBar/greenLeftBar.module.css";
import Image from "next/image";
import Logout from "@/assets/logout.png";

export default function GreenLeftBar() {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <Image src={Logout} alt="Logout"/>
            </button>
        </div>
    );
}