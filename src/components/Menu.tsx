// import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/recruiter.png",//"/teacher.png",
        label: "Recrutadores",
        href: "/list/recruiters",
        visible: ["admin", "recruiter"],
      },
      {
        icon: "/student.png",
        label: "Candidatos",
        href: "/list/candidates",
        visible: ["admin", "recruiter"],
      },
      {
        icon: "/company.png", //"/parent.png",
        label: "Empresas",
        href: "/list/companies",
        visible: ["admin", "recruiter"],
      },
      {
        icon: "/subject.png",
        label: "Assuntos",
        href: "/list/subjects",
        visible: ["admin"],
      },
      // {
      //   icon: "/class.png",
      //   label: "Classes",
      //   href: "/list/classes",
      //   visible: ["admin", "recruiter"],
      // },
      // {
      //   icon: "/lesson.png",
      //   label: "Lessons",
      //   href: "/list/lessons",
      //   visible: ["admin", "recruiter"],
      // },
      {
        icon: "/exam.png",
        label: "Avaliações",
        href: "/list/exams",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/assignment.png",
        label: "Tarefas",
        href: "/list/assignments",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/result.png",
        label: "Resultados",
        href: "/list/results",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/attendance.png",
        label: "Comparecimento",
        href: "/list/attendance",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/calendar.png",
        label: "Eventos",
        href: "/list/events",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/message.png",
        label: "Mensagens",
        href: "/list/messages",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/announcement.png",
        label: "Anúncios",
        href: "/list/announcements",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Perfil",
        href: "/profile",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/setting.png",
        label: "Configurações",
        href: "/settings",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
      {
        icon: "/logout.png",
        label: "Sair",
        href: "/logout",
        visible: ["admin", "recruiter", "candidate", "company"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            // if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            // }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;