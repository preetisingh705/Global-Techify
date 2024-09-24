import React from 'react';

function Button({ variant, label }) {
  const baseClasses = "overflow-hidden flex-1 shrink gap-2 self-stretch p-2 my-auto rounded-lg border border-solid";
  const variantClasses = {
    primary: "bg-[#563AE0] border-zinc-800 text-[color:var(--sds-color-text-brand-on-brand)]",
    secondary: "bg-neutral-200 border-neutral-500 text-[#563AE0]"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </button>
  );
}

export default Button;