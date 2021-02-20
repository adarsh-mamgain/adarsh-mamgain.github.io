document.addEventListener('DOMContentLoaded', () =>{
  clicked = document.querySelectorAll('.text')
  flex = document.querySelectorAll('.flex')
  span = document.querySelectorAll('span')
  arrow = document.querySelectorAll('.arrow')

  clicked.forEach(element => {
    element.onclick = () => {
      span.forEach(hello => {
        hello.classList.add('active')
      })
      flex.forEach(hello => {
        hello.classList.remove('bold')
      })
      arrow.forEach(hello => {
        hello.classList.remove('rotate')
      })
      now = element.childNodes
      bold = now[1]
      bold.classList.add('bold')
      child = bold.childNodes
      child[3].classList.add('rotate')
      selected = now[3].classList.remove('active')
      console.log(selected)
    }
  });
});
