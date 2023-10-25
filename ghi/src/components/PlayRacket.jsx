// import { motion } from "framer-motion";
import { styles } from "../styles";
import { Racket } from "./Racket";

const PlayRacket = () => {
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
                  Hi, are you ready to play?
                </h1>
                <p
                  className={`${styles.mainSubText} mt-2 orange-text-gradient-100`}
                >
                  Become a pickleball player! <br className="sm:block hidden" />{" "}
                  Create teams, join tournaments, find locations!
                </p>
              </div>
            </div>
            <br />
            <br />
            <Racket />
          </section>
        </div>
      </div>
    </>
  );
};

export default PlayRacket;
