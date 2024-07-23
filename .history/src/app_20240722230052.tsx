type Achievement = {
	Name: string;
	Description: string;
	Unlock: string;
	index: number;
	completed?: boolean;
};
import { useEffect, useState } from "preact/hooks";
import achievements from "./assets/binding_of_issac_achivments.json";

export function App() {
	const [incompleteOpen, setIncompleteOpen] = useState(true);
	const [completedOpen, setCompletedOpen] = useState(true);
	const [incompleteAchievements, setIncompleteAchievements] =
		useState<Achievement[]>(achievements);
	const [completedAchievements, setCompletedAchievements] = useState<
		Achievement[]
	>([]);

	const handleComplete = (achievement: Achievement) => {
		setCompletedAchievements([...completedAchievements, achievement]);
		setIncompleteAchievements(
			incompleteAchievements.filter((a) => a !== achievement)
		);
	};

	function saveAchievements() {
		localStorage.setItem(
			"completedAchievements",
			JSON.stringify(completedAchievements)
		);
		localStorage.setItem(
			"incompleteAchievements",
			JSON.stringify(incompleteAchievements)
		);
		localStorage.setItem("incompleteOpen", JSON.stringify(incompleteOpen));
		localStorage.setItem("completedOpen", JSON.stringify(completedOpen));
	}

	function loadAchievements() {
		const completedAchievements = JSON.parse(
			localStorage.getItem("completedAchievements") || "[]"
		);
		const incompleteAchievements = JSON.parse(
			localStorage.getItem("incompleteAchievements") || "[]"
		);
		const incompleteOpen = JSON.parse(
			localStorage.getItem("incompleteOpen") || "true"
		);
		const completedOpen = JSON.parse(
			localStorage.getItem("completedOpen") || "true"
		);
		setIncompleteOpen(incompleteOpen);
		setCompletedOpen(completedOpen);
		if (completedAchievements.length > 0) {
			setCompletedAchievements(completedAchievements);
		}
		if (incompleteAchievements.length > 0) {
			setIncompleteAchievements(incompleteAchievements);
		}
		z;
	}

	useEffect(() => {
		loadAchievements();
	}, []);

	useEffect(() => {
		saveAchievements();
	}, [
		incompleteAchievements,
		completedAchievements,
		incompleteOpen,
		completedOpen,
	]);

	return (
		<main className="bg-slate-900 text-white min-h-screen flex flex-col bg-[url('/background.webp')] bg-fixed bg-center bg-contain">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center mt-10">
					<h1 className="text-2xl font-bold">Achievements</h1>
				</div>
				<div className="flex items-center justify-between mt-4 max-w-[600px] mx-auto ">
					<h2 className="text-xl font-bold">Incomplete</h2>
					<button
						className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md"
						onClick={() => setIncompleteOpen(!incompleteOpen)}
					>
						{incompleteOpen ? "Close" : "Open"}
					</button>
				</div>
				<div className="flex flex-col gap-4 mt-4 max-w-[600px] mx-auto">
					{incompleteOpen &&
						incompleteAchievements.map((achievement: Achievement) => (
							<div
								key={achievement.index}
								className="bg-slate-800/90 border border-slate-700 p-4 rounded-md flex gap-4"
							>
								<div className="flex flex-col w-full">
									<h2 className="text-xl font-bold">{achievement.Name}</h2>
									<p>{achievement.Description}</p>
									<p>{achievement.Unlock}</p>
									<div className="flex items-center justify-end mt-2">
										<button
											className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md"
											onClick={() => {
												handleComplete(achievement);
											}}
										>
											Complete
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				<div className="flex flex-col gap-4 mt-4 max-w-[600px] mx-auto ">
					<h2 className="text-xl font-bold">Completed</h2>
				</div>
				<div className="flex flex-col gap-4 mt-4 max-w-[600px] mx-auto ">
					{completedOpen &&
						completedAchievements.map((achievement: Achievement) => (
							<div
								key={achievement.index}
								className="bg-slate-800 p-4 rounded-md"
							>
								<h2 className="text-xl font-bold">{achievement.Name}</h2>
							</div>
						))}
				</div>
			</div>
		</main>
	);
}
