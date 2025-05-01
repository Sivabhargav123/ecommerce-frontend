// import React from 'react';
// import CartIcon from './CartIcon';
// import CL from '../assets/cartLogo.webp';
// import { FaMoon, FaSun } from 'react-icons/fa';

// const Header = ({ isDarkMode, toggleDarkMode, searchQuery, setSearchQuery }) => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md py-6 px-6">
//       <div className="container mx-auto flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
//         <div className="text-xl font-semibold">
//           <img src={CL} className="w-30 h-20 text-gray-700" alt="Logo" />
//         </div>
//         <div className="flex flex-wrap items-center space-x-4">
//           <nav>
//             <a href="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Home</a>
//             <a href="/products" className="ml-6 text-gray-600 dark:text-gray-200 hover:text-blue-600">Products</a>
//           </nav>
//           <CartIcon />
//           <input
//             type="text"
//             placeholder="🔍 Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="p-2 px-3 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-700 dark:text-white"
//           />
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
//           >
//             {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import CartIcon from './CartIcon';
import CL from '../assets/cartLogo.webp';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ isDarkMode, toggleDarkMode, searchQuery, setSearchQuery }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <img src={CL} className="w-30 h-20 text-gray-700" alt="Logo" />
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Home</a>
            {/* <a href="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Products</a> */}
            <a href="#products" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Products</a>
          </nav>

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 px-3 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-700 dark:text-white w-32 sm:w-48 lg:w-64"
          />
          <CartIcon />
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
