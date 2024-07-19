import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { api } from "../../lib/axios";

interface Participants {
	id: string;
	name: string | null;
	email: string;
	is_confirmed: boolean;
}

type GuestsProps = {
	openConfirmParticipationModal: () => void;
};

export function Guests({ openConfirmParticipationModal }: GuestsProps) {
	const { tripId } = useParams();
	const [participants, setParticipants] = useState<Participants[]>([]);

	useEffect(() => {
		api
			.get(`/trips/${tripId}/participants`)
			.then((response) => setParticipants(response.data.participants));
	}, [tripId]);
	return (
		<div>
			<div className="space-y-6">
				<h2 className="font-semibold text-xl">Convidados</h2>

				<div className="space-y-5">
					{participants.map((participant, index) => {
						return (
							<div
								key={participant.id}
								className="flex items-center justify-between gap-4"
							>
								<div className="space-y-1.5 flex-1">
									<span className="block font-medium text-zinc-100">
										{participant.name ?? `Convidado ${index}`}
									</span>
									<span className="block text-xs text-zinc-400 truncate">
										{participant.email}
									</span>
								</div>
								{participant.is_confirmed ? (
									<CircleCheck className="text-lime-300 size-5" />
								) : (
									<CircleDashed className="text-zinc-400 size-5" />
								)}
							</div>
						);
					})}
				</div>

				<Button
					type="button"
					variant="secundary"
					size="full"
					onClick={openConfirmParticipationModal}
				>
					<UserCog className="size-5" />
					Gerenciar convidados
				</Button>
			</div>
		</div>
	);
}
