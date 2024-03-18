const Block6 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/process-2.png",
      title: "Alarm bei neuen Jobs",
      text: `Sag uns was du suchst und wir informieren dich sofort, wenn ein neuer Job ausgeschrieben ist.`,
      bgClass: "-blue",
    },
    {
      id: 2,
      icon: "/images/resource/process-1.png",
      title: "Persönliche Job Empfehlungen",
      text: `Unser intelligentes System findet passende Jobs für dich, die du selbst noch nicht entdeckt hast.`,
      bgClass: "-red",
    },
    {
      id: 3,
      icon: "/images/resource/process-3.png" ,
      title: "Bewerben mit nur 1 Klick",
      text: `Erfasse deine Angaben ein einziges Mal und bewirb dich schnell und einfach auf weitere Stellen.`,
      bgClass: "-yellow",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="process-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="icon-box">
            <img src={item.icon} alt="how it works" />
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>

        </div>
      ))}
    </>
  );
};


export default Block6;
