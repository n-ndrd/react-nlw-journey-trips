import { Calendar, Clock, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";

interface createActivityModalProps {
	closeCreateActivityModalIsOpen: () => void;
}

export function CreateActivityModal({
	closeCreateActivityModalIsOpen,
}: createActivityModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">Cadastrar atividade</h2>
						<button type="button" onClick={closeCreateActivityModalIsOpen}>
							<X className="size-5 text-zinc-400" />
						</button>
					</div>
					<p className="text-sm text-zinc-400">
						Todos convidados podem visualizar as atividades.
					</p>
				</div>

				<form action="" className="space-y-3">
					<div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
						<Tag className="text-zinc-400 size-5" />

						<input
							type="text"
							name="title"
							placeholder="Qual a atividade?"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<div className="flex items-center gap-2">
						<div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
							<Calendar className="text-zinc-400 size-5" />

							<input
								type="date"
								name="occurs_at"
								placeholder="Data da atividade"
								className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
							/>
						</div>

						<div className="h-14 w-60 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
							<Clock className="text-zinc-400 size-5" />

							<input
								type="time"
								name="occurs_at_time"
								placeholder="Horário"
								className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
							/>
						</div>
					</div>

					<Button 
						variant='primary'
						size="full" 
						type="submit"
					>
						Salvar atividade
					</Button>
				</form>
			</div>
		</div>
	);
}
