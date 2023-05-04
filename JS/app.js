let form = document.querySelector('.form_block'),
    formInputs = document.querySelectorAll('.labelValid'),
    afterStyle = window.getComputedStyle(formInputs, '::after'),
    inputEmail = document.querySelector('#email'),
    inputPass = document.querySelector('#pass');


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



form.onsubmit = function () {
    elmailVal = inputEmail.value,
    passVal = inputPass.value;

    afterStyle.forEach(function(input) {
        if (input.value === '') {
            afterStyle.display = 'inline';
            console.log('input huinya minyai')
        } 

        else {
            afterStyle.display = 'none';
        }
    })

    return false;
};
