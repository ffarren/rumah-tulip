import DescriptionCard from "./DescriptionCard";
import {
  PiTelevisionSimpleThin,
  PiDogThin,
  PiCallBellThin,
  PiCookingPotThin,
  PiShowerThin,
  PiCarThin,
  PiMoneyThin,
  PiMapPinThin,
} from "react-icons/pi";

const Description = () => {
  return (
    <div className="px-10 sm:px-24 py-32 bg-orange-50 text-center border-black border-b">
      <h1 className="font-petrona text-4xl sm:text-5xl text-blue-950">
        A 2-room house with rich{" "}
        <span className="text-amber-400 italic">facilities</span>
      </h1>
      <div className="mt-10 p-0 sm:p-2 pb-0 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <DescriptionCard
          icon={<PiTelevisionSimpleThin size={55} />}
          desc='42" HDTV with Amazon Prime Video, Disney+, Netflix'
        />
        <DescriptionCard icon={<PiDogThin size={55} />} desc="Pet Friendly" />
        <DescriptionCard
          icon={<PiCallBellThin size={55} />}
          desc="Free Simple Traditional Breakfast by Request"
        />
        <DescriptionCard
          icon={<PiCookingPotThin size={55} />}
          desc="Fullset Kitchen"
        />
        <DescriptionCard
          icon={<PiShowerThin size={55} />}
          desc="2 Bathrooms with Water Heater"
        />
        <DescriptionCard
          icon={<PiCarThin size={55} />}
          desc="Free Parking for 1 Car"
        />
        <DescriptionCard
          icon={<PiMoneyThin size={55} />}
          desc="Reasonable Price"
        />
        <DescriptionCard
          icon={<PiMapPinThin size={55} />}
          desc="Strategic Location"
        />
      </div>
    </div>
  );
};

export default Description;
