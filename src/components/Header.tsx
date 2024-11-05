import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-[20px] py-[16px]">
        <img
          src="./src/assets/logo-dark.svg"
          alt="skilled logo"
          className="max-h-[21px]"
        />
        <Button classname="bg-[#13183F] px-[32px] py-[16px]" />
      </nav>
      <div className="grid place-items-center gap-y-[66px] pb-[14px] pt-[64px]">
        <div className="grid gap-y-[40px] px-[20px]">
          <div className="grid gap-y-[24px]">
            <p className="text-[40px] font-extrabold leading-[1.2] text-[#13183F]">
              Maximize skill, minimize budget
            </p>
            <p className="pr-2 text-[18px] font-medium leading-[1.5] text-[#83869A]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>
          <Button classname="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-[32px] py-[16px]" />
        </div>
        <div className="overflow-hidden">
          <img
            srcSet="./src/assets/image-hero-mobile.png 435w, ./src/assets/image-hero-tablet.png 695w, ./src/assets/image-hero-desktop.png 1440w"
            sizes="(max-width: 767px) 435px, (max-width: 1439px) 695px, 1440px"
            src="./src/assets/image-hero-mobile.png"
            alt="image hero"
            className="scale-[1.16]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
