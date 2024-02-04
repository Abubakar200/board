import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";
import Image from "next/image";
 interface ItemProps{
    id: string,
    name: string,
    imageUrl: string
 }

const Item = ({
    id,
    name,
    imageUrl
}: ItemProps) => {
    const {setActive} = useOrganizationList();
    const {organization} = useOrganization();

    const isActive = organization?.id === id;

    const onClick=()=>{
        if(!setActive) return;

        setActive({organization: id})
    }
    return ( 
        <div className="aspect-square relative">
            <Hint label={name} side="right" sideOffset={18} align="start">
            <Image
            alt={name}
            src={imageUrl}
            fill
            onClick={onClick}
            className={cn("rounded-md opacity-75 hover:opacity-100 transition cursor-pointer",
            isActive && "opacity-100"
            )}
            />
            </Hint>
        </div>
     );
}
 
export default Item;