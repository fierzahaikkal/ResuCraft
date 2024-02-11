import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D5603AQHY_jCbtPG8UA/profile-displayphoto-shrink_800_800/0/1697957892695?e=1712793600&v=beta&t=EoT3ZMycrnR6viZ7vIVpHNT3-ZvHFLh44TvIgEQrG4g",
    name: "Faiz Rizki Azmi",
    userName: "@misterizz",
    comment:
      "Makasih ResuCraft CV ku terpilih jadi Staff BEM terbaik!✨ -tetap ilmu padi",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D5603AQGa0Og7maNP-g/profile-displayphoto-shrink_800_800/0/1687706844809?e=1712793600&v=beta&t=oprd-RXzF3du9XkX6BbzsnCGUm2yB8l9Z4GcbkVa3-Y",
    name: "Indy Samshara",
    userName: "@maskot_nexie",
    comment: "Aku dijadiin stiker terus karena CV ini!👩🏻",
  },

  {
    image:
      "https://media.licdn.com/dms/image/D5603AQFFgZloBwHnKg/profile-displayphoto-shrink_800_800/0/1704596811877?e=1712793600&v=beta&t=ShsWiUqC4qPsCiVFC935RzRRkFipd_RVuPDZxSEh9lM",
    name: "Naurah Salma",
    userName: "@nrhslmm",
    comment: "CV ini membuat aku menyala bang!🔥",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D5603AQHAAnWzc38Pow/profile-displayphoto-shrink_800_800/0/1698143495181?e=1712793600&v=beta&t=aTYjvBCQrY_R7tAVwZiL9TlNTlD3soC_Apq7_WLtrCk",
    name: "Wardiansyah Fauzi",
    userName: "@maswarr",
    comment:
      "Keren idenya membuat CV lebih menarik dan rapih, ga rugi buat langganan!💵💵",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D5603AQFOcC7uhB_OJg/profile-displayphoto-shrink_800_800/0/1707406046992?e=1712793600&v=beta&t=468tf4VYG4LaZ9zsdj5NRAj-1QbgijyaMV2g6_dn5gU",
    name: "Arifin Ilham",
    userName: "@enteli",
    comment: "Cocok buat aku yang masih pemula, ga ribet buat bikin CV!🌍",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D5603AQGhkBDqQyRpGA/profile-displayphoto-shrink_800_800/0/1697986805177?e=1712793600&v=beta&t=IWwJE_KrGo9odDVGZTFXvOugfU82JLdvl7GQXwc0qIQ",
    name: "Faiz Arkan",
    userName: "@cuma_temen_kok",
    comment: "Aplikasi ini membantu aku berani ketemu calon mertua!🙏🏻",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Discover Why
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        ResuCraft
      </h2>

      <p className="pt-4 pb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
