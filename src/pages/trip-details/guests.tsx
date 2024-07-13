import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/Button";

type GuestsProps = {
	openConfirmParticipationModal: () => void;
};

export function Guests({ openConfirmParticipationModal }: GuestsProps) {
	return (
		<div>
			<div className="space-y-6">
				<h2 className="font-semibold text-xl">Convidados</h2>

				<div className="space-y-5">
					<div className="flex items-center justify-between gap-4">
						<div className="space-y-1.5 flex-1">
							<span className="block font-medium text-zinc-100">
								Jessica White
							</span>
							<span className="block text-xs text-zinc-400 truncate">
								jessica.white44@yahoo.com
							</span>
						</div>
						<CircleDashed className="text-zinc-400 size-5" />
					</div>

					<div className="flex items-center justify-between gap-4">
						<div className="space-y-1.5 flex-1">
							<span className="block font-medium text-zinc-100">
								Dr. Rita Pacocha
							</span>
							<span className="block text-xs text-zinc-400 truncate">
								lacy.stiedemann@gmail.com
							</span>
						</div>
						<CircleCheck className="text-lime-300 size-5" />
					</div>
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
