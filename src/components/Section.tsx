const Section = () => {
  return (
    <section className="grid gap-y-[61px] px-[20px] pb-[80px] pt-[64px]">
      <p className="rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] p-[32px] text-[24px] font-extrabold leading-[1.2] text-white">
        Check out our most popular courses!
      </p>
      <Card
        image="./src/assets/icon-animation.svg"
        title="Animation"
        paragraph="Learn the latest animation techniques to create stunning motion design and captivate your audience."
      />
      <Card
        image="./src/assets/icon-design.svg"
        title="Design"
        paragraph="Create beautiful, usable interfaces to help shape the future of how the web looks."
      />
      <Card
        image="./src/assets/icon-photography.svg"
        title="Photography"
        paragraph="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
      />
      <Card
        image="./src/assets/icon-crypto.svg"
        title="Crypto"
        paragraph="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
      />
      <Card
        image="./src/assets/icon-business.svg"
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
    <div className="relative rounded-[15px] px-[32px] pb-[40px] pt-[64px] shadow-2xl shadow-[rgba(0,0,0,0.15)]">
      <img
        src={image}
        alt="running stickman"
        className="absolute left-[32px] top-[-28px]"
      />
      <div className="grid gap-y-[24px]">
        <p className="text-[20px] font-extrabold leading-[1.2] text-[#13183F]">
          {title}
        </p>
        <p className="text-[16px] font-bold text-[#83869A]">{paragraph}</p>
        <button className="max-w-fit text-[18px] font-bold leading-[1.5] text-[#F74780]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section;
