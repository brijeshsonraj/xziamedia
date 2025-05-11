import Squares from "./blocks/Backgrounds/Squares/Squares";
import BounceCards from "./blocks/Components/BounceCards/BounceCards";
import TextPressure from "./blocks/TextAnimations/TextPressure/TextPressure.jsx";
import { useEffect, useState } from "react";
function App() {
  const images = [
    "/src/assets/insta day2 followers.png",
    "/src/assets/aafter10 days.png",
    "/src/assets/current followers.png",
  ];
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());

  function getResponsiveFontSize() {
    const width = window.innerWidth;
    return Math.max(100, width * 0.1); // example: 10% of screen width, min 100
  }

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getResponsiveFontSize());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative bg-black min-h-screen">
      {/* Squares Background */}
      <Squares
        speed={0.3}
        squareSize={100}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />

      {/* Content with black overlay */}
      <div className="relative z-20  text-white font-sans">
        {/* Hero Section */}
        <section className=" min-h-dvh flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 lg:px-24">
          <div className="md:w-5/12 flex justify-center mb-12 md:mb-0">
            <div className="border-white relative w-96 h-[35em] rounded-[40px] overflow-hidden shadow-lg border border-gray-700">
              <video
                src="/src/assets/HOW TO TAKE BACK CONTROL_1.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
          <div className="md:w-6/12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              Xzia Media
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              I create trending short-form video edits that elevate your brand
              and drive business growth.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("sample-work")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Discover my work
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-dvh py-20 px-8 md:px-16 lg:px-24 ">
          <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
            <div className="md:w-1/2 lg:w-5/12">
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg">
                I studied video marketing through The Real World, Andrew Tate's
                online university, where I gained insights into content strategy
                and audience engagement. I honed my video editing skills by
                creating dynamic anime edits and podcast highlights, developing
                a strong foundation in storytelling, pacing, and visual impact.
              </p>
            </div>
            <div className="md:w-1/2 lg:w-5/12 flex justify-center">
              <div className="z-10 border-white rounded-[40px] overflow-hidden shadow-lg border-2 w-96 h-[30em]">
                <img
                  src="/src/assets/me.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work Samples Section */}
        <section id="sample-work" className="min-h-dvh py-16 px-4  text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Left Column - Title */}
            <div className="md:w-1/3">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Sample <span className="italic">Work.</span>
              </h2>
            </div>

            {/* Right Column - Work Samples */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* First Work Sample */}
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-4 opacity-90 tracking-wide text-center">
                  01 Interactive Explanation Videos
                </p>
                <div className="relative w-full aspect-[10/16] rounded-[40px] border-white overflow-hidden border-2 border-gray-700">
                  <video
                    src="/src/assets/short26.mp4"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                </div>
              </div>

              {/* Second Work Sample */}
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-4 opacity-90 tracking-wide text-center">
                  02 3-D Fast Pace Creative Edits
                </p>
                <div className="relative w-full aspect-[10/16] rounded-[40px] border-white overflow-hidden border-2 border-gray-700">
                  <video
                    src="/src/assets/3d-fast pace.mp4"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                  />
                </div>
              </div>

              {/* Third Work Sample */}
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-4 opacity-90 tracking-wide text-center">
                  03 Smooth Flow Edits
                </p>
                <div className="relative w-full aspect-[10/16] rounded-[40px] overflow-hidden border-2 border-gray-700">
                  <video
                    src="/src/assets/short29.mp4"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              {/* Fourth Work Sample */}
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-4 opacity-90 tracking-wide text-center">
                  04 Motion Graphics
                </p>
                <div className="relative w-full aspect-[1/1] rounded-[40px] overflow-hidden border-2 border-gray-700">
                  <video
                    src="/src/assets/mographedit_1.mp4"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" text-white min-h-screen flex items-center justify-center p-4">
          <div className="max-w-6xl w-full flex flex-col lg:flex-row">
            {/* Left side - Title and Social Profiles */}
            <div className="lg:w-1/2 space-y-8 mb-8 lg:mb-0">
              <div>
                <h1 className="text-7xl font-bold">Client</h1>
                <h2 className="text-7xl font-light italic">Testimonial.</h2>
              </div>

              <div className="space-y-4">
                {/* Social Profile Cards */}
                <BounceCards
                  className="custom-bounceCards"
                  images={images}
                  containerWidth={500}
                  containerHeight={250}
                  animationDelay={1}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={true}
                />
              </div>
            </div>

            {/* Right side - Client photo and testimonial */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
              <div className="rounded-xl overflow-hidden mb-6 w-64 h-64">
                <img
                  src="src\assets\download.jpg"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-right">
                <h3 className="text-5xl font-bold mb-4">Jake Gordon</h3>
                <p className="text-xl max-w-md">
                  He helped grow my account from 5K to 50K followers in just two
                  months. His editing skills, domain knowledge, and marketing
                  insight are outstanding. Working with him was an excellent
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-white min-h-screen flex items-center justify-center  p-4">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left side - Spiral Graphic */}
            <div className="flex justify-center md:justify-end mb-8 md:mb-0 w-full">
              <div style={{ position: "relative", height: "200px" }}>
                <TextPressure
                  text="EXPERIENCE"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={fontSize}
                />
              </div>
            </div>

            {/* Right side - Experience Text */}
            <div className="w-full ">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium">Video Editing</h3>
                  <p className="text-gray-300">
                    2020-present, Youtube, Client Work etc
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium">Video Marketing</h3>
                  <p className="text-gray-300">2023-present, The Real World</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-white min-h-screen flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top Left - Text */}
              <div className="flex items-center">
                <h2 className="text-6xl font-light">
                  Stay <span className="italic">in Touch.</span>
                </h2>
              </div>

              {/* Top Right - Image */}
              <div className="flex justify-center md:justify-end">
                <div className="rounded-2xl overflow-hidden max-w-md h-40 md:h-48">
                  <img
                    src="src\assets\sit_00000_00000.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Left - Logo/Video */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <div className="inline-block ">
                    <video
                      src="src/assets/Search motion background.mp4"
                      className="rounded-xl border-white max-w-lg h-60 md:h-72 mb-4 object-cover "
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Right - Contact Information */}
              <div className="flex   justify-center items-center ">
                <div className="space-y-6 ">
                  <div>
                    <h4 className="text-2xl font-medium mb-1">Email</h4>
                    <p className="text-gray-300">kashyapsonraj@gmail.com</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+91 9104877051</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Savepoint created for the current state of the file.
