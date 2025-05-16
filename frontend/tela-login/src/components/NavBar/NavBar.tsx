import styles from "@/components/NavBar/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.option}>Administradores</h1>
            <h1 className={styles.option}>Permissões</h1>
            <h1 className={styles.option}>Publicações</h1>
        </nav>
    );
}