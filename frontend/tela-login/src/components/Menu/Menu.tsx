import styles from "@/components/Menu/menu.module.css";
import Image from "next/image";
import Add from "@/assets/add-square.png";
import Search from "@/assets/search.png";
import Input from "../Input/Input";


type Menuprops = {
    page: string
}


export default function Menu({page}: Menuprops) {

    let title = "Cadastrar admnistrador";


    if(page == "administrador") {
        title = "Cadastrar admnistrador";
    } else if(page == "permissao") {
        title = "Criar nova permissão";
    } else if(page == "publicacao") {
        title = "Adicionar nova publicação";
    }

    return (
        <nav className={styles.container}>
            <button className={styles.register}>
                <Image src={Add} alt="Register" width={30} height={30}/>
                <p className={styles.label}>{title}</p>
            </button>

            <div className={styles.search}>
                <Image src={Search} alt="Search" width={25} height={25}/>
                <Input label="" placeholder="Buscar administrador" className={styles.inputSearch}/>
            </div>
        </nav>
    );
}