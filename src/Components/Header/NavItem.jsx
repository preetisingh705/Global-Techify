import React from 'react';

function NavItem({ label }) {
  return (
    <a href={`#${label.toUpperCase()}`} className="gap-2 p-2 self-stretch  rounded-lg">
      {label}
    </a>
  );
}

export default NavItem;