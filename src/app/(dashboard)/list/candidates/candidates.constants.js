const columns = [
    {
      header: "Candidato",
      accessor: "info",
    },
    {
      header: "Candidato ID",
      accessor: "candidateId",
      className: "hidden md:table-cell",
    },
    // {
    //   header: "Grade",
    //   accessor: "grade",
    //   className: "hidden md:table-cell",
    // },
    {
      header: "Telefone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Endereço",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Ações",
      accessor: "action",
    },
  ];

const constants = {columns};
const texts = {
    headerPage: "Candidatos"
};

export { constants, texts };