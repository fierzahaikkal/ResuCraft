import Counter from "./motion/Counter";
import { TextReveal } from "./motion/TextReveal";

export const Statistics = () => {
  const stats = [
    {
      quantity: 2700,
      description: "Pengguna",
    },
    {
      quantity: 87000,
      description: "Pelanggan",
    },
    {
      quantity: 50000,
      description: "Downloads",
    },
    {
      quantity: 1,
      description: "Produk",
    },
  ] as const;

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl ">
              <Counter value={quantity} />
            </h2>
            <p className="text-xl text-muted-foreground">
              <TextReveal text={description} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
