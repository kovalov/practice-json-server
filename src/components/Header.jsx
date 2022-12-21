export const Header = ({ title, setIsModalOpened }) => {
  const handleClick = () => setIsModalOpened(true);

  return (
    <header className="header">
      <div className="header__container container">
        <span className="header__title">{title}</span>
        <button onClick={handleClick} className="header__button">
          Add new item
        </button>
      </div>
    </header>
  );
};
