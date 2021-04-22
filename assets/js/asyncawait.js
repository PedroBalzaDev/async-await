//Promise .then
const randomImage = response => {
    console.log("Random", response)

    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const getDataWithPromises = (url) => {
    fetch(url)
    .then(status)
    .then(response => response.json())
    .then(data => {
        console.log('Random image Promise', data)
    })
    .catch(error => {
        console.log('Request failed', error)
    })
}

getDataWithPromises('https://picsum.photos/v2/list?page=2&limit=15');

//Async/Await
const randomImageAA = async () => {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=15')
        const imagenes = await response.json()
        return imagenes
    } catch (error) {
        console.log('Request failed',error)
    }
}
const img = async () => {
    const imgRandom = await randomImageAA()
    imgRandom.map((posActual)=>{
    
    const { download_url } = posActual;
       var img = document.createElement('img');
            img.classList.add("img");
            img.src = download_url;
            document.querySelector('#content').appendChild(img);

    })
    console.log('Random image Async/Await', imgRandom)
}
img()




      