import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";
const MAX_USER = 2;
const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUser = users.length > MAX_USER;
  return (
    <div className="absolute top-2 right-2 h-12 rounded-md flex items-center p-3 shadow-md">
      <div className="flex gap-2">
        {users.slice(0, MAX_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
          borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreUser && (
          <UserAvatar
            name={`${users.length - MAX_USER} more`}
            fallback={`+${users.length - MAX_USER}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 h-12 rounded-md flex items-center p-3 shadow-md w-[100px]" />
  );
};
