import { Skeleton } from "@/components/ui/skeleton";

const Participants = () => {
  return (
    <div className="absolute top-2 right-2 h-12 rounded-md flex items-center p-3 shadow-md">
        List of members
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton(){
  return (
    <div className="absolute top-2 right-2 h-12 rounded-md flex items-center p-3 shadow-md w-[100px]" />
        
  )

}
