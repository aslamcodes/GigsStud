import { FC } from "react";

interface User {
  name: string;
  avatar: string;
}
interface GigsCardProps {
  gigsTitle: string;
  gigDescription: string;
  gigPrice: string;
  gigImage: string;
  postedBy: User;
}

const GigsCard: FC<GigsCardProps> = ({
  gigsTitle,
  gigDescription,
  gigPrice,
  gigImage,
  postedBy,
}) => {
  return (
    <div className="flex flex-col items-start max-w-xs bg-white shadow-md p-4 rounded-lg gap-4 cursor-pointer">
      <img className="w-64" src={gigImage} alt={gigImage} />
      <div className="flex items-center gap-3">
        <img className="w-10 rounded-full" src={postedBy.avatar}></img>
        <p className="text-xl font-normal">{postedBy.name}</p>
      </div>
      <div className="flex flex-col items-start gap-1 my-3">
        <p className="font-bold text-xl">{gigsTitle}</p>
        <p className="text-left text-xl ">{gigDescription}</p>
      </div>
      <p className="font-bold text-lg">Rewards from {gigPrice}</p>
      {/* <button className="p-3 text-lg bg-teal-500 border-2 border-gray-600 rounded-lg">
        Apply
      </button> */}
    </div>
  );
};

export default GigsCard;
