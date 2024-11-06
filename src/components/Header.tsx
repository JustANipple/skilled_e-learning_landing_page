import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-no-repeat md:bg-[url('/image-hero-tablet.png')] md:bg-[calc(100%_+_293px)_calc(100%_+_17px)] xl:bg-[url('/image-hero-desktop.png')] xl:bg-[calc(100%_+_335px)_calc(100%_+_-2px)]">
      <nav className="relative flex items-center justify-between px-[20px] py-[16px] md:px-[44px] md:py-[37px] xl:px-[160px]">
        <img
          src="logo-dark.svg"
          alt="skilled logo"
          className="max-h-[21px] xl:max-h-[30px]"
        />
        <Button classname="bg-[#13183F] px-[32px] py-[16px] md:absolute md:right-[44px] md:z-10 md:top-[24px] xl:right-[160px]" />
      </nav>
      <div className="grid place-items-center gap-y-[66px] pb-[14px] pt-[64px] md:grid-cols-2 md:px-[44px] md:py-[64px] xl:place-items-start xl:px-[160px] xl:py-[136px]">
        <div className="grid max-w-[457px] gap-y-[40px] px-[20px] md:px-0 md:py-[42px]">
          <div className="grid gap-y-[24px] md:gap-y-[25px] xl:max-w-[457px]">
            <p className="text-[40px] font-extrabold leading-[1.2] text-[#13183F] xl:text-[56px]">
              Maximize skill, minimize budget
            </p>
            <p className="pr-2 text-[18px] font-medium leading-[1.5] text-[#83869A] md:pr-3 xl:pr-0">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>
          <Button classname="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-[32px] py-[16px]" />
        </div>
        <div className="overflow-hidden md:overflow-visible">
          <img
            src="image-hero-mobile.png"
            alt="image hero"
            className="scale-[1.16] md:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
