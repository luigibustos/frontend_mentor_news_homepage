const News = () => {
  const newItems = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className="row-span-2 bg-veryDarkBlue p-6">
      <h1 className="text-4xl text-softOrange mb-4">New</h1>
      <div className="flex flex-col gap-4">
        {newItems.map((item, idx) => {
          return (
            <div key={idx} className="border-b-grayishBlue border py-4">
              <h3 className="text-offWhite font-bold">{item.title}</h3>
              <p className="text-grayishBlue">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
