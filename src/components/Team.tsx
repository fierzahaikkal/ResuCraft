import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { TextReveal } from "./motion/TextReveal";
import { Motion } from "./motion/Motion";
import { fromBottom, opacityIn } from "@/lib/variants";

const teamList = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEljt1TTN_XTA/profile-displayphoto-shrink_800_800/0/1698132288654?e=1712793600&v=beta&t=tiTGvhKlfdWZViML6SrTt_Oc8BEXNnHFBzzPDrbq3fI",
    name: "Rafli Satya Dewanto",
    position: "Developer",
    description: "Intern Tech Dev Frontend @ Erajaya",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/rd09/" },
      {
        name: "GitHub",
        url: "https://github.com/Rafli-Dewanto",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQGrCNooaWVTbQ/profile-displayphoto-shrink_800_800/0/1707481175947?e=1712793600&v=beta&t=7yp7uNkkJfeJ1hOOloC4PSWmFmzX7Q-PrfMDupokfuo",
    name: "Mikael Agung",
    position: "Developer",
    description: "Student at University Of Gunadarma | Front-End Developer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/mikaelagung/" },
      {
        name: "GitHub",
        url: "https://github.com/m1kael1",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQHfALP8yqQtmA/profile-displayphoto-shrink_800_800/0/1697986658258?e=1712793600&v=beta&t=RXkRcsql5qQbFa3aEj0CsgLaApU-49SzoIOGEnCrReE",
    name: "Fierza Heikkal",
    position: "Developer",
    description:
      "CS Student at Gunadarma University | Head of Neotic.id | Fullstack Web Developer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/fierzahaikkal/" },
      {
        name: "GitHub",
        url: "https://github.com/fierzahaikkal",
      },
    ],
  },
] as const;

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "GitHub":
        return <Github size="20" />;
    }
  };

  return (
    <section id="team" className="container py-10">
      <h2 className="text-3xl font-bold md:text-4xl">
        <TextReveal
          text="Tim padi yang"
          className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent"
        />
        <TextReveal text="berdedikasi" />
      </h2>

      <p className="mb-10 mt-4 text-xl text-muted-foreground">
        <TextReveal text="Dikembangkan oleh para ilmu padi yang kebakaran" />
        <Motion variants={opacityIn}>
          🧯💨🌾
          <span className="relative">
            🔥<span className="absolute left-0 animate-ping">🔥</span>
          </span>
        </Motion>
      </p>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {teamList.map(
          (
            { imageUrl, name, position, socialNetworks, description },
            index,
          ) => (
            <Motion variants={fromBottom} custom={index} className="flex">
              <Card
                key={name}
                className="relative mt-8 flex w-full flex-col items-center justify-center bg-muted/50"
              >
                <CardHeader className="mt-8 flex items-center justify-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-2 text-center">
                  <p>{description}</p>
                </CardContent>

                <CardFooter>
                  {socialNetworks.map(({ name, url }) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </Motion>
          ),
        )}
      </div>
    </section>
  );
};
