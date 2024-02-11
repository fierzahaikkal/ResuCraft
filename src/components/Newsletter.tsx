import { opacityIn } from "@/lib/variants";
import { Motion } from "./motion/Motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TextReveal } from "./motion/TextReveal";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <Motion variants={opacityIn}>
        <hr className="mx-auto w-11/12" />
      </Motion>
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl font-bold md:text-5xl">
          <TextReveal text="Mari Berlangganan" />
          <TextReveal
            text="Newsletter"
            className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent"
          />
        </h3>
        <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
          <TextReveal text="Berlangganan ke newsletter kami untuk mendapatkan update terbaru" />
        </p>

        <Motion variants={opacityIn}>
          <form
            className="mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12"
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="abangku@ilmupadi.com"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="email"
            />
            <Button>Subscribe</Button>
          </form>{" "}
        </Motion>
      </div>

      <Motion variants={opacityIn}>
        <hr className="mx-auto w-11/12" />
      </Motion>
    </section>
  );
};
