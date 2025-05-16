"use client";
import styles from "@/components/List/list.module.css";
import Image from "next/image";
import Edit from "@/assets/edit.png";
import Trash from "@/assets/trash.png";
import Avatar from "@/assets/user-profile.png";
import Shield from "@/assets/shield.png";
import Icon from "@/assets/image-add.png";

type ListProps = {
    name: string,
    icon: string
}


export default function List({name, icon}: ListProps) {

    let image = Avatar;


    if(icon == "Avatar") {
        image = Avatar;
    } else if(icon == "Shield") {
        image = Shield;
    } else if(icon == "Icon") {
        image = Icon;
    }
    

    return (
        <li className={styles.item} onClick={() =>{}}>
            <div className={styles.user}>
                <Image src={image} alt="Avatar"/>
                <p>{name}</p>
            </div>
            <div className={styles.options}>
                <button className={styles.button}><Image src={Edit} alt="Edit"/></button>
                <button className={styles.button}><Image src={Trash} alt="Trash"/></button>
            </div>  
        </li>
    );
}