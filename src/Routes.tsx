import { RouteProps } from "react-router";
import Bascket from "./views/Bascket";
import ItemInfo from "./views/ProductInfo";
import ItemsMenu from "./views/ProductsMenu";
import SectionInfo from "./views/SectionInfo";

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