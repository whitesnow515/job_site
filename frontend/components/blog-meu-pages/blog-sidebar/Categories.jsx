import Link from "next/link";

const Categories = () => {
  const catContent = [
    "Education",
    "Information",
    "Interview",
    "Job Seeking",
    "Jobs",
    "Learn",
    "Skill",
    "Travel",
  ];
  return (
    <>
      {catContent.map((item, i) => (
        <li key={i}>
          <Link href="#">{item}</Link>
        </li>
      ))}
    </>
  );
};

export default Categories;
