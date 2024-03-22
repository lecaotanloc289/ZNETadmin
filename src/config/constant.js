// export const base_url = "http://localhost:8080/api/v1"
export const base_url = 'http://0.tcp.ap.ngrok.io:19211/api/v1'
// export const base_url = 'tcp://0.tcp.ap.ngrok.io:19211/api/v1'
export function formatDate(text) {
    let spl = text?.split(' ')
    return spl[0] + ' ' + spl[1].split('.')[0]
}

export function extractId(text) {
    let spl = text?.split(' ')
    return spl[4]
}

export function formatDateTime() {
    var date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
