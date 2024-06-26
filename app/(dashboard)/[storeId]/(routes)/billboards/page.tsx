import { BillboardClient } from "./components/client";

const BillBoardsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-5">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillBoardsPage;
