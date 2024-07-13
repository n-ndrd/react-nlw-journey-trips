import { CircleCheck, Plus } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { AddImportantLinkModal } from "./addImportantLinkModal";
import { ConfirmParticipationModal } from "./confirmParticipationModal";
import { CreateActivityModal } from "./createActivityModal";
import { Guests } from "./guests";
import { HeaderTrip } from "./headerTrip";
import { ImportantsLinks } from "./importantsLinks";

export function TripDetailsPage() {
	const [isCreateActivityModalIsOpen, setIsCreateActivityModalIsOpen] =
		useState(false);

	const [isAddImportantLinkModalIsOpen, setIsAddImportantModalLinkIsOpen] =
		useState(false);
	const [
		isConfirmParticipationModalIsOpen,
		setIsConfirmParticipationModalIsOpen,
	] = useState(false);

	function openAddImportantLinkModal() {
		setIsAddImportantModalLinkIsOpen(true);
	}

	function closeAddImportantLinkModal() {
		setIsAddImportantModalLinkIsOpen(false);
	}

	function openCreateActivityModal() {
		setIsCreateActivityModalIsOpen(true);
	}

	function closeCreateActivityModal() {
		setIsCreateActivityModalIsOpen(false);
	}

	function openConfirmParticipationModal() {
		setIsConfirmParticipationModalIsOpen(true);
	}

	function closeConfirmParticipationModal() {
		setIsConfirmParticipationModalIsOpen(false);
	}

	function confirmParticipation(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		closeConfirmParticipationModal();
	}

	return (
		<div className="max-w-6xl px-24 py-10 mx-auto space-y-8">
			<HeaderTrip />

			<main className="flex gap-16 px-4">
				<div className="flex-1 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-semibold">Atividades</h2>

						<Button
							variant="primary"
							type="button"
							onClick={openCreateActivityModal}
						>
							Cadastrar atividade
							<Plus className="size-5" />
						</Button>
					</div>

					<div className="space-y-8">
						<div className="space-y-2.5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 17
								</span>
								<span className="text-xs text-zinc-300">Sábado</span>
							</div>

							<p className="text-zinc-500 text-sm">
								Nenhuma atividade cadastrada nessa data.
							</p>
						</div>

						<div className="space-y-2.5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 18
								</span>
								<span className="text-xs text-zinc-300">Domingo</span>
							</div>

							<div className="space-y-2.5">
								<div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
									<CircleCheck className="size-5 text-lime-300" />
									<span className="text-zinc-100">Academia em grupo</span>
									<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
								</div>

								<div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
									<CircleCheck className="size-5 text-lime-300" />
									<span className="text-zinc-100">Academia em grupo</span>
									<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-80 space-y-6">
					<ImportantsLinks
						openAddImportantLinkModal={openAddImportantLinkModal}
					/>
					<div className="w-full h-px bg-zinc-800"> </div>
					<Guests
						openConfirmParticipationModal={openConfirmParticipationModal}
					/>
				</div>
			</main>

			{isCreateActivityModalIsOpen && (
				<CreateActivityModal
					closeCreateActivityModalIsOpen={closeCreateActivityModal}
				/>
			)}

			{isAddImportantLinkModalIsOpen && (
				<AddImportantLinkModal
					closeAddImportantLinkModal={closeAddImportantLinkModal}
				/>
			)}

			{isConfirmParticipationModalIsOpen && (
				<ConfirmParticipationModal
					closeConfirmParticipationModal={closeConfirmParticipationModal}
					confirmParticipation={confirmParticipation}
				/>
			)}
		</div>
	);
}
