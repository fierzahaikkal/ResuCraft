import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { Motion } from "./motion/Motion";
import { fromBottom, fromLeft, fromRight, fromTop } from "@/lib/variants";

export const HeroCards = () => {
  return (
    <div className="relative grid grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2">
      <Motion variants={fromBottom}>
        {/* Pricing */}
        <Card className="w-fit px-[-2rem] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="item-center flex justify-between">
              Gratis
              <Badge variant="secondary" className="text-sm text-primary">
                Paling Populer
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">0 IDR</span>
              <span className="text-muted-foreground"> /bulan</span>
            </div>
            <CardDescription>Untuk pelajar dan pencari kerja</CardDescription>
          </CardHeader>

          <CardContent>
            <Button className="w-full">Mulai uji coba gratis</Button>
          </CardContent>

          <hr className="m-auto mb-4 w-4/5" />
          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                "CV Gratis",
                "Ekspor format dokumen portabel",
                "Tanpa login",
              ].map((benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-primary" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Motion>

      <div className="space-y-8">
        <Motion variants={fromTop} className="block">
          {/* Service */}
          <Card className="shadow-black/10 drop-shadow-xl dark:shadow-white/10">
            <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
              <div className="mt-1 rounded-2xl bg-primary/20 p-1">
                <LightBulbIcon />
              </div>
              <div>
                <CardTitle>Fitur</CardTitle>
                <CardDescription className="text-md mt-2">
                  Buat CV sistem pelacakan pelamar dengan cepat & mudah
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Motion>
        <Motion variants={fromRight} className="block">
          {/* Testimonial */}
          <Card className="shadow-black/10 drop-shadow-xl dark:shadow-white/10">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage
                  alt=""
                  src="https://media.licdn.com/dms/image/D5603AQGhkBDqQyRpGA/profile-displayphoto-shrink_800_800/0/1697986805177?e=1712793600&v=beta&t=IWwJE_KrGo9odDVGZTFXvOugfU82JLdvl7GQXwc0qIQ"
                />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">Faiz Arkan</CardTitle>
                <CardDescription>@cuma_teman_kok</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              Aplikasi ini membantu aku berani ketemu calon mertua!🙏🏻
            </CardContent>
          </Card>
        </Motion>
      </div>
    </div>
  );
};
