
interface IProps {
  additionContent: {
    title: string;
    content: string;
  }
}

export default function AdditionContent({additionContent}: IProps) {
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px]  max-w-[70%] text-primary font-bold mb-5">
        {additionContent?.title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: additionContent?.content || "" }}
        className="lg:text-shadow lg:text-secondary mb-4 space-y-3"
      />
    </section>
  );
}
