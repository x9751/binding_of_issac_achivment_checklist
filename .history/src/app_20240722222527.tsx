type Achievement = {
	name: string;
	description: string;
	unlock: string;
	index: number;
};
import achievements from "./assets/binding_of_issac_achivments.json";
const sortedAchievements = (achievements as any[]).sort(
	(a, b) => a.index - b.index
);

console.log(sortedAchievements[0]);

export function App() {
	return (
		<main className="bg-slate-900 text-white min-h-screen flex flex-col">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center mt-10">
					<h1 className="text-2xl font-bold">Achievements</h1>
				</div>
				<div className="flex flex-col gap-4 mt-4">
					{sortedAchievements.map((achievement: Achievement) => (
						<div
							key={achievement.index}
							className="bg-slate-800 p-4 rounded-md"
						>
							<h2 className="text-xl font-bold">{achievement.name}</h2>
							<p>{achievement.description}</p>
							<p>{achievement.unlock}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
