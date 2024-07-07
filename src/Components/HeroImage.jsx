import Menyar from "../assets/pika.jpg";

const HeroImage = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[100vh] ">
        <div className="w-[50%] h-[100vh] absolute top-0 right-0 z-20 activator"></div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          className="svg-underlay"
        >
          <path
            d="M1124 1080L1132.3 1020C1140.7 960 1157.3 840 1120.5 720C1083.7 600 993.3 480 953.8 360C914.3 240 925.7 120 931.3 60L937 0L1920 0L1920 60C1920 120 1920 240 1920 360C1920 480 1920 600 1920 720C1920 840 1920 960 1920 1020L1920 1080Z"
            fill="#000"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", top: "0", left: "0" }}
          className="svg-overlay"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                d="M1124 1080L1132.3 1020C1140.7 960 1157.3 840 1120.5 720C1083.7 600 993.3 480 953.8 360C914.3 240 925.7 120 931.3 60L937 0L1920 0L1920 60C1920 120 1920 240 1920 360C1920 480 1920 600 1920 720C1920 840 1920 960 1920 1020L1920 1080Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
              ></path>
            </clipPath>
          </defs>

          <image
            href={Menyar}
            width="100%"
            height="100%"
            x="400"
            clipPath="url(#clip-path)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroImage;
