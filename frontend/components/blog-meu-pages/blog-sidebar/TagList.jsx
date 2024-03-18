import Link from "next/link";

const TagList = () => {
  const tagContent = [
    "app",
    "administrative",
    "android",
    "wordpress",
    "design",
    "react",
  ];

  return (
    <>
      {tagContent.map((item, i) => (
        <li key={i}>
          <Link href="#">{item}</Link>
        </li>
      ))}
    </>
  );
};

export default TagList;
