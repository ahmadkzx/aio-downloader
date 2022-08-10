export default function getAsyncElement(selector: string) {
  return new Promise<HTMLElement>((resolve) => {
    if (document.querySelector(selector))
      return resolve(document.querySelector(selector) as HTMLElement)

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        observer.disconnect()
        resolve(document.querySelector(selector) as HTMLElement)
      }
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    })
  })
}
