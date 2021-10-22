import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <Image
        src="https://serving.photos.photobox.com/05211601f1415d371319f46f2af848a507e384f4147ed4b009c08e0026144fe2122fa116.jpg"
        alt="Profile"
        width="200px"
        height="200px"
      />
      <h3>
        <span>Yahya </span>Mohamed
      </h3>
      <p>Web Developer</p>
      <p>Downlaod Resume</p>
      {/* social icons */}
      {/* address */}
      <div>
        <div>
          <span>Egypt,Sohag</span>
        </div>
        <p>yahya.webdev404</p>
        <p></p>
      </div>
    </div>
  );
};

export default Sidebar;
