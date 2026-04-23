import { Star } from "lucide-react";

const Rating = ({ value, reviews, size = "sm" }: { value: number; reviews?: number; size?: "sm" | "md" }) => {
  const px = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`${px} ${i <= Math.round(value) ? "fill-accent text-accent" : "text-muted"}`}
          />
        ))}
      </div>
      <span className="font-medium text-foreground">{value.toFixed(1)}</span>
      {reviews !== undefined && <span>({reviews})</span>}
    </div>
  );
};

export default Rating;
