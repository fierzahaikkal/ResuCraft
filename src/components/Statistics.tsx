export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "270K+",
      description: "Pengguna",
    },
    {
      quantity: "87K+",
      description: "Pelanggan",
    },
    {
      quantity: "50K+",
      description: "Downloads",
    },
    {
      quantity: "1",
      description: "Produk",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
