export default async function loadGoogleTranslateScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'

    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
