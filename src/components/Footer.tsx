import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-3 xl:grid-cols-6">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="flex text-xl font-bold">
            <LogoIcon />
            ResuCraft
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Ikuti Kami</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              GitHub
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Linkedin
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Halaman</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Fitur
            </a>
          </div>

          <div>
            <a href="#team" className="opacity-60 hover:opacity-100">
              Team
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 ResuCraft made with ❤️{" "}
          <a
            target="_blank"
            href="#"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            Tim Ilmu Padi 🌾
          </a>
        </h3>
      </section>
    </footer>
  );
};
