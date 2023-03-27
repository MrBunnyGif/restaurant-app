import Bascket from "./Views/Bascket";
import ItemInfo from "./Views/ItemInfo";
import ItemsMenu from "./Views/ItemsMenu";
import SectionInfo from "./Views/SectionInfo";

export default [
  {
    path: '/menu',
    element: <ItemsMenu />,
    private: true,
  },
  {
    path: '/bascket',
    element: <Bascket />,
    private: true,
  },
  {
    path: '/section',
    element: <SectionInfo />,
    private: true,
  },
  {
    path: '/item',
    element: <ItemInfo />,
    private: true,
  },
]