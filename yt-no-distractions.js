console.log('loaded yt-no-distractions.')

let targets = ['#masthead-container', '.html5-endscreen', '#columns']

const observer = new MutationObserver(() => {
    document.querySelectorAll(targets.join(', ')).forEach((element) => {
        const attributes = `${element.id} ${element.classList.value}`
        element.remove()
        targets = targets.filter(target => !attributes.includes(target.slice(1)))
    })
    if (!targets.length) observer.disconnect()
})

observer.observe(document.body, { subtree: true, childList: true })
