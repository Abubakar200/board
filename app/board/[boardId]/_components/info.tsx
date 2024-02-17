import Actions from "@/components/actions";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-model";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const Pipe = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};
const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex shadow-md items-center">
      <Hint label="Go to Boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Board Logo" width={40} height={40} />
            <span
              className={cn(
                "text-black font-semibold text-xl ml-2",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <Pipe />
      <Hint label="Edit tile" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant={"board"}
          className="text-base font-normal px-2"
        >
          {data.title}
        </Button>
      </Hint>
      <Pipe />
      <Actions id={data._id} title={data.title} side="bottom" sideOffSet={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button variant={"board"} size={"icon"}>
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex shadow-md items-center w-[300px]" />
  );
};
