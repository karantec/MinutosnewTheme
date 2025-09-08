import Categories from '../../lib/data/categories.json';

const CategoriesList = () => {
  return (
    <section className="my-4 px-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {Categories.map((c) => (
          <div 
            key={c.id} 
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="aspect-square mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={`categories/${c.coverFile}`} 
                className="w-full h-full object-cover" 
                alt={c.title} 
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-800 leading-tight">
                {c.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;