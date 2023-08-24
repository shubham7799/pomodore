import TomatoListItem from "../components/TomatoListItem";
import Header from "../components/header";
import AddTomato from "../components/AddTomato";

export default function Tomatos() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <AddTomato />
      <div className="container flex flex-col items-center space-y-[24px]">
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
          <TomatoListItem />
      </div>
    </div>
  )
}