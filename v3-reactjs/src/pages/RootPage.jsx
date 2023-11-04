import '../../App.less';
import { MenuComponent } from '../components/MenuComponent';
import { ProductsContainerComponent } from '../components/ProductsContainerComponent';

function RootPage() {

  return (
    <>
      <MenuComponent></MenuComponent>
      <ProductsContainerComponent></ProductsContainerComponent>
    </>
  )
}

export default RootPage
