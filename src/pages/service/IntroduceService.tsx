interface IProps {
  title: string;
  description: string
}

export default function IntroduceService({title, description}: IProps) {
  return (
    <section className="container mx-auto lg:text-secondary">
      <h2 className="text-[32px] max-w-[70%] text-primary font-bold mb-5">
        {title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: description}}
        className="lg:text-shadow lg:text-secondary mb-4 space-y-3"
      />
    </section>
  );
}
