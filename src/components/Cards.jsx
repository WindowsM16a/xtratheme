import PropTypes from "prop-types";
import profilePic from "../imgs/koals.jpg";

const cardData = [
  {
    logo: profilePic,
    title: "Social Marketing",
    text: "Social marketing is an approach used to develop activities aimed",
  },

  {
    logo: profilePic,
    title: "Business Ideas",
    text: "Based on client needs, We will provide some good business solutions",
  },

  {
    logo: profilePic,
    title: "Development",
    text: "Creating your own website was never that easy. Come and check it out!",
  },
];

const Cards = ({ logo, title, text }) => {
  return (
    <div className="centClass min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="card bg-black text-white flex-col items-center justify-center border-[3px] border-purple-800 rounded-2xl mt-4 ml-4 px-3 max-w-80 shadow-black shadow-md text-center ">
        <div className="flex justify-center">
          <img
            className="card-image max-w-[60%] h-auto my-4 rounded-[50%]"
            src={logo}
            alt="profile picture"
          />
        </div>
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p className="card-text px-4 pb-2 mx-4">{text}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const CardList = () => {
  return (
    <div className="centClass min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="card bg-black text-white flex-col items-center justify-center border-[3px] border-green-800 rounded-2xl mt-4 ml-4 px-3 max-w-80 shadow-black shadow-md text-center ">
          <div className="flex justify-center">
            <img
              className="card-image max-w-[60%] h-auto my-4 rounded-[50%]"
              src={profilePic}
              alt="profile picture"
            />
          </div>
          <h2 className="card-title text-2xl font-semibold">bet</h2>
          <p className="card-text px-4 pb-2 mx-4">hii</p>
        </div>
      </div>
      {cardData.map((card, index) => (
        <Cards
          key={index}
          logo={card.logo}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardList;
