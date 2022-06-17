const courses = [
    {
        courseName:'Web Comics',
        startAt:'12/10/2022',
        numberOfClasses:16,
        price:100.50
    },
    {
        courseName:'Build Cute Robots',
        startAt:'25/10/2022',
        numberOfClasses:12,
        price:95.99
    },
    {
        courseName:'Cooking Organic Meals',
        startAt:'05/11/2022',
        numberOfClasses:15,
        price:108
    }
]
const table = document.querySelector('.products')

document.getElementById('searchButton').addEventListener('click',()=>{
    const userSearch = document.getElementById('searchField').value.trim()
    
    const searchedArr = courses.filter(course=>{
        return course.courseName.toLowerCase().includes(userSearch.toLowerCase())
    })
    console.log(searchedArr);
    displayProducts(searchedArr)
})

function displayProducts(arrayData=courses){
    table.innerHTML=
    `<tr>
        <th>Course Name</th>
        <th>start At</th>
        <th>Number Of Classes</th>
        <th>price</th>
    </tr>`
    arrayData.forEach(course=>{
        table.innerHTML+=
        `<tr>
        <td>${course.courseName}</td>
        <td>${course.startAt}</td>
        <td>${course.numberOfClasses}</td>
        <td>${course.price} $</td>
        </tr>
        `
    })
}
displayProducts()