import desktop from "../assets/images/image-web-3-desktop.jpg";
const Main = () => {
  return (
    <div className="col-span-2 row-span-2 bg-blue-200 grid grid-cols-2 grid-rows-2 gap-6">
      <div className="col-span-2 flex">
        <img
          className="w-full object-cover min-h-0"
          src={desktop}
          alt="Desktop Image"
        />
      </div>
      <div className="text-6xl font-bold">The Bright Future of Web 3.0?</div>
      <div>
        <p className="text-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="min-h-fit min-w-fit py-3 px-6 mt-6 uppercase tracking-[.2em] text-sm bg-softRed text-offWhite hover:translate-y-1 duration-150">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Main;
