import Link from 'next/link';


function MenuItems() {


  return (
    <ul className='primary'>
      <li>
        <Link href="/"><span className="icon solid fa-home"></span></Link>
      </li>
      <ul>
        <li>
          <Link href="/oferta/malowanie-dachow">Malowanie</Link>
        </li>
        <li>
          <Link href="/oferta/pielegnacja-ogrodow">Ogrody</Link>
        </li>
      </ul>
      <li>
        <Link href="/wycena/">Wycena</Link>
      </li>
      <li>
        <Link href="/kontakt/">Kontakt</Link>
      </li>
    </ul>
  );
}

export default MenuItems;
