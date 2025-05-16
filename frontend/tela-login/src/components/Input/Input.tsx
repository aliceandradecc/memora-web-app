import styles from "@/components/Input/input.module.css";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
    label: string,
}

export default function Input(props: InputProps) {
    return (
        <div className={styles.container}>
            <label className={styles.userName}>{props.label}</label>
            <input className={styles.input} {...props} />
        </div>
    );
}