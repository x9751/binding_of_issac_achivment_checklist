type Achievement = {
	Name: string;
	Description: string;
	Unlock: string;
	index: number;
  completed?: boolean;
};
import achievements from "./assets/binding_of_issac_achivments.json";



export function App() {
  const [incompleteAchievements, setIncompleteAchievements] = useState<Achievement[]>(achievements);
  const [completedAchievements, setCompletedAchievements] = useState<Achievement[]>([]);

  

	return (
		<main className="bg-slate-900 text-white min-h-screen flex flex-col">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center mt-10">
					<h1 className="text-2xl font-bold">Achievements</h1>
				</div>
				<div className="flex flex-col gap-4 mt-4 max-w-[600px] mx-auto ">
					{sortedAchievements.map((achievement: Achievement) => (
						<div
							key={achievement.index}
							className="bg-slate-800 p-4 rounded-md"
						>
							<h2 className="text-xl font-bold">{achievement.Name}</h2>
							<p>{achievement.Description}</p>
							<p>{achievement.Unlock}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}