import image1 from "@/assets/images/HelloGIT-1.jpg";
import image4 from "@/assets/images/HelloGIT-11.jpg";
import image2 from "@/assets/images/HelloGIT-15.jpg";
import bgImage from "@/assets/images/HelloGIT-21.jpg";
import image3 from "@/assets/images/HelloGIT-7.jpg";
import image5 from "@/assets/images/coffee-code.jpg";
import image6 from "@/assets/images/computer-vision.jpg";
import { Button, Image, Tag } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const listImg = [image6, image1, image2, image3, image4, image5];

const Home = () => {
  return (
    <div className="space-y-4">
      <section className="relative max-h-[90vh] overflow-hidden rounded-xl">
        <Image
          preview={false}
          src={bgImage}
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 pl-10 text-white">
          <p>Since 2021</p>
          <h1 className="text-7xl font-bold">HELLO GIT</h1>
          <p className="font-semibold">
            We are University of Greenwich Information Technology club
          </p>
        </div>
        <Button
          icon={<AiOutlineArrowRight />}
          iconPosition="end"
          shape="round"
          type="primary"
          className="absolute bottom-5 right-5"
        >
          <Link to="/about">About Us</Link>
        </Button>
      </section>
      <section className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="self-center md:w-2/3">
          <Tag color="#205172">LATEST EVENT</Tag>
          <h2 className="mb-2 text-5xl font-semibold">Code Challenge 2025</h2>
          <p className="mb-2">
            Huynh Tan Canh is the host of this show, he is Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam rhoncus bibendum congue.
            Proin aliquet quam pulvinar risus mollis, eu tincidunt purus varius.
            Duis auctor neque magna, in facilisis nisi sollicitudin a.
            Vestibulum mattis sem ut felis tempor egestas at id nunc. Phasellus
            non convallis arcu. Suspendisse fermentum blandit risus, sit amet
            egestas neque vehicula vitae.
          </p>
          <Button
            icon={<AiOutlineArrowRight />}
            iconPosition="end"
            shape="round"
            type="primary"
          >
            View more
          </Button>
        </div>
        <div className="flex items-center overflow-hidden rounded-xl shadow-lg md:w-1/3">
          <Image
            preview={false}
            src={image5}
            alt="Event image"
            className="object-cover"
          />
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <h2 className="mb-2 text-5xl font-semibold">
            Explore Our Project Collection
          </h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, cumque ducimus. Totam atque possimus fuga, laudantium
            magni vitae voluptatum distinctio labore animi praesentium molestiae
            blanditiis explicabo omnis doloremque minus soluta.
          </p>
          <div className="text-right">
            <Button
              icon={<AiOutlineArrowRight />}
              iconPosition="end"
              shape="round"
              type="primary"
            >
              View more
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {listImg.slice(0, 6).map((item, index) => {
            return (
              <div
                key={"img-" + index}
                className="relative flex max-h-80 items-center overflow-hidden rounded-xl bg-gray-200 shadow-lg"
              >
                <Image preview={false} src={item} alt="event" />
                <Button
                  icon={<FaExternalLinkAlt />}
                  size="large"
                  className="absolute bottom-2 right-2 shadow-xl"
                  shape="circle"
                ></Button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
