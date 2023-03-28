import { RouteProps } from "react-router";
import Bascket from "./Views/Bascket";
import ItemInfo from "./Views/ItemInfo";
import ItemsMenu from "./Views/ItemsMenu";
import SectionInfo from "./Views/SectionInfo";

const Routes: RouteProps[] = [
  {
    path: '/menu',
    element: <ItemsMenu />,
  },
  {
    path: '/bascket',
    element: <Bascket />,
  },
  {
    path: '/section',
    element: <SectionInfo />,
  },
  {
    path: '/item/:id',
    element: <ItemInfo />,
  },
]

export default Routes