import notFound from "/not-found.svg";

export default function NotFound() {
  return (
    <div className="my-[60px] flex justify-center">
      <img src={notFound} />
    </div>
  );
}
