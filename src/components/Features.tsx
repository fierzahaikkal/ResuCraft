import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import responsive from "../assets/responsive.svg";
import intuitive from "../assets/intuitive.svg";
import ai from "../assets/ai.svg";
import { TextReveal } from "./motion/TextReveal";
import { Motion } from "./motion/Motion";
import { fromBottom } from "@/lib/variants";

const features = [
  {
    title: "Responsive Design",
    description:
      "Membuat desain yang responsif memungkinkan aplikasi Anda untuk menyesuaikan tampilannya dengan berbagai perangkat, mulai dari desktop hingga ponsel pintar.",
    image: responsive,
  },
  {
    title: "Intuitive user interface",
    description:
      "Antarmuka pengguna yang intuitif membantu pengguna untuk dengan mudah berinteraksi dengan aplikasi Anda tanpa mengalami kebingungan atau kesulitan.",
    image: intuitive,
  },
  {
    title: "Light & Dark mode",
    description:
      "Mode terang dan gelap memberikan fleksibilitas kepada pengguna untuk memilih tampilan yang sesuai dengan preferensi mereka atau kondisi pencahayaan.",
    image: ai,
  },
] as const;

export const Features = () => {
  return (
    <section id="features" className="container space-y-8 py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-center lg:text-4xl">
        <TextReveal text="Banyak" />
        <TextReveal
          text="Fitur Menarik"
          className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent"
        />
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }, index) => (
          <Motion variants={fromBottom} custom={index} className="flex">
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>

              <CardFooter>
                <img
                  src={image}
                  alt="About feature"
                  className="mx-auto w-[200px] lg:w-[300px]"
                />
              </CardFooter>
            </Card>
          </Motion>
        ))}
      </div>
    </section>
  );
};
