// init observer
const docObserver = new MutationObserver(docObserverCall)
const option = {
  rootMargin: '100% 0px 0px',
  threshold: 0.8
}
const interObserver = new IntersectionObserver(interObserverCall, option)
// function mutation
function docObserverCall () {
  const fadeBox = document.getElementsByClassName('fade-box')
  for (const box of fadeBox) {
    interObserver.observe(box)
  }
}
// function intersect
function interObserverCall (entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1
      entry.target.style.left = 0
    } else if (!entry.isIntersecting && entry.target.hasAttribute('style')) {
      entry.target.removeAttribute('style')
    }
  }
}

export default {
  // call in mount viewApp
  newMutationObserver () {
    const doc = document.getElementById('app')
    const config = {
      childList: true,
      subtree: true
    }
    docObserver.observe(doc, config)
  }
}
