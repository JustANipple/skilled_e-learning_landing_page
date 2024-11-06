const Button = ({ classname }: { classname: string }) => {
  return (
    <button
      className={`max-w-fit rounded-[28px] text-[18px] font-bold leading-[1.5] text-[#FFFFFF] hover:opacity-70 hover:brightness-150 md:px-[24px] md:py-[11px] xl:px-[32px] xl:py-[16px] ${classname}`}
    >
      Get Started
    </button>
  );
};

export default Button;
