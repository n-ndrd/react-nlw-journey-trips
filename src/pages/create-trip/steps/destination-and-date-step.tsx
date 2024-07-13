import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/Button";

type DestinationAndDateStepProps = {
	openGuestsInput: () => void;
	closeGuestsInput: () => void;
	isGuestsInputOpen: boolean;
};

export function DestinationAndDateStep({
	openGuestsInput,
	closeGuestsInput,
	isGuestsInputOpen,
}: DestinationAndDateStepProps) {
	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input
					type="text"
					placeholder="Para onde você vai?"
					disabled={isGuestsInputOpen}
					className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
				/>
			</div>

			<div className="flex items-center gap-2">
				<Calendar className="size-5 text-zinc-400" />
				<input
					type="text"
					placeholder="Quando?"
					disabled={isGuestsInputOpen}
					className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
				/>
			</div>

			<div className="w-px h-6 bg-zinc-800" />

			{isGuestsInputOpen ? (
				<Button type="button" onClick={closeGuestsInput} variant="secundary">
					Alterar local e data
					<Settings2 className="size-5" />
				</Button>
			) : (
				<Button type="button" onClick={openGuestsInput} variant="primary">
					Continuar
					<ArrowRight className="size-5" />
				</Button>
			)}
		</div>
	);
}
