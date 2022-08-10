import getAsyncElement from '../utils/getAsyncElement'

async function injectDownloadBtn() {
  const btn = document.createElement('button')

  const container = await getAsyncElement('._aamu _aaz9')
  console.log(container)
  // container.appendChild(btn)
}

injectDownloadBtn()
