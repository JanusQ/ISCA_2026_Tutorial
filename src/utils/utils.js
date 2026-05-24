const BASE_PATH = "/ISCA_2026_Tutorial"

export const downloadPdf = async (pdfName, title) => {
  const response = await fetch(`${BASE_PATH}/PDF/${pdfName}.pdf`)
  const pdfBlob = await response.blob()

  const url = URL.createObjectURL(pdfBlob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title}.pdf`
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}
// previewPdf.js
export function previewPdf(pdfName) {
  console.log(888888)
  const iframe = document.createElement('iframe')
  iframe.src = `${BASE_PATH}/PDF/${pdfName}.pdf`
  iframe.style.width = '100%'
  iframe.style.height = '600px'
  document.body.appendChild(iframe)
}
// downloadPdfWithProgress.js
export async function downloadPdfWithProgress(pdfName, title) {
  const response = await fetch(`${BASE_PATH}/${pdfName}.pdf`)
  const total = Number(response.headers.get('Content-Length'))
  const reader = response.body.getReader()

  const chunks = []
  let received = 0

  let reading = true
  while (reading) {
    const { done: streamDone, value } = await reader.read()
    if (streamDone) {
      reading = false
      continue
    }
    chunks.push(value)
    received += value.length
    const progress = Math.round((received / total) * 100)
    // 更新进度条的代码，这里只是简单示例
    console.log(`Download Progress: ${progress}%`)
  }

  const pdfBlob = new Blob(chunks)
  const url = URL.createObjectURL(pdfBlob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title}.pdf`
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}
