tailwind.config = {
    theme: {
      extend: {
        animation: {
          'fall-down': ' fall-down 0.3s ease-out forwards',
        },
        keyframes: {
          'fall-down': {
            '0%': { transform: 'translateY(-200px)' },
            '100%': { transform: 'translateY(0%)' },
          }
        },
        colors: {
          blue: "#0F264D",
          seca:"#C6E9FA",
          secblue:'#A4DCF7',
          terblue:'#E5F5FD',
          terablue:'#70C9F2'
          
        },
        screens: {
          'xsm':'376px',
          'sm': '640px',
          'csm': '570px',
          // => @media (min-width: 640px) { ... }
  
          'md': '769px',
          // => @media (min-width: 768px) { ... }
  
          'lg': '1024px',
          'clg': '920px',
          // => @media (min-width: 1024px) { ... }
  
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
  
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
       
      },
    },
  }
 function fun() {
  const x= document.querySelector('.dropdown');
  x.classList.toggle('hidden');
  x.classList.toggle('left-20');
  x.classList.toggle('top-64');
  x.classList.toggle('top-[11.5rem]');
  x.classList.toggle('right-[15.7rem]');
  const y= document.getElementsByClassName('update');
  var cha=y[0].innerHTML;
  

  if(cha=="Price"){
    y[0].innerHTML="Area";
    y[1].innerHTML ="Min Area";
    y[2].innerHTML="Max Area";
  }
 else{
    y[0].innerHTML="Price";
    y[1].innerHTML ="Min Price";
    y[2].innerHTML="Max Price";
  }

}
  
function fun1(){
  const z=document.querySelector('.dropdownB');
  z.classList.toggle('hidden');
  z.classList.toggle('left-[23.8rem]');
  z.classList.toggle('left-[30.5rem]');


}
function fun2(){
  const y=document.querySelector('.dropdownP');
  const a=document.querySelector('.rbtn');
  const b= document.querySelector('.cbtn');
  a.classList.remove('underline');
  a.classList.remove('text-black');
  a.classList.add('text-gray-500');
  b.classList.add('text-black');
  b.classList.add('underline');
  b.classList.remove('.text-gray-500');

}
function fun3(){
  const y=document.querySelector('.dropdownP');
  const a=document.querySelector('.rbtn');
  const b= document.querySelector('.cbtn');
  b.classList.remove('underline');
  b.classList.remove('text-black')
  b.classList.add('text-gray-500');
  a.classList.add('text-black');
  a.classList.add('underline');
  a.classList.remove('.text-gray-500');
}

function togglesidebar() {
  const y= document.querySelector('.homeul');
  const z= document.querySelector('.logoutul');
  const x= document.querySelector('.home');
  x.classList.toggle('no-underline');
  y.classList.toggle('hidden');
  y.classList.toggle('absolute');
  y.classList.toggle('top-14');
  y.classList.toggle('gap-4')
  y.classList.toggle('bg-seca');
  y.classList.toggle('animate-fall-down');
  y.classList.toggle('flex-col');
  y.classList.toggle('gap-10');
  y.classList.toggle('w-full');
  // z.classList.toggle('w-12/12');
  z.classList.toggle('w-full');
  z.classList.toggle('flex-col');
  z.classList.toggle('hidden');
  z.classList.toggle('absolute');
  z.classList.toggle('top-[9.5rem]');
  z.classList.toggle('gap-4');
  z.classList.toggle('bg-seca');
  z.classList.toggle('animate-fall-down');
  // z.classList.toggle('flex-col');
}
function showdetails(){
  const x=document.querySelector('.deta');
  x.classList.toggle('hidden');
  // x.classList.toggle('gap-4');
  // x.classList.toggle('z-50');
}