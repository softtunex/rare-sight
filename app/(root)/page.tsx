import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <>
      <div className="m-16">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </>
  );
};
export default SetupPage;
