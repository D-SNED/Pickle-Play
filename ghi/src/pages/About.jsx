import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { ourteams } from "../constants";
import OurTeamCard from "./OurTeamCard";
import { PlayPickleball } from "../components";

const About = () => {
  return (
    <>
      <PlayPickleball />
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
      <div className="flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <br />
          <br />
          <div className="flex justify-center items-center">
            📣{" "}
            <strong>
              Shout out to our amazing Hack Reactor Instructors, SEIRs, and
              Cohort Lead!
            </strong>
            🎉
          </div>
          <br />
          We want to extend a huge thank you to everyone at Hack Reactor for
          their unwavering dedication and support throughout our learning
          journey. Your tireless efforts in providing us with cutting-edge
          curriculum, mentorship, and genuine care for our success have
          empowered us to embark on exciting careers in the tech industry.
          <br />
          <br />
          <div className="flex justify-center items-center">
            ❤️ Keep shining and inspiring future developers as you have done for
            us. ❤️
          </div>
          <br />
          <div className="flex justify-center items-center">
            ✨<strong>SPECIAL SHOUTOUTS!</strong>✨
          </div>
          <br />
          ⭐ Jordan Bott - Thank you for always being there to lend a helping
          hand and for always being so positive and supportive. We appreciate
          you more than you know!
          <br />
          <br />
          ⭐ Bart Dorsey - You are a lifesaver! We don't know what we would have
          done without you. Thank you for your amazing problem solving skills
          and for always being willing to go the extra mile.
          <br />
          <br />
        </motion.p>
      </div>
      <br />
      <br />
    </>
  );
};

export default About;
