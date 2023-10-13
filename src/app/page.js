import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

function page() {
  // display: flex;
  // align-items: center;
  // gap: 100px;
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-[20px] md:gap-[100px] text-center md:text-left`}
    >
      <div className={`${styles.item} order-2 md:order-1 mb-10`}>
        <h1 className={`text-6xl ${styles.title}`}>
          Better design for your digital products.
        </h1>
        <p className="text-2xl">
          Turning your Idea into Reality, We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portofolio" text="See Our Works" />
      </div>
      <div className={`${styles.item} order-1 md:order-2`}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default page;
