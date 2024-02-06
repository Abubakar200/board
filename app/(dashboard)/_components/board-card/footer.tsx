import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}
const Footer = ({
  title,
  authorLabel,
  createdLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };
  return (
    <div className="relative bg-white p-3">
      <p className="truncate text-[13px] max-w-[calc(100%-20px)]">{title}</p>
      <p
        className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground
       text-[11px] truncate"
      >
        {authorLabel}, {createdLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </button>
    </div>
  );
};

export default Footer;
