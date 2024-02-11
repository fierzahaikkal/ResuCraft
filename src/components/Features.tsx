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

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
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
];

export const Features = () => {
  return (
    <section id="features" className="container space-y-8 py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-center lg:text-4xl">
        Banyak{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Fitur Menarik
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps) => (
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
        ))}
      </div>
    </section>
  );
};
