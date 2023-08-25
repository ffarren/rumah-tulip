const DescriptionCard = (props) => {
  return (
    <div className="sm:w-11/12 p-0 sm:p-2 mb-4">
      <div className="w-full text-center">
        <span className="text-blue-950 inline-block">{props.icon}</span>
      </div>
      <h1 className="mt-2 font-petrona font-bold text-md sm:text-lg text-blue-950">
        {props.desc}
      </h1>
    </div>
  );
};

export default DescriptionCard;
