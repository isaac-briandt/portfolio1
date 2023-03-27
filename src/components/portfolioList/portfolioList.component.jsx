import "./portfolioList.style.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <div>
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => {
          setSelected(id);
        }}
      >
        {title}
      </li>
    </div>
  );
};

export default PortfolioList;
