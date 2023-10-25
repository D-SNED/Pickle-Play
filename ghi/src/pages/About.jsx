import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { ourteams } from "../constants";
import OurTeamCard from "./OurTeamCard";
import { PlayCourt } from "../components";

const About = () => {
  return (
    <>
      <PlayCourt />
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Meet our team!</p>
            <h2 className={styles.sectionHeadText}>
              What's your favorite competitive quote?
            </h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {ourteams.map((ourteam, index) => (
            <OurTeamCard key={ourteam.name} index={index} {...ourteam} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
