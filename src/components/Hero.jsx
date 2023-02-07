import { GoLocation,BiPhone, BiEnvelope } from "react-icons/all";

const Hero = () => {
  return (
    <div className="py-3 px-6 ">
      <div className="my-10 grid md:grid-cols-2 gap-10 place-items-center ">
        <div className="space-y-5 grid place-content-center order-2 md:order-1">
          <h1 className="text-4xl font-semibold">
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text font-bold">
              Dive&nbsp;
            </span>
            <span>
              Into Depths of <br />
            </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text font-bold">
              Virtual Reality
            </span>
          </h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            amet explicabo minus placeat sunt molestias delectus eligendi, quasi
            optio cum tempora, ipsum pariatur illum aut earum, enim fugiat omnis
            soluta consequatur neque ducimus dolorum tempore. Obcaecati
            aspernatur recusandae repellat inventore?
          </p>

          <div className="flex items-center space-x-4 w-full">
            <a
              className="block w-full text-center md:w-fit font-semibold px-5 py-3 rounded-full text-black bg-gradient-to-r from-primary-700 to-primary-500 "
              href="#"
            >
              Build Your World
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              viewBox="0 0 46 38"
              fill="none"
              className=" hidden md:block"
            >
              <path
                d="M43.8333 18.9988L2.16666 18.9988M43.8333 18.9988L27.1667 35.6655M43.8333 18.9988L27.1667 2.33215"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="hero_img " src="/oculus_hero.png" alt="" />
        </div>
      </div>

      <div className="divide-x divide-primary-950 p-5 rounded-full flex justify-between bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
        <div class="flex justify-center items-center space-x-2 flex-1">
          <GoLocation className="text-4xl" />
          <div className="hidden md:grid">
            <h1 className="text-xl font-semibold">Pay us a visit</h1>
            <p>Mexico</p>
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2 flex-1">
          <BiPhone className="text-4xl" />
          <div className="hidden md:grid">
            <h1 className="text-xl font-semibold">Give Us A Call</h1>
            <p>+2519 4232 132</p>
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2 flex-1">
          <BiEnvelope className="text-4xl" />
          <div className="hidden md:grid">
            <h1 className="text-xl font-semibold">Send Us A Message</h1>
            <p>Mexico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
