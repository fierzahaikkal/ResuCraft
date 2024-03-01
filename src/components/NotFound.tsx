import { Link } from "react-router-dom";
import notFoundImage from "../assets/huft.svg";
import { Navbar } from "./Navbar";
import { TextReveal } from "./motion/TextReveal";

export const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="grid min-h-screen grid-cols-1 items-center md:grid-cols-2">
        <img
          src={notFoundImage}
          alt="a man lookig up sky and his hand in pocket"
          className="h-[500px] md:ml-auto"
        />
        <div className="mb-5 flex flex-col items-center gap-y-12 md:mr-auto">
          <div className="flex flex-col items-center">
            <h1 className="block items-center text-8xl font-bold">
              <TextReveal text="404" />
            </h1>
            <h3 className="text-lg">
              <TextReveal text="Not Found." />
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">
              <TextReveal text="Huftt.." />
            </h1>
            <h3 className="text-xl">
              <TextReveal text="Sepertinya anda tersesat saat mengakses" />
            </h3>
            <Link to={"/"} className="text-xl text-primary">
              <TextReveal text="Kembali ke halaman utama" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
