// 404.js
import Link from 'next/link'
import router from 'next/router'

export default function FourOhFour() {
  return <>
   

    <div className="_404"><h1>Akurat tej strony nie znaleliśmy / bład #404</h1>
   <br />
    
    <button type="button" onClick={() => router.back()}>
      Poprzednia strona
    </button>
    
    </div>
  
 
  </>
}