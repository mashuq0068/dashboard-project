import { Button } from "antd";
import Layout from "antd/es/layout/layout";
import styles from './page.module.scss'
import Link from "next/link";





export default function Home() {
  
 
  return (
    <main className={styles.main}>
    <Link href='/dashboard'>
    <Button className={styles.btn}>
      Go to dashboard
     </Button>
    </Link>
     
    </main>
  );
}
