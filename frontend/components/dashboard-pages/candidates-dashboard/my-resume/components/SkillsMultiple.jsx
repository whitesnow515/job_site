import Select from "react-select";

const SkillsMultiple = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <Select
      defaultValue={[catOptions[1]]}
      isMulti
      name="colors"
      options={catOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      required
    />
  );
};

export default SkillsMultiple;
