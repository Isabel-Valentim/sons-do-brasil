const btnPlaySamba = document.querySelector('.btnPlaySamba')
const btnPauseSamba = document.querySelector('.btnPauseSamba')

const btnPlayBossa = document.querySelector('.btnPlayBossa')
const btnPauseBossa = document.querySelector('.btnPauseBossa')

const btnPlayMpb = document.querySelector('.btnPlayMpb')
const btnPauseMpb = document.querySelector('.btnPauseMpb')

const musicBarsSamba = document.querySelector('.music-bars-samba')
const musicBarsBossa = document.querySelector('.music-bars-bossa')
const musicBarsMpb = document.querySelector('.music-bars-mpb')


btnPlaySamba.addEventListener('click', () => On('samba'))
btnPauseSamba.addEventListener('click', () => Off('samba'))

btnPlayBossa.addEventListener('click', () => On('bossa'))
btnPauseBossa.addEventListener('click', () => Off('bossa'))

btnPlayMpb.addEventListener('click', () => On('mpb'))
btnPauseMpb.addEventListener('click', () => Off('mpb'))


function On(musicType){
    if(musicType == 'samba'){
        musicBarsSamba.classList.remove('pausemusic')
    }
    else if(musicType == 'bossa'){
        musicBarsBossa.classList.remove('pausemusic')
    }
    else{
        musicBarsMbp.classList.remove('pausemusic')
    }
}
function Off(musicType){
    if(musicType == 'samba'){
        musicBarsSamba.classList.add('pausemusic')
    }
    else if(musicType == 'bossa'){
        musicBarsBossa.classList.add('pausemusic')
    }
    else{
        musicBarsMbp.classList.add('pausemusic')
    }
}