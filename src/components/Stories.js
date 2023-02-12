import pcImg from "../assets/images/image-retro-pcs.jpg";
import laptopImg from "../assets/images/image-top-laptops.jpg";
import gamingImg from "../assets/images/image-gaming-growth.jpg";
const Stories = () => {
  const stories = [
    {
      number: "01",
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      img: pcImg,
    },
    {
      number: "02",
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
      img: laptopImg,
    },
    {
      number: "03",
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      img: gamingImg,
    },
  ];
  return (
    <div className="col-span-3 grid grid-cols-3 gap-5 mt-8">
      {stories.map((story, idx) => {
        return (
          <div key={idx} className="w-full h-2/3 flex gap-4">
            <div className="flex w-1/3">
              <img
                className="w-full object-cover min-h-0"
                src={story.img}
                alt="Story Image"
              />
            </div>
            <div className="w-2/3 h-full">
              <h1 className="text-grayishBlue text-4xl font-bold mb-2">
                {story.number}
              </h1>
              <h1 className="text-veryDarkBlue font-bold mb-2">
                {story.title}
              </h1>
              <p className="text-grayishBlue">{story.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
