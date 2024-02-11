import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 py-20 md:grid-cols-3 xl:grid-cols-6 gap-x-12 gap-y-8">
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
          <h3 className="text-lg font-bold">Platforms</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Web
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Mobile
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Desktop
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
            <a href="#" className="opacity-60 hover:opacity-100">
              Harga
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container text-center pb-14">
        <h3>
          &copy; 2024 Landing page made with ❤️{" "}
          <a
            target="_blank"
            href="#"
            className="transition-all text-primary border-primary hover:border-b-2"
          >
            Leo Miranda
          </a>
        </h3>
      </section>
    </footer>
  );
};
