import { Navbar } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>PicklePlay!</h2>
          <p className={styles.sectionSubText}>Just do it!</p>
        </motion.div>
        <br />
      </div>
      <div className="flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to our innovative pickleball web application! Designed with
          pickleball enthusiasts in mind, our application offers a seamless and
          user-friendly experience for players of all levels. Whether you're a
          beginner looking to learn the game or a seasoned pro seeking to
          enhance your skills, our web application has you covered.
        </motion.p>
      </div>
      <br />
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <br />
          <br />
          <strong>Key Features:</strong>
          <br />
          <br />
          <strong>Player Profiles:</strong> Create your personalized player
          profile and showcase your pickleball journey. Add your achievements,
          track your progress, and connect with fellow players from around the
          world.
          <br />
          <br />
          <strong>Match Finder:</strong> Looking for a challenging match? Our
          match finder feature allows you to search for players in your area
          based on skill level, availability, and preferred playing style. Say
          goodbye to the hassle of finding suitable opponents!
          <br />
          <br />
          <strong>Skill Development:</strong> Elevate your game with our
          comprehensive skill development resources. Access instructional
          videos, drills, and tips from top pickleball coaches and players.
          Improve your technique, strategy, and overall performance on the
          court.
          <br />
          <br />
          <strong>Tournament Management:</strong> Organize and participate in
          pickleball tournaments seamlessly through our web application. Create
          custom brackets, manage registrations, and keep track of scores and
          standings in real-time. Experience the excitement of competitive play
          like never before.
          <br />
          <br />
          <strong>Community Hub:</strong> Connect with a vibrant and supportive
          pickleball community through our community hub. Join discussions,
          share experiences, and stay updated on the latest news, events, and
          trends in the world of pickleball.
          <br />
          <br />
          Whether you're a casual player or a dedicated pickleball enthusiast,
          our web application is your ultimate companion on your pickleball
          journey. Join our growing community today and take your pickleball
          experience to the next level!
          <br />
          <br />
          Don't wait any longer! Start exploring the world of pickleball with
          our web application now!
        </motion.p>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
