const randomImage = response => {
    console.log("Random", response)

    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}
const imagen = response => response.json()
fetch('https://picsum.photos/seed/picsum/200/300')
    .then(status)
    .then(imagen)
    .then(data => {
       console.log('Request succeeded with random image', data)
    })
    .catch(error => {
       console.log('Request failed', error)
    })