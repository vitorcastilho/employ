const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Recruiters",
    accessor: "recruiters",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const constants = { columns };
const texts = {
  headerPage: "All Subjects",
};

export { constants, texts };
