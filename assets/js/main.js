///1)
let done = true
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})
const checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => {
            //console.log('La promesa se completo', ok)
        })
        .catch((err) => {
            // console.log('La promesa tuvo un error', err)
        })
}
checkIfItsDone()


//OTRO EJEMPLO de GET
//2)
const status = response => {
    //console.log("el reponse es", response)
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}
const json = response => response.json()
fetch('https://prog-3-leads-api-rest.vercel.app/leads')
    .then(status)
    .then(json)
    .then(data => {
       // console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
       // console.log('Request failed', error)
    })


//Ejemplo de POST
//3)
const options = {
    method: 'post',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'nombre=Flavio&sexo=M&email=lean@ddddd.com&comentarios=post%20desde%20api'
}
const optionsJSON = {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Ricardo fort',
        sexo: 'M',
        email: 'lean@ddddd.com',
        comentarios: "Post desde la API en Formato JSON!"
    })
}
fetch('https://prog-3-leads-api-rest.vercel.app/leads', optionsJSON)
    .then(response => response.json())
    .then(data => {
        //console.log('Request succeeded with JSON response', data)
        const { nombre } = data
       // console.log('Gracias por contactarnos', nombre)
    })
    .catch(err => {
       // console.error('Request failed', err)
    })


//Ejemplo Async/Await
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}
const doSomething = async () => {
    //console.log(await doSomethingAsync())
}
//console.log('Before')
//doSomething()
//console.log('After')
//Fetch Async / Await
const getUsers = async () => {
    const response = await fetch('https://prog-3-leads-api-rest.vercel.app/leads')
    const users = await response.json()
    return users
}

//Otro ejemplo con Try/Catch
const getUsersTry = async () => {
    try {
        const response = await fetch('https://prog-3-leads-api-rest.vercel.app/leads')
        const users = await response.json()
        return users
    } catch (error) {
        // console.log('Hubo un error',error)
    }
}
const mainLogic = async () => {
    const users = await getUsersTry()
    // console.log('los usuarios son', users)
}
mainLogic()