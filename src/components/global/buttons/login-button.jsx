"use client";

import { cn } from "@/src/lib/utils";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Icons } from "../../icons/icons";

function LoginButton({ className, ...props }) {
    const router = useRouter();

    return (
        <Button
            className={cn(
                "group flex h-9 items-center gap-2 text-sm font-semibold bg-secondary",
                className
            )}
            color="default"
            radius="md"
            onPress={() => router.push("/auth")}
            {...props}
        >
            <Icons.podcast className="h-4 w-4 transition-all ease-in-out group-hover:h-0 group-hover:w-0" />
            <p className="uppercase">Login</p>
            <Icons.login className="h-0 w-0 transition-all ease-in-out group-hover:h-4 group-hover:w-4" />
        </Button>
    );
}

export default LoginButton;