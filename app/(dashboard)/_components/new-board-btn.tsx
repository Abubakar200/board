import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardBtnProps {
  orgId: string;
  disabled?: boolean;
}
const NewBoardBtn = ({ orgId, disabled }: NewBoardBtnProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();
  const onClick = () => {
    mutate({ orgId, title: "untitle" })
      .then((id) => {
        toast.success("Board created!");
        router.push(`/board/${id}`)
      })
      .catch(() => {
        toast.error("Failed to created the board");
      });
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] rounded-lg bg-blue-600 hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600  cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-white font-light text-sm">New Board</p>
    </button>
  );
};

export default NewBoardBtn;
