
interface IProps {
  title: string;
  content: string
}

export default function Question({title, content}: IProps) {
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px] max-w-[100%]  md:max-w-[70%] text-primary font-bold mb-5">
        {title}
      </h2>

      <div
        dangerouslySetInnerHTML={{ __html: content || "" }}
        className="lg:text-shadow lg:text-secondary text-justify mb-4 space-y-3"
      />
    </section>
  );
}
