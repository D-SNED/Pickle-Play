// import { motion } from "framer-motion";
import { styles } from "../styles";
import { Pickleball } from "./Pickleball";

const PlayPickleball = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-player-pattern bg-cover bg-no-repeat bg-center">
          <section className="relative w-full h-screen mx-auto">
            <div
              className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
              <div>
                <h1 className={`${styles.mainHeadText} orange-text-gradient`}>
                  Who we are
                </h1>
                <p
                  className={`${styles.mainSubText} mt-2 orange-text-gradient-100`}
                >
                  Passionate Software Engineers who enjoy pickleball!{" "}
                  <br className="sm:block hidden" /> Join us by signing up,
                  creating teams, joining tournaments, finding locations to
                  play!
                </p>
              </div>
            </div>
            <br />
            <br />
            <Pickleball />
          </section>
        </div>
      </div>
    </>
  );
};

export default PlayPickleball;
