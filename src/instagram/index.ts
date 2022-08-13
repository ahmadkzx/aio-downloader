import getAsyncElement from '../utils/getAsyncElement'
import './instagram.scss'

const CLASS_LIST = {
  paginationDot: '._acnb',
  slidesContainer: '._acay',
  actionsContainer: '._aamu',
  paginationNextBtn: '._aahi',
  paginationPrevBtn: '._aahh',
}

let slidesCount = 0
let currentSlideIndex = 0

async function preparePage() {
  const nextBtn = await getAsyncElement(CLASS_LIST.paginationNextBtn)
  nextBtn.addEventListener('click', async () => {
    currentSlideIndex++
    if (currentSlideIndex == 1) {
      const prevBtn = await getAsyncElement(CLASS_LIST.paginationPrevBtn)
      prevBtn.addEventListener('click', () => currentSlideIndex--)
    }
  })

  slidesCount = document.querySelectorAll(CLASS_LIST.paginationDot).length
}

async function injectDownloadBtn() {
  const btn = document.createElement('button')
  btn.id = 'unique'
  btn.style.backgroundImage = `url(${chrome.runtime.getURL('dist/static/instagram-download.svg')})`

  btn.addEventListener('click', download)

  const container = await getAsyncElement(CLASS_LIST.actionsContainer)
  container.appendChild(btn)
}

function download() {
  // chrome.runtime.sendMessage({
  //   action: 'CREATE_WINDOW',
  //   url: location.href,
  // })

  let imgIndex
  if (currentSlideIndex == 0) {
    imgIndex = 2
  } else if (currentSlideIndex == slidesCount) {
    imgIndex = 4
  } else {
    imgIndex = 3
  }

  const imgEl = document.querySelector(
    `${CLASS_LIST.slidesContainer} li:nth-child(${imgIndex}) img`
  ) as HTMLImageElement
  const imgUrl = imgEl.srcset.split(',')[0].replace('1080w', '')

  window.open(imgUrl, '__blank')
}

preparePage()
injectDownloadBtn()
