//Promise .then
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
const randomImageAA = async (url) => {
    try {
        const response = await fetch(url)
        const imagenes = await response.json()
        return imagenes
    } catch (error) {
        console.log('Request failed',error)
    }
}
const img = async () => {
    const imgRandom = await randomImageAA('https://picsum.photos/v2/list?page=2&limit=15')
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




      