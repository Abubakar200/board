import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <aside className="flex z-[1] text-white h-full w-[60px] bg-blue-900 left-0 p-3 gap-y-2 flex-col fixed">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
