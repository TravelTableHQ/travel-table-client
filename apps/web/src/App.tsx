import { Button, cn } from "@monorepo/ui";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Monorepo with Vite + React + Tailwind
        </h1>
        <div className="space-x-4">
          <Button variant="default" onClick={() => alert("Primary clicked!")}>
            Primary Button
          </Button>
          <Button
            variant="secondary"
            className={cn("shadow-lg", "border-2")}
            onClick={() => alert("Secondary clicked!")}
          >
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
