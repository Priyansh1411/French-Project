import { motion } from "framer-motion";

const events = [
  { year: "1914", title: "Début de la Première Guerre mondiale", description: "La France entre en guerre." },
  { year: "1916", title: "Bataille de Verdun", description: "L'une des batailles les plus longues et les plus sanglantes." },
  { year: "1940", title: "Chute de la France", description: "La France est occupée par l'Allemagne." },
  { year: "1944", title: "Jour J", description: "L'invasion alliée de la Normandie commence." },
  { year: "1945", title: "Victoire", description: "Les Alliés battent l'Allemagne nazie." },
];

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-4 bg-gray-800 text-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
        >
          <h3 className="text-red-500 font-bold">{event.year}</h3>
          <h4 className="mt-2 font-semibold">{event.title}</h4>
          <p className="mt-1 text-sm text-gray-300">{event.description}</p>
        </motion.div>
      ))}
    </div>
  );
}