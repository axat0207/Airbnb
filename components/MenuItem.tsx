'use client'
interface MenuItemprops {
  onClick: () => void;
  label: string;
}

export const MenuItem: React.FC<MenuItemprops> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-300 transition font-semibold"
    >
      {label}
    </div>
  );
};
export default MenuItem;
