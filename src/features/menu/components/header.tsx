export const Header = () => {
  return (
    <header className="w-[100%] h-[100px] flex items-center justify-between bg-red-500">
      <div className="p-3">Logo</div>
      <nav className="w-[30%] flex items-center justify-center gap-6">
        <span>Inicio</span>
        <span>Sobre</span>
        <span>Projetos</span>
        <span>Contato</span>
      </nav>
    </header>
  );
};
