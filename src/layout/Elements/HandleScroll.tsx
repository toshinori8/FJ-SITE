
const handleScroll = () => {
  // console.log('scroll event', window.scrollY)

  let logo = document.querySelector('.logo');


  if(window.scrollY > 80){
    
   logo?.classList.add("mini");
    
    // document.querySelector(".logo_div").className="pl-4 flex items-center logo_div upper"
  }else{
      logo?.classList.remove("mini");
  }
  if(window.scrollY > 260){
    // document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim hidden');
    
    // document.querySelector("body").className="bodyColor01";
    // document.querySelector(".headerElements").className="headerElements_hide headerElements";
  }else{
    // document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim');
    // document.querySelector("body").className="noColor"
    // document.querySelector(".headerElements").className="headerElements";
  }

  if(window.scrollY > 30){

    //   }else{
    // document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim');
    }


}
export default handleScroll