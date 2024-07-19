import { CircleCheck, Plus } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Activities } from "./activities";
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

					<Activities />
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
