import IconeEstatisticas from "@material-ui/icons/Dashboard";
import IconeUsuarios from "@material-ui/icons/Person";
import IconeProdutos from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import Login from "paginas/Login/Login.js";
import Estatisticas from "paginas/Estatisticas/Estatisticas.js";
import Produtos from "paginas/Produtos/Produtos.js";
import Vendas from "paginas/Vendas/Vendas.js";
import Usuarios from "paginas/Usuarios/Usuarios.js";

const dashboardRoutes = [
  {
    path: "/estatisticas",
    name: "Estatísticas",
    rtlName: "لوحة القيادة",
    icon: IconeEstatisticas,
    component: Estatisticas,
    layout: "/admin",
  },
  {
    path: "/vendas",         // URL
    name: "Vendas",          // Nome no botão
    rtlName: "قائمة الجدول", // ignore....
    icon: "content_paste",   // Icone do botão
    component: Vendas,       // Componente ReactJS
    layout: "/admin",
  },
  {
    path: "/produtos",
    name: "Produtos",
    rtlName: "ملف تعريفي للمستخدم",
    icon: IconeProdutos,
    component: Produtos,
    layout: "/admin",
  },
  {
    path: "/usuarios",
    name: "Usuários",
    rtlName: "طباعة",
    icon: IconeUsuarios,
    component: Usuarios,
    layout: "/admin",
  },
];

export default dashboardRoutes;
