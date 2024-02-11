import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apakah ResuCraft tersedia secara gratis?",
    answer: "Ya, ResuCraft adalah sebuah aplikasi gratis.",
    value: "item-1",
  },
  {
    question: "Bagaimana cara menggunakan ResuCraft?",
    answer:
      "ResuCraft sangat mudah digunakan. Anda cukup mendaftar, lalu mulai membuat resume Anda dengan mengikuti panduan yang disediakan.",
    value: "item-2",
  },
  {
    question:
      "Apakah saya perlu membayar untuk mendapatkan fitur tambahan di ResuCraft?",
    answer:
      "Tidak, ResuCraft menawarkan semua fitur secara gratis. Namun, kami juga memiliki opsi berlangganan untuk akses ke fitur-fitur premium.",
    value: "item-3",
  },
  {
    question: "Apakah ResuCraft memiliki dukungan pelanggan?",
    answer: "Ya, kami memiliki tim dukungan pelanggan yang siap membantu Anda.",
    value: "item-4",
  },
  {
    question: "Bagaimana cara mendapatkan bantuan teknis untuk ResuCraft?",
    answer:
      "Untuk bantuan teknis, Anda dapat menghubungi tim dukungan pelanggan kami melalui email atau obrolan langsung di aplikasi.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Pertanyaan yang Sering Diajukan{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          (FAQ)
        </span>
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">
        Masih memiliki pertanyaan?{" "}
        <a
          href="#"
          className="border-primary text-primary transition-all hover:border-b-2"
        >
          Hubungi kami
        </a>
      </h3>
    </section>
  );
};
