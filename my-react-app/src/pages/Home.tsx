import styles from "../styles/Home.module.css";

const HomePage = () => {
  const projects = [
    {
      title: "โครงการเพาะปลูกอัจฉริยะ",
      description: "ช่วยเกษตรกรวางแผนการเพาะปลูกด้วยข้อมูลสภาพอากาศและดิน",
    },
    {
      title: "แอปพลิเคชันวิเคราะห์โรคพืช",
      description: "ช่วยเกษตรกรตรวจสอบและรักษาพืชผลจากโรคภัย",
    },
    {
      title: "แพลตฟอร์มเชื่อมโยงตลาดออนไลน์สำหรับเกษตรกร",
      description: "ช่วยให้เกษตรกรสามารถขายผลิตผลโดยตรงสู่ผู้บริโภค",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <h1>AgriTech Solutions</h1>
        <p>สร้างสรรค์เทคโนโลยีเพื่อเกษตรกรยุคใหม่</p>
      </header>
      <section className={styles.section}>
        <h2>เกี่ยวกับเรา</h2>
        <p>
          เราพัฒนาแอปพลิเคชันที่ช่วยเกษตรกรในการจัดการทรัพยากร
          การวางแผนการเพาะปลูก และการคาดการณ์สภาพอากาศ
          เพื่อป้องกันความเสียหายจากสภาพภูมิอากาศที่ไม่แน่นอน
        </p>
      </section>
      <section className={styles.section}>
        <h2>ผลงานของเรา</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.title} - </strong>
              {project.description}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default HomePage;
