import { X } from "lucide-react";
import type { ComponentProps } from "react";

interface ButtonCloseProps extends ComponentProps<"button"> {}

export function ButtonClose({ ...props }: ButtonCloseProps) {
	return (
		<button type="button" {...props}>
			<X className="size-5 text-zinc-400" />
		</button>
	);
}
