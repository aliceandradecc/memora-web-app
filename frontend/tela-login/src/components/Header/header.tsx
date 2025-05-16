import styles from "@/components/header/header.module.css";
import Logo from "@/assets/logoMemora.png";
import Image from "next/image";

export default function header() {
    return (
        <div className={styles.container}>
            <Image src={Logo} alt="Logo" width={150} height={70}/>
        </div>
    );
}