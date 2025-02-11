const columns = [
    {
      header: "Recrutador",
      accessor: "info",
    },
    {
      header: "Recrutador ID",
      accessor: "recruiterId",
      className: "hidden md:table-cell",
    },
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
    headerPage: "Recrutadores"
};

export { constants, texts };
