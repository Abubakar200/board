import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src="/empty-search.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">No result found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
