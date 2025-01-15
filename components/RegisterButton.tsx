import { registerLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const RegisterButton: React.FC = () => {
  return (
    <Link
      href={registerLink}
      target="_blank"
      className={cn(buttonVariants({ variant: "default", size: "lg" }))}
    >
      Applu Now
    </Link>
  );
};

export default RegisterButton;
