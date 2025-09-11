import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import categoryService from '../services/categoryService';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const result = await categoryService.getCategories();
        
        if (result.success) {
          setCategories(result.data);
        } else {
          setError(result.error || 'Failed to fetch categories');
          // Fallback to empty array if API fails
          setCategories([]);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Network error occurred');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="my-4 px-4">
        <div className="flex justify-center items-center py-12">
          <FaSpinner className="animate-spin text-2xl text-red-600 mr-2" />
          <span>Loading categories...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-4 px-4">
        <div className="text-center py-8 text-red-600">
          <p>Error: {error}</p>
          <p className="text-sm text-gray-600 mt-2">
            Please check your connection and try again.
          </p>
        </div>
      </section>
    );
  }

return (
  <section className="my-4 px-4">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      
      {/* Static categories (from JSON) */}
      {Categories.map((c) => (
        <div 
          key={`static-${c.id}`} 
          className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="aspect-square mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <Link to="/subCategory">
              <img 
                src={`categories/${c.coverFile}`} 
                className="w-full h-full object-cover" 
                alt={c.title} 
              />
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-800 leading-tight">
              {c.title}
            </h3>
          </div>
        </div>
      ))}

      {/* Dynamic categories (from API) */}
      {categories.map((category) => (
        <div 
          key={`api-${category._id}`} 
          className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="aspect-square mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <Link to="/subCategory">
              {category.image ? (
                <img
                  src={category.image}
                  className="w-full h-full object-cover"
                  alt={category.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full flex items-center justify-center bg-red-100 text-red-600 text-2xl"
                style={{ display: category.image ? 'none' : 'flex' }}
              >
                {category.name.charAt(0)}
              </div>
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-800 leading-tight">
              {category.name}
            </h3>
          </div>
        </div>
      ))}

    </div>
  </section>
);

};

export default CategoriesList;