type Achievement = {
  name: string;
  description: string;
  unlock: string;
  index: number;
}
import achievements from './assets/binding_of_issac_achivments.json' ;



export function App() {

  return (
    <main className="bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-2xl font-bold">Achievements</h1>
        </div>
      </div>
    </main>
  )
}