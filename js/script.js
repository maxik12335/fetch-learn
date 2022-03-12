// ЧТо сделать ?
// БЕЗ JSON server ----------------------
// GET - Ok
// GET + func - Ok
// POST - Ok
// POST + func - Ok
// С JSON server ----------------------
// GET - Ok
// GET + func - Ok
// POST
// POST + func
// БЕЗ JSON server &&  С JSON server
// POST JSON

const form = document.querySelector('form')

// БЕЗ JSON server ----------------------
// GET
// fetch('db.json')
//     .then(data => data.json())
//     .then(data => console.log(data))

// GET + func
// const get = async (url) => {
//     const res = await fetch(url)
//     return await res.json()
// }
// get('db.json')
//     .then(data => console.log(data))

// POST
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)

//     fetch('server.php', {
//         method: 'POST',
//         body: formData
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// POST + func
// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: data
//     })

//     return await res.text()
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)

//     postData('server.php', formData)
//         .then(data => console.log(data))
// })

// С JSON server
// GET
// fetch('http://localhost:3000/menu')
//     .then(data => data.text())
//     .then(data => console.log(data))

// GET + func
// const get = async (url) => {
//     const res = await fetch(url)
//     return await res.json()
// }
// get('http://localhost:3000/menu')
//     .then(data => console.log(data))

// POST
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     fetch('http://localhost:3000/requests', {
//         method: 'POST',
//         body: formData
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// POST + func
// const post = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: data
//     })

//     return await res.text()
// }
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     post('http://localhost:3000/requests', formData)
//         .then(data => console.log(data))
// })

// БЕЗ JSON server &&  С JSON server JSON
// С JSON server
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     const json = JSON.stringify(Object.fromEntries(formData.entries()))
//     fetch('http://localhost:3000/requests', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: json
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// Без JSON server
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     const json = JSON.stringify(Object.fromEntries(formData.entries()))
//     fetch('server.php', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: json
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

let test = ''
test = `
// ЧТо сделать ?
// БЕЗ JSON server ----------------------
// GET - Ok
// GET + func - Ok
// POST - Ok
// POST + func - Ok
// С JSON server ----------------------
// GET - Ok
// GET + func - Ok
// POST
// POST + func
// БЕЗ JSON server &&  С JSON server
// POST JSON

const form = document.querySelector('form')

// БЕЗ JSON server ----------------------
// GET
// fetch('db.json')
//     .then(data => data.json())
//     .then(data => console.log(data))

// GET + func
// const get = async (url) => {
//     const res = await fetch(url)
//     return await res.json()
// }
// get('db.json')
//     .then(data => console.log(data))

// POST
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)

//     fetch('server.php', {
//         method: 'POST',
//         body: formData
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// POST + func
// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: data
//     })

//     return await res.text()
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)

//     postData('server.php', formData)
//         .then(data => console.log(data))
// })

// С JSON server
// GET
// fetch('http://localhost:3000/menu')
//     .then(data => data.text())
//     .then(data => console.log(data))

// GET + func
// const get = async (url) => {
//     const res = await fetch(url)
//     return await res.json()
// }
// get('http://localhost:3000/menu')
//     .then(data => console.log(data))

// POST
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     fetch('http://localhost:3000/requests', {
//         method: 'POST',
//         body: formData
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// POST + func
// const post = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: data
//     })

//     return await res.text()
// }
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     post('http://localhost:3000/requests', formData)
//         .then(data => console.log(data))
// })

// БЕЗ JSON server &&  С JSON server JSON
// С JSON server
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     const json = JSON.stringify(Object.fromEntries(formData.entries()))
//     fetch('http://localhost:3000/requests', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: json
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })

// Без JSON server
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     const json = JSON.stringify(Object.fromEntries(formData.entries()))
//     fetch('server.php', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: json
//     })
//         .then(data => data.text())
//         .then(data => console.log(data))
// })`
let testBlock = document.createElement('pre')
form.append(testBlock)
testBlock.innerHTML = test