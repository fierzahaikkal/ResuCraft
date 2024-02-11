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

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEljt1TTN_XTA/profile-displayphoto-shrink_800_800/0/1698132288654?e=1712793600&v=beta&t=tiTGvhKlfdWZViML6SrTt_Oc8BEXNnHFBzzPDrbq3fI",
    name: "Rafli Satya Dewanto",
    position: "Developer",
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
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/fierzahaikkal/" },
      {
        name: "GitHub",
        url: "https://github.com/fierzahaikkal",
      },
    ],
  },
];

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
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="relative flex flex-col items-center justify-center mt-8 bg-muted/50"
            >
              <CardHeader className="flex items-center justify-center pb-2 mt-8">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute object-cover w-24 h-24 rounded-full -top-12 aspect-square"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
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
          )
        )}
      </div>
    </section>
  );
};
