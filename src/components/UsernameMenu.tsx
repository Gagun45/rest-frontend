import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-main gap-2">
        <CircleUserRound className="text-main" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to={"/user-profile"} className="font-bold hover:text-main">
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={"/manage-restaurant"} className="font-bold hover:text-main">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <Separator />

        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-main"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UsernameMenu;
