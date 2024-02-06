import { Skeleton } from "@/components/ui/skeleton";
const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex shadow-md items-center">
      Info
    </div>
  );
};

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex shadow-md items-center w-[300px]" />
  );
};
