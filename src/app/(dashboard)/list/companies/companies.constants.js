const columns = [
  {
    header: "Empresas",
    accessor: "info",
  },
  {
    header: "Recrutadores",
    accessor: "candidates",
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

const constants = { columns };
const texts = {
  headerPage: "Empresas",
};

export { constants, texts };
