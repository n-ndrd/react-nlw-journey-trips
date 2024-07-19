import { type FormEvent, useState } from "react";
import type { DateRange } from "react-day-picker";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { ConfirmTripModal } from "./confirmTripModal";
import { InviteGuestsModal } from "./inviteGuestsModal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export default function CreateTripPage() {
	const navigate = useNavigate();

	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [isConfirmTripModalOpen, setConfirmTripModalOpen] = useState(false);

	const [destination, setDestination] = useState("");
	const [ownerName, setOwnerName] = useState("");
	const [ownerEmail, setOwnerEmail] = useState("");
	const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
		DateRange | undefined
	>();

	const [emailsToInvite, setEmailsToInvite] = useState([]);

	function openGuestsInput() {
		setIsGuestsInputOpen(true);
	}

	function closeGuestsInput() {
		setIsGuestsInputOpen(false);
	}

	function openGuestsModal() {
		setIsGuestsModalOpen(true);
	}

	function closeGuestsModal() {
		setIsGuestsModalOpen(false);
	}

	function openConfirmTripModal() {
		setConfirmTripModalOpen(true);
	}

	function closeConfirmTripModal() {
		setConfirmTripModalOpen(false);
	}

	function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const email = data.get("email")?.toString();

		if (!email) {
			return;
		}

		if (emailsToInvite.includes(email)) {
			return;
		}

		setEmailsToInvite([...emailsToInvite, email]);

		event.currentTarget.reset();
	}

	function removeEmailFromInvites(emailToRemove: string) {
		const newEmailList = emailsToInvite.filter(
			(email) => email !== emailToRemove,
		);

		setEmailsToInvite(newEmailList);
	}

	async function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!destination) {
			return;
		}

		if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
			return;
		}

		if (emailsToInvite.length === 0) {
			return;
		}

		if (!ownerEmail || !ownerName) {
			return;
		}

		const response = await api.post("/trips", {
			destination,
			starts_at: eventStartAndEndDates.from,
			ends_at: eventStartAndEndDates.to,
			emails_to_invite: emailsToInvite,
			owner_name: ownerName,
			owner_email: ownerEmail,
		});

		const { tripId } = response.data;
		console.log("🚀 ~ createTrip ~ tripId:", tripId);
		//aa982994-adff-4044-91f3-0ec8190a39f5

		navigate(`/trips/${tripId}`);
	}

	return (
		<div className="h-screen flex items-center justify-center bg-pattern bg-center">
			<div className="max-w-3xl w-full px-6 text-center space-y-10">
				<div className="flex flex-col items-center gap-3">
					<img src="/logo.svg" alt="plann.er" />
					<p className="text-zinc-300 text-lg">
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className="space-y-4">
					<DestinationAndDateStep
						openGuestsInput={openGuestsInput}
						closeGuestsInput={closeGuestsInput}
						isGuestsInputOpen={isGuestsInputOpen}
						setDestination={setDestination}
						eventStartAndEndDates={eventStartAndEndDates}
						setEventStartAndEndDates={setEventStartAndEndDates}
					/>

					{isGuestsInputOpen && (
						<InviteGuestsStep
							openGuestsModal={openGuestsModal}
							openConfirmTripModal={openConfirmTripModal}
							emailsToInvite={emailsToInvite}
						/>
					)}
				</div>
				<p className="text-sm text-zinc-300">
					Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
					<br />
					com nossos{" "}
					<a className="text-zinc-300 underline" href="">
						termos de uso
					</a>{" "}
					e
					<a className="text-zinc-300 underline" href="">
						{" "}
						políticas de privacidade
					</a>
					.
				</p>
			</div>
			{isGuestsModalOpen && (
				<InviteGuestsModal
					closeGuestsModal={closeGuestsModal}
					emailsToInvite={emailsToInvite}
					addNewEmailToInvite={addNewEmailToInvite}
					removeEmailFromInvites={removeEmailFromInvites}
				/>
			)}

			{isConfirmTripModalOpen && (
				<ConfirmTripModal
					closeConfirmTripModal={closeConfirmTripModal}
					createTrip={createTrip}
					setOwnerName={setOwnerName}
					setOwnerEmail={setOwnerEmail}
				/>
			)}
		</div>
	);
}
