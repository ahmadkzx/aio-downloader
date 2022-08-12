import getAsyncElement from '../utils/getAsyncElement'
import './instagram.scss'

async function injectDownloadBtn() {
  const btn = document.createElement('button')
  btn.id = 'unique'
  btn.style.backgroundImage = `url(${chrome.runtime.getURL('dist/static/instagram-download.svg')})`

  const container = await getAsyncElement('._aamu')
  container.appendChild(btn)
}

injectDownloadBtn()
