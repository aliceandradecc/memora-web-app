import styles from "@/components/Menu/menu.module.css";
import Image from "next/image";
import Add from "@/assets/add-square.png";
import Search from "@/assets/search.png";
import Input from "../Input/Input";

export default function Menu() {
    return (
        <nav className={styles.container}>
            <div className={styles.register}>
                <Image src={Add} alt="Register" width={30} height={30}/>
                <p className={styles.label}>Cadastrar administrador</p>
            </div>

            <div className={styles.search}>
                <Image src={Search} alt="Search" width={25} height={25}/>
                <Input label="" placeholder="Buscar administrador" className={styles.inputSearch}/>
            </div>
        </nav>
    );
}