import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { TextReveal } from "./motion/TextReveal";
import { Motion } from "./motion/Motion";
import { opacityIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 overflow-hidden py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <TextReveal
              text="ResuCraft"
              className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] bg-clip-text text-transparent"
            />
            <TextReveal text="Master" />
          </h1>
          <TextReveal text="Your" />
          <h2 className="inline">
            <TextReveal
              text="Career"
              className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent"
            />
            <TextReveal text="Narrative" />
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          <TextReveal text="Achieve Your Goals with Our Intuitive Resume Tool!" />
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Motion variants={opacityIn}>
            <Button className="w-full md:w-1/3">Buat CV mu sekarang!</Button>
          </Motion>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
