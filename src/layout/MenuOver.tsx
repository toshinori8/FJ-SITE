import Link from 'next/link';

function MenuOver() {
  const hideMenuOver = (e: React.MouseEvent) => {
    e.preventDefault();

    // console.log('sad');
    document.body.classList.remove('is-menu-visible');

    // useEffect(() => {

    // }, []);
  };

  return (
    <>
      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <Link href="/kontakt/">Kontakt</Link>
            </li>
            <li>
              <Link href="/wycena/">Wycena</Link>
            </li>
          </ul>
          {/* <a href="#" className="close" ></a> */}
          <div id="nav-icon" className="close" onClick={(e) => hideMenuOver(e)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuOver;
