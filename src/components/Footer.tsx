import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#13183F] px-[20px] py-[24px] md:px-[44px] xl:px-[160px]">
      <img
        src="logo-light.svg"
        alt="skilled logo"
        className="max-h-[21px] xl:max-h-[30px]"
      />
      <Button classname="bg-gradient-to-b from-[#4851FF] to-[#F02AA6] px-[24px] py-[10px]" />
    </footer>
  );
};

export default Footer;
