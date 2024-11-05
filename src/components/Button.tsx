const Button = ({ classname }: { classname: string }) => {
  return (
    <button
      className={`max-w-fit rounded-[28px] text-[18px] font-bold leading-[1.5] text-[#FFFFFF] ${classname}`}
    >
      Get Started
    </button>
  );
};

export default Button;
