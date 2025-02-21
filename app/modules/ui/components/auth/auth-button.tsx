import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";

const AuthButton = () => {
  return (
    <Button
      variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border-blue-600 rounded-full shadow-sm "
    >
      <span>Sign in</span>
      <UserCircle2Icon />
    </Button>
  );
};

export default AuthButton;
