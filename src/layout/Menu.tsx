import { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        document.body.classList.remove('is-menu-visible');
        //  console.log('ESC');
      }
      // console.log(event.keyCode);
    });
  }, []);

  const showMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log('showMobileMenu');
    document.body.classList.toggle('is-menu-visible');
  };

  return (
    <>
      <h1>
        <a href="index.html">Solid State</a>
      </h1>
      <nav id="burger">
        <a href="#" onClick={(e) => showMobileMenu(e)}>
          Menu
        </a>
      </nav>
    </>
  );
}

export default Menu;
