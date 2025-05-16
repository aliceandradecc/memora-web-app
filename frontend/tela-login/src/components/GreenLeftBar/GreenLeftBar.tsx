"use client";
import { useRouter } from "next/navigation";
import styles from "@/components/GreenLeftBar/greenLeftBar.module.css";
import Image from "next/image";
import LogoutImage from "@/assets/logout.png";

export default function GreenLeftBar() {

    const router = useRouter();

    function Logout() {
        router.push("/");
    }
    

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={Logout}>
                <Image src={LogoutImage} alt="Logout"/>
            </button>
        </div>
    );
}