// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
   

    <div className="_404"><h1>404 - Akurat tej strony nie znaleliśmy</h1>
    <Link href="/">
      <a>
        Powrót do stony głównej
      </a>
    </Link></div>
  </>
}