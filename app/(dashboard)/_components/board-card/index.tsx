"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  authorId: string;
  imageUrl: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}
const BoardCard = ({
  id,
  title,
  authorId,
  imageUrl,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavorite, pending: pendingFavotire } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnFavorite, pending: pendingUnFavotire } = useApiMutation(
    api.board.unfavorite
  );

  const toggle = () => {
    if (isFavorite) {
      onUnFavorite({ id }).catch(() => toast.error("FAILED to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("FAILED to favorite"));
    }
  };
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="bg-amber-50 relative flex-1">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity py-2 px-3 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdLabel={createdLabel}
          onClick={toggle}
          disabled={pendingFavotire || pendingUnFavotire}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
