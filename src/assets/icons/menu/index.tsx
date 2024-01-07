const Menu = ({ className }: { className: string }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={`stroke-current ${className ?? ""}`} xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 7H19M1 1H19" />
    </svg>
  );
};

export default Menu;
