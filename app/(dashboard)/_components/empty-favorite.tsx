import Image from "next/image";

const EmptyFavorite = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src="/empty-favorites.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">No favorite board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting the board
      </p>
    </div>
  );
};

export default EmptyFavorite;
