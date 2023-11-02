
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export function MenuComponent() {

  function toggleMenu(){
    document.getElementById('menuPrincipal').classList.toggle('desactivated');
  }

  return (
    <>
      <aside className="menu bleu">
        <h1><FontAwesomeIcon icon={faCircleNotch} /> Circle Products</h1>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} /> {/* */}
        <nav className="desactivated" id="menuPrincipal">
          <ul>
            <li>Dashboard</li>
            <li className="on">Products managements</li>
            <li>Employees managements</li>
            <hr />
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
    </>
  )
}