"use client";

import { CoolMode } from "@/components/ui/cool-mode";
import { registerLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const RegisterButton: React.FC = () => {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Link
          href={registerLink}
          target="_blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          Join Waitlist!
        </Link>
      </CoolMode>
    </div>
  );
};

export default RegisterButton;
