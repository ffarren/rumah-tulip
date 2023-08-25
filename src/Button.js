import "./button.css";

const Button = () => {
  return (
    <div className="hover:cursor-pointer pressedEffect bg-blue-950">
      <a
        href="https://www.airbnb.com/rooms/753937582266768053?source_impression_id=p3_1692326839_yc9xhpBr0P%2BkZNNa"
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-white font-petrona font-bold p-7 sm:p-7 text-xl sm:text-2xl">
          BOOK NOW
        </p>
      </a>
    </div>
  );
};

export default Button;
