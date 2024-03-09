import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { Motion } from "./motion/Motion";
import { fromBottom } from "@/lib/variants";

const features = [
  {
    icon: <MedalIcon />,
    title: "Aksesibilitas",
    description:
      "Bangun resume Anda dengan mudah dan cepat, di mana pun Anda berada. Dapatkan akses tanpa batas kapan saja.",
  },
  {
    icon: <MapIcon />,
    title: "Komunitas",
    description:
      "Bergabunglah dengan komunitas kami yang ramah, berbagi pengalaman, dan mendapatkan masukan untuk meningkatkan resume Anda.",
  },
  {
    icon: <PlaneIcon />,
    title: "Skalabilitas",
    description:
      "Resume Anda akan terlihat profesional dan rapi, tidak peduli seberapa besar atau kecilnya pekerjaan impian Anda.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamifikasi",
    description:
      "Kami memberikan pengalaman yang menyenangkan dalam membangun resume Anda, dengan hadiah dan penghargaan untuk pencapaian tertentu.",
  },
] as const;

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl ">
        <span>Bagaimana Cara </span>
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Kerjanya?
        </span>
        <br />
        <p>Panduan Langkah-demi-Langkah</p>
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        Bangun resume Anda dengan mudah dan cepat menggunakan aplikasi kami.
        Dapatkan pekerjaan impian Anda sekarang!
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }, index) => (
          <Motion variants={fromBottom} className="flex" custom={index}>
            <Card key={title} className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid place-items-center gap-4">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          </Motion>
        ))}
      </div>
    </section>
  );
};
