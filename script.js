var counter = 1
function addRunningClass() {
    var counterNumber = document.getElementById('counter-number')
    const mariorun = document.getElementById('mario-running')
    if (mariorun.classList !== 'mario-jump-animation') {
        mariorun.classList.add('mario-jump-animation')
        mariorun.src = 'assets/mariorunning2.png'
    }
    setTimeout(() => {
        mariorun.classList.remove('mario-jump-animation')
        mariorun.src = 'assets/mariorunning2.gif'
        counterNumber.innerHTML = counter++
        mariorun.style.animation = 'mario-running-animation 1s steps(4) infinite'
    }, 1200)
}
document.addEventListener('keydown', addRunningClass)

const checkDead = setInterval(() => {
    const wrapper = document.querySelector('.wrapper')
    const failedWrapper = document.querySelector('.failed-wrapper')
    const mario = document.getElementById('mario-running')
    const enemy = document.getElementById('enemy-running')
    const marioPosition = mario.getBoundingClientRect()
    const enemyPosition = enemy.getBoundingClientRect()
    const marioFormated = parseInt(marioPosition.left) + 50
    if (
        enemyPosition.left < marioFormated &&
        enemyPosition.top < marioPosition.top + 50
    ) {
        wrapper.style.display = 'none'
        failedWrapper.style.display = 'flex'
    }
}, 10)
