const Section = () => {
  return (
    <section className="grid place-items-center gap-y-[59px] bg-gradient-to-b from-[#FFFFFF] to-[#F0F1FF] px-[20px] pb-[80px] pt-[64px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[57px] md:px-[44px] md:pb-[144px] md:pt-[91px] xl:grid-cols-3 xl:gap-x-[32px] xl:gap-y-[85px] xl:px-[160px] xl:pt-[89px]">
      <p className="h-full max-w-[352px] rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] p-[32px] text-[24px] font-extrabold leading-[1.2] text-white md:py-[64px] xl:text-[32px]">
        Check out our most popular courses!
      </p>
      <Card
        image="./public/assets/icon-animation.svg"
        title="Animation"
        paragraph="Learn the latest animation techniques to create stunning motion design and captivate your audience."
      />
      <Card
        image="./public/assets/icon-design.svg"
        title="Design"
        paragraph="Create beautiful, usable interfaces to help shape the future of how the web looks."
      />
      <Card
        image="./public/assets/icon-photography.svg"
        title="Photography"
        paragraph="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
      />
      <Card
        image="./public/assets/icon-crypto.svg"
        title="Crypto"
        paragraph="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
      />
      <Card
        image="./public/assets/icon-business.svg"
        title="Business"
        paragraph="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
      />
    </section>
  );
};

const Card = ({
  image,
  title,
  paragraph,
}: {
  image: string;
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="relative h-full max-w-[352px] rounded-[15px] bg-white px-[32px] pb-[42px] pt-[64px] shadow-2xl shadow-[rgba(0,0,0,0.05)] xl:pt-[63px]">
      <img src={image} alt="" className="absolute left-[32px] top-[-28px]" />
      <div className="grid place-content-between gap-y-[24px] md:h-full md:gap-y-[34px] xl:gap-y-[28px]">
        <div className="grid gap-y-[25px]">
          <p className="text-[20px] font-extrabold leading-[1.2] text-[#13183F] xl:text-[24px]">
            {title}
          </p>
          <p className="text-[16px] font-bold text-[#83869A] md:text-[18px] md:font-medium md:leading-[1.5]">
            {paragraph}
          </p>
        </div>
        <button className="max-w-fit text-[18px] font-bold leading-[1.5] text-[#F74780] hover:opacity-70 hover:brightness-150 md:max-h-[29.5px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section;
