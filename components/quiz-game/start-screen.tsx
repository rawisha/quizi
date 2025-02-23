import { Category } from './types';

interface StartScreenProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

export function StartScreen({ categories, onSelectCategory }: StartScreenProps) {
  return (
    <div className="w-full h-screen md:h-auto md:max-w-4xl bg-indigo-950 md:rounded-3xl shadow-2xl flex flex-col">
      <div className='p-8'>
      <h1 className="text-4xl font-bold text-white text-center mb-8">Quiz<span className='text-red-500'>i</span></h1>
      <p className="text-gray-300 text-center">Välj en kategori för att börja spela</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => onSelectCategory(category)}
              className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}