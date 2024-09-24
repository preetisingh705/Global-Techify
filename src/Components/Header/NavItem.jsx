import React from 'react';

function NavItem({ label }) {
  return (
    <a href={`#${label.toLowerCase()}`} className="gap-2 self-stretch p-2 rounded-lg">
      {label}
    </a>
  );
}

export default NavItem;