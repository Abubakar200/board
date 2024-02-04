"use client";

import { useQuery } from "convex/react";
import EmptyBoard from "./empty-board";
import EmptyFavorite from "./empty-favorite";
import EmptySearch from "./empty-search";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import NewBoardBtn from "./new-board-btn";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });
  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorites boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-8 pb-10">
          <NewBoardBtn orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data?.length) {
    return <EmptyBoard />;
  }
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorites boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mt-8 pb-10">
        <NewBoardBtn orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            authorId={board.authorId}
            imageUrl={board.imageUrl}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
