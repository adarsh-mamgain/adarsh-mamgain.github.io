document.addEventListener('DOMContentLoaded', () => {
  button = document.querySelector('button')
  show = document.querySelector('.show')
  mobile_show = document.querySelector('.mobile-show')
  share = document.querySelector('.share-button')
  i = document.querySelector('.fa-share')

  button.onclick = () => {
    if (show.style.display === "none") {
      show.style.display = 'flex'
      mobile_show.style.display = 'flex'
      share.style.backgroundColor = "#6d7f97"
      i.style.color = "white"
    }
    else if(show.style.display = 'flex'){
      show.style.display = 'none'
      mobile_show.style.display = 'none'
      share.style.backgroundColor = "#ecf2f8"
      i.style.color = "#6d7f97"
    }
  }
});