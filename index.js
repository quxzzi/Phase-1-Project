fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/', {
    method: 'POST',
    headers: {
        contentType: 'application/json'
    },
    body: JSON.stringify({
        name: genre
    })
})
 .then(res => {
    if (res.ok) {
        console.log('Success')
    } else {
        console.log('Error')
    }
 })
 .then(data => console.log(data))
