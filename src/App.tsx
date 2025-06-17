import { useState } from 'react';
import { Button } from '../globalComponents/Button';
import SingletonPattern from '../patterns/02-singleton-pattern/example/React';
import RoleBasefactorypattern from '../patterns/03-factory-pattern/example/React/RoleBasefactorypattern';




// Define your patterns data
const patterns = [
  { id: 'singleton', name: 'Singleton', component: SingletonPattern },
  { id: 'factory', name: 'Factory', component: RoleBasefactorypattern },
  // Add more patterns here...
];

const App = () => {
  const [activePattern, setActivePattern] = useState<string | null>(null);

  const renderActivePattern = () => {
    const pattern = patterns.find(p => p.id === activePattern);
    if (!pattern) return null;
    const PatternComponent = pattern.component;
    return <PatternComponent />;
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with pattern buttons */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Design Patterns</h2>
            <div className="space-y-2">
              {patterns.map((pattern) => (
                <Button
                  key={pattern.id}
                  variant={activePattern === pattern.id ? 'default' : 'secondary'}
                  className="w-full justify-start transition-all"
                  onClick={() => setActivePattern(pattern.id)}
                >
                  {pattern.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-700 border-b pb-2">
              {activePattern
                ? patterns.find(p => p.id === activePattern)?.name + ' Pattern'
                : 'Select a Pattern to Explore'}
            </h1>

            {activePattern ? (
              renderActivePattern()
            ) : (
              <div className="text-center py-12 text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium">No pattern selected</h3>
                <p className="mt-1">Click on a pattern from the sidebar to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;