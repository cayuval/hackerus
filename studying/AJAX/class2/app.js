function createNewPost(){
    const title = document.getElementById('title').value
    const article = document.getElementById('Article').value
    const data = {
        title:title,
        article:article
    }

    console.log(data);
    console.log(typeof data);
    console.log(JSON.stringify(data));
    console.log(typeof JSON.stringify(data));
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        document.getElementById('body').innerHTML = `sent!`
        console.log('Sucsess!');
    })
    .catch((error)=>{
        throw Error('something went wrong...')
    });
}

document.querySelector('button').addEventListener('click',createNewPost)