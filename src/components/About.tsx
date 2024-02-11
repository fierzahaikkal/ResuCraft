import { Statistics } from "./Statistics";
import about from "../assets/about.svg";
import { TextReveal } from "./motion/TextReveal";
import { Motion } from "./motion/Motion";
import { opacityIn } from "@/lib/variants";

export const About = () => {
  return (
    <Motion variants={opacityIn}>
      <section id="about" className="container py-24 sm:py-32">
        <div className="rounded-lg border bg-muted/50 py-12">
          <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
            <img
              src={about}
              alt=""
              className="w-[300px] rounded-lg object-contain"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl font-bold md:text-4xl">
                  <TextReveal
                    text="Tentang"
                    className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent"
                  />
                  <TextReveal text="Perusahaan" />
                </h2>
                <TextReveal
                  text="ResuCraft adalah platform pembuat resume online yang inovatif dan mudah digunakan, dirancang untuk membantu para pencari kerja membuat resume profesional dalam hitungan menit. ResuCraft memungkinkan Anda untuk membuat resume yang menonjol dan meningkatkan peluang Anda untuk mendapatkan pekerjaan impian Anda. Bergabunglah dengan ResuCraft hari ini dan mulailah membangun karier yang sukses."
                  className="mt-4 text-xl text-muted-foreground"
                />
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </Motion>
  );
};
