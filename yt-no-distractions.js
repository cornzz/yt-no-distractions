console.log('loaded yt-no-distractions.')

const watch = window.location.pathname.startsWith('/watch')
const embed = window.location.pathname.startsWith('/embed')
const allowLanding = localStorage.getItem('allowLanding')

if (watch || embed) {
    let targets = [
        '.html5-endscreen',
        ...(!embed ? ['#masthead-container', '#below', '#secondary'] : ['.ytp-pause-overlay-container'])
    ]
    
    const observer = new MutationObserver(() => {
        document.querySelectorAll(targets.join(', ')).forEach((element) => {
            element.remove()
            const attributes = `${element.id} ${element.classList.value}`
            targets = targets.filter(target => !attributes.includes(target.slice(1)))
        })
        if (!targets.length) observer.disconnect()
    })
    
    observer.observe(document.body, { subtree: true, childList: true })
} else if (!allowLanding) {
    document.body.remove()
}
