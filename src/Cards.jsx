import profilePic from "./imgs/koals.jpg";

const Cards = () => {
  return (
    <div className="min-h-screen flex place-items-start justify-center">
      <div className="card bg-black text-white flex-col items-center justify-center border-[3px] border-purple-800 rounded-2xl mt-4 ml-4 px-3 max-w-80 shadow-black shadow-md text-center ">
        <div className="flex justify-center">
          <img
            className="card-image max-w-[60%] h-auto my-4 rounded-[50%]"
            src={profilePic}
            alt="profile picture"
          />
        </div>
        <h2 className="text-2xl font-semibold">Shayne Wuver</h2>
        <p className="px-4 pb-2 mx-4">
          I write software and i am a student and a professional idiot
        </p>
      </div>
    </div>
  );
};

export default Cards;
