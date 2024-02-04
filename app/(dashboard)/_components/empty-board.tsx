import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "untitle",
    })
      .then((id) => {
        toast.success("Board created.");
      })
      .catch(() => {
        toast.error("Failed to create the board");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src="/note.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
