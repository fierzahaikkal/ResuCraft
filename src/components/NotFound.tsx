import { Link } from "react-router-dom";
import notFoundImage from "../assets/huft.svg";
import { Navbar } from "./Navbar";

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
            <h1 className="block items-center text-8xl font-bold">404</h1>
            <h3 className="text-lg">Not Found</h3>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Huftt..</h1>
            <h3 className="text-xl">Sepertinya anda tersesat saat mengakses</h3>
            <Link to={"/"} className="text-xl text-primary">
              Kembali ke halaman utama
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
