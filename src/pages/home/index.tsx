import Assurance from "./Assurance";
import CustomerList from "./CustomerList";
import CustomerReview from "./CustomerReview";
import HighlightedCustomer from "./HighlightedCustomer";
import { HomeCarousel } from "./HomeCarousel";
import ServiceIntroduce from "./ServiceIntroduce";

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <ServiceIntroduce />
      <Assurance />
      <CustomerReview />
      <CustomerList />
      <HighlightedCustomer />
    </>
  );
}
