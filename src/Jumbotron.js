const Jumbotron = () => {
  return (
    <div className="relative bg-orange-50 px-10 sm:px-24 py-28 mt-20 border-b border-black">
      <h1 className="font-petrona text-5xl sm:text-6xl md:w-full lg:w-4/6 z-20 text-blue-950 mb-16">
        Local Surroundings.
        <br />
        Modern Facilitites.
        <br />
        Experience peace at <br />
        <span className="font-bold">Rumah Tulip.</span>
      </h1>
      <a
        href="https://www.google.co.id/maps/place/Gg.+Tulip,+Jaranan,+Banguntapan,+Kec.+Banguntapan,+Kabupaten+Bantul,+Daerah+Istimewa+Yogyakarta+55198/@-7.7890579,110.4022281,17z/data=!4m6!3m5!1s0x2e7a59e74e5f86a3:0xcde8e59ac4a3bd7a!8m2!3d-7.7891057!4d110.4032152!16s%2Fg%2F11f101cb2s?entry=ttu"
        className="font-petrona font-bold text-blue-950 text-lg sm:text-2xl underline"
        target="_blank"
        rel="noreferrer"
      >
        Kecamatan Banguntapan, Daerah Istimewa Yogyakarta, Indonesia.
      </a>
    </div>
  );
};

export default Jumbotron;
