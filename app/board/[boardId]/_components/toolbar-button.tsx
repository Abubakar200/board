import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisable?: boolean;
}
const ToolbarButton = ({
  label,
  icon:Icon,
  onClick,
  isActive,
  isDisable,
}: ToolbarButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisable}
        variant={isActive ? "boardActive" : "board"}
        onClick={onClick}
        size={"icon"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolbarButton