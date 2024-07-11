import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

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
				<button
					type="button"
					className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
					onClick={closeGuestsInput}
				>
					Alterar local e data
					<Settings2 className="size-5" />
				</button>
			) : (
				<button
					type="button"
					className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
					onClick={openGuestsInput}
				>
					Continuar
					<ArrowRight className="size-5" />
				</button>
			)}
		</div>
	);
}
