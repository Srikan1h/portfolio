// app/components/MenuStack.tsx

'use client'; // This component must be a Client Component to use hooks like usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Define the structure for your menu items
const menuItems = [
  // Item 1: Home Page (Highest Z-index to be on top)
  { label: '1', href: '/', zIndex: 40 }, 
  // Item 2: Placeholder link (Lower Z-index)
  { label: '2', href: '#', zIndex: 30 }, 
  // Item 3: Projects page
  { label: '3', href: '/projects', zIndex: 20 }, 
  // Item 4: Links page (Lowest Z-index for the end of the stack)
  { label: '4', href: '/links', zIndex: 10 }, 
];

const MenuStack: React.FC = () => {
  // Hook to get the current URL path (e.g., '/', '/projects', '/links')
  const currentPath = usePathname();

  // Define the base classes that are constant for all items
  const baseClasses = "w-5 h-5 rounded-full border-2 shadow-xl transition-all duration-300 hover:border-neutral-400 hover:-translate-y-2 flex items-center justify-center font-normal font-xs p-5";
  
  // Define the style for the active state
  const activeStyle = 'bg-neutral-100 text-black border-neutral-400';
  
  // Define the style for the inactive state
  const inactiveStyle = 'bg-black text-white border-neutral-600';

  return (
    <div className="flex justify-left py-3 bg-transparent">
      <nav className="flex relative">
        {menuItems.map((item, index) => {
          // Check if the link's href matches the current path
          // For the root path ('/'), we use a strict equality check.
          // For other paths, we check if the current path starts with the link's href
          // to handle potential trailing slashes or sub-routes (e.g., /projects/detail).
          const isActive = item.href === '/' 
            ? currentPath === item.href 
            : currentPath.startsWith(item.href);
            
          // Set the Z-index and overlap margin
          const zIndexClass = `z-${item.zIndex}`;
          const marginLeftClass = index > 0 ? '-ml-[9px]' : '';
          
          // Apply the active or inactive styles conditionally
          const conditionalStyle = isActive ? activeStyle : inactiveStyle;
          
          // Combine all classes
          const finalClasses = `${zIndexClass} ${marginLeftClass} ${baseClasses} ${conditionalStyle}`;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={finalClasses}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MenuStack;