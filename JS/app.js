window.addEventListener('DOMContentLoaded', function(){
    var videoPlay = this.document.querySelector('.play_btn');
    var videoBlock = this.document.querySelector('.main_video_block');

    videoPlay.addEventListener('click', function() {

        if (!videoBlock.classList.contains('ready')) {

            videoBlock.classList.add('ready');
        
            videoBlock.insertAdjacentHTML('afterbegin', '<iframe class="main_video" width="100%" height="100%"src="https://www.youtube.com/embed/BwoXsuo6GuI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
        }

        if (!videoPlay.classList.contains('hiden_btn')) {

            setTimeout(function(){videoPlay.classList.add('hiden_btn')},500);

        }
        
    })

});


let formLabels = document.querySelectorAll('.labelValid'),
    formInputs = document.querySelectorAll('.input_group'),
    form = document.querySelector('.form_block');

    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      formInputs.forEach(function(input, index) {
        if (input.value === '') {
          formLabels[index].classList.add('Inline');
          console.log('Wrong');
        } else {
          formLabels[index].classList.remove('Inline');
        }
      });
    });
    


