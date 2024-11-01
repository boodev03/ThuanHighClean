interface IProps {
  additionContent: {
    title: string;
    content: string;
    beforeImages?: string[];
  };
}

export default function AdditionContent({ additionContent }: IProps) {
  return (
    <section className="container mx-auto">
      {additionContent.beforeImages?.map((image) => (
        <img key={image} src={image} alt={image} />
      ))}
      <h2 className="text-[32px] max-w-[100%] md:max-w-[70%] text-primary text-justify font-bold mb-5">
        {additionContent?.title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: additionContent?.content || "" }}
        className="lg:text-shadow lg:text-secondary text-justify mb-4 space-y-3"
      />
    </section>
  );
}
