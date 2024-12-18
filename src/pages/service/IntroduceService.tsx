interface IProps {
  title: string;
  description: string;
  descriptionImage?: string;
  additionImages?: string[];
}

export default function IntroduceService({
  title,
  description,
  descriptionImage,
  additionImages,
}: IProps) {
  return (
    <section className="container mx-auto lg:text-secondary">
      <h2 className="text-[32px] max-w-[100%] md:max-w-[70%] text-primary text-justify font-bold mb-5">
        {title}
      </h2>

      {descriptionImage && (
        <img src={descriptionImage} alt={title} className="mb-5 mx-auto" />
      )}

      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="lg:text-shadow lg:text-secondary text-justify mb-4 space-y-3"
      />

      {additionImages &&
        additionImages.map((image) => (
          <img key={image} src={image} alt={title} className="mb-5 mx-auto" />
        ))}
    </section>
  );
}
