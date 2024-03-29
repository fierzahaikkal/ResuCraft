import { Radar } from "lucide-react";
import { Motion } from "./motion/Motion";
import { opacityIn } from "@/lib/variants";

const sponsors = [
  {
    icon: <Radar size={34} />,
    name: "Sponsor 1",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 2",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
] as const;

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container">
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        Mitra yang mempercayai produk kami
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }, index) => (
          <Motion variants={opacityIn} custom={index}>
            <div
              key={name}
              className="flex items-center gap-1 text-muted-foreground/60"
            >
              <span>{icon}</span>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
          </Motion>
        ))}
      </div>
    </section>
  );
};
