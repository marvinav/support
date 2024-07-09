import { PropsWithChildren } from "react";

import styles from './index.module.css';

type Props = PropsWithChildren<{
    title: string;
    footer: string;
}>

export const Page = ({title, footer, children}: Props) => {
    return <div className={styles.page}>
        <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
        <footer>{footer}</footer>
    </div>
}