import { FaPlus } from "react-icons/fa";
import { useStore } from "../store";

const Sidebar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-60 bg-[#F9F9F9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists</h3>
          <button className="flex justify-center items-center mt-[1rem]">
            <FaPlus className="mr-2" /> List
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">
            Workspaces
          </h3>
          <button className="flex justify-center items-center mt-[1rem]">
            <FaPlus className="mr-2" /> Workspaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
