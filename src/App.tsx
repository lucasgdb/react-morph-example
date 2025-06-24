import { TransitionCard } from "./components/TransitionCard";
import cards from "@/constants/cards.json";

export function App() {
  return (
    <div className="p-4">
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] lg:[grid-template-columns:repeat(3,minmax(300px,1fr))]">
        {cards.map((card) => (
          <TransitionCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
