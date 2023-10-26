import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { FC, HTMLAttributes } from "react"

interface IProp extends HTMLAttributes<HTMLButtonElement> {
    value: boolean;
}

const PasswordToggle: FC<IProp> = ({ className, value, ...props }) => {
    return (
        <button type="button" className={cn("", className)} {...props}>
            {value ? (
                <Eye className="cursor-pointer opacity-30 " />
            ) : (
                <EyeOff className="cursor-pointer opacity-30" />
            )}
        </button>
    )
}

export default PasswordToggle