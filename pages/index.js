import dynamic from "next/dynamic";
import Timeline from "../components/Timeline";
import Quiz from "../components/Quiz";

const Map = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/background.jpg')` }}
    >
      {/* Header Section */}
      <header className="py-6 text-center shadow-md bg-gray-900 bg-opacity-75">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          La France pendant la Première et la Seconde Guerre mondiale
        </h1>
        <p className="text-lg mt-3 text-gray-300">
          Découvrez les moments charnières de l'histoire de France.
        </p>
      </header>

      {/* Main Section */}
      <main className="py-10">
        {/* Timeline Section */}
        <Timeline />

        {/* Map Section */}
        <section className="mt-10 bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-bold text-blue-400">
            Interactive Battle Map
          </h2>
          <p className="text-center text-gray-300 mt-2">
            Explore the locations of key battles from WW1 and WW2.
          </p>
          <Map />
        </section>

        {/* Quiz Section */}
        <section className="mt-10 bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-bold text-blue-400">Quiz Time!</h2>
          <p className="text-center text-gray-300 mt-2">
            Test your knowledge of French history during WW1 and WW2.
          </p>
          <Quiz />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="py-5 bg-gray-800 text-center shadow-md">
        <p className="text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300">
          Made with 💙 by Priyansh Mishra , Amol , Snata , Raghuram | © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}