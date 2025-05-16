import Header from "@/components/Header/header";
import styles from "./main.module.css"
import GreenLeftBar from "@/components/GreenLeftBar/GreenLeftBar";
import NavBar from "@/components/NavBar/NavBar";
import Menu from "@/components/Menu/Menu";

export default function main() {
    return (
        <div className={styles.container}>
          <Header />
          <div className={styles.main}>
            <GreenLeftBar />

            <div className={styles.content}>
              <NavBar />
              <Menu />
              <div className={styles.data}>
                <h1>Principal</h1>
              </div>
            </div>
          </div>
        </div>
    );
}