import aboutImage from "../assets/images/himans.jpg";
import { TAB_DATA } from "../utils/constants";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../utils/appSlice";
const About = () => {
  const activeTab = useSelector((store) => store.app.activeTab);
  const dispatch = useDispatch();

  const handleTabClick = (value) => {
    dispatch(setActiveTab(value));
  };

  return (
    <section id="about">
      <div className="w-full lg:flex-row flex-col flex items-center py-8 px-4 md:p-16  text-gray-200   ">
        <div className="lg:w-6/12 w-full  flex justify-center items-center   ">
          <img
            src={aboutImage}
            alt=""
            className=" object-cover w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px]  xl:w-[500px] xl:h-[500px] lg:px-8"
          />
        </div>
        <div className="lg:w-6/12 w-full mt-4 md:mt-6 lg:mt-0 text-left flex flex-col  justify-start   h-[600px]    ">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            I am a passionate and versatile Full Stack Web Developer dedicated
            to crafting seamless digital experiences. With a keen eye for detail
            and a love for elegant code, I thrive on turning complex ideas into
            practical solutions. <br />
            In every project, I strive for a perfect balance between creativity
            and functionality. I believe that a well-crafted website not only
            looks good but also works flawlessly, offering users an immersive
            and delightful experience.
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((data) => (
              <div key={data.id} onMouseDown={() => handleTabClick(data.id)}>
                <TabButton title={data.title} active={activeTab === data.id} />
              </div>
            ))}
          </div>

          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default About;
