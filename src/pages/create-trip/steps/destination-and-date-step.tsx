import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../../components/Button";
import { ButtonClose } from "../../../components/ButtonClose";
import "react-day-picker/dist/style.css";

type DestinationAndDateStepProps = {
	openGuestsInput: () => void;
	closeGuestsInput: () => void;
	isGuestsInputOpen: boolean;
	setDestination: (destination: string) => void;
	eventStartAndEndDates: DateRange | undefined;
	setEventStartAndEndDates: (dates: DateRange | undefined) => void;
};

export function DestinationAndDateStep({
	openGuestsInput,
	closeGuestsInput,
	isGuestsInputOpen,
	setDestination,
	eventStartAndEndDates,
	setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

	function openDatePicker() {
		setIsDatePickerOpen(true);
	}

	function closeDatePicker() {
		setIsDatePickerOpen(false);
	}

	const displayedDate =
		eventStartAndEndDates &&
		eventStartAndEndDates.from &&
		eventStartAndEndDates.to
			? format(eventStartAndEndDates.from, "d' de 'LLL")
					.concat(" até ")
					.concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
			: null;

	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input
					type="text"
					placeholder="Para onde você vai?"
					disabled={isGuestsInputOpen}
					className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
					onChange={(event) => setDestination(event.target.value)}
				/>
			</div>

			<button
				type="button"
				onClick={openDatePicker}
				disabled={isGuestsInputOpen}
				className="flex items-center gap-2 text-left w-[180px]"
			>
				<Calendar className="size-5 text-zinc-400" />
				<span className="bg-transparent text-lg text-zinc-400 w-40 flex-1">
					{displayedDate || "Quando?"}
				</span>
			</button>

			{isDatePickerOpen && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
					<div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-semibold">Selecione a data</h2>
								<ButtonClose onClick={closeDatePicker} />
							</div>
						</div>

						<DayPicker
							mode="range"
							selected={eventStartAndEndDates}
							onSelect={setEventStartAndEndDates}
						/>
					</div>
				</div>
			)}

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
