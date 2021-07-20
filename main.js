// Vanilla JS

window.onload = function() {

  const dt = document.querySelectorAll('.faq dt');

  // DOM click 순회
  for(let i = 0; i < dt.length; i++) {
    dt[i].addEventListener('click', function(){
      for(let j = 0; j < dt.length; j++){
        if(i == j) continue;
        dt[j].nextElementSibling.classList.remove('active');
      }
      this.nextElementSibling.classList.toggle('active');

      if(this.nextElementSibling.classList.contains('active')) {
        // 열렸을 때
        const btn = document.querySelectorAll('.faq dt button');
        for(let i = 0; i < btn.length; i++) {
          btn[i].classList.remove('up');
        }
        console.log(this.children[0])
        this.children[0].classList.add('up')
      } else {
        // 닫혔을 때
        this.children[0].classList.remove('up')
      }
    });
  }

}
