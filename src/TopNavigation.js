const TopNavigation = () => {
  return (
    <div className="z-50 fixed top-0 left-0 right-0">
      <div className="font-petrona bg-orange-50 flex justify-between items-center border-b border-black py-10 sm:py-6 px-10 sm:px-24">
        <a href="/" className="font-bold tracking-wider text-blue-950 text-md sm:text-xl">
          Rumah Tulip
        </a>
        <a
          href="https://www.airbnb.com/rooms/753937582266768053?source_impression_id=p3_1692326839_yc9xhpBr0P%2BkZNNa"
          className="tracking-wider font-semibold text-sm sm:text-xl text-blue-950 underline"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default TopNavigation;
