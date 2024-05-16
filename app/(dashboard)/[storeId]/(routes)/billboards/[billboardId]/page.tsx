import prismadb from "@/lib/prismadb";

const BillBoardsPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return <div>Existing Billboard:{billboard?.label}</div>;
};

export default BillBoardsPage;
