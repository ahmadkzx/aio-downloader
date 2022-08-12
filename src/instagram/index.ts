import getAsyncElement from '../utils/getAsyncElement'
import './instagram.scss'

async function injectDownloadBtn() {
  const btn = document.createElement('button')
  btn.id = 'unique'
  btn.style.backgroundImage = `url(${chrome.runtime.getURL('dist/static/instagram-download.svg')})`

  btn.addEventListener('click', download)

  const container = await getAsyncElement('._aamu')
  container.appendChild(btn)
}

function download() {
  const imgEl = document.getElementsByClassName('_aagt')[0] as HTMLImageElement
  const imgUrl = imgEl.srcset.split(',')[0].replace('1080w', '')

  window.open(imgUrl, '__blank')
}

injectDownloadBtn()
