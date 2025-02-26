
//build dataSet

const data =[
    {
        id:1,
        item: 'romaTomato',
        itemDisplay: 'Roma Tomato',
        priceDisplay: 1.35
    },
    {
        id:2,
        item: 'watermelon',
        itemDisplay: 'Watermelon',
        priceDisplay: 3.45
    },
    {
        id:3,
        item: 'grapes',
        itemDisplay: 'Grapes',
        priceDisplay: 1.20
    },
    {
        id:4,
        item: 'Apples',
        itemDisplay: 'Apples',
        priceDisplay: 1.35
    },
    {
        id:5,
        item: 'bannana',
        itemDisplay: 'Bannana',
        priceDisplay: 2.50
    },
    {
        id:6,
        item: 'potatos',
        itemDisplay: 'Potatos',
        priceDisplay: 1.25
    },
    {
        id:7,
        item: 'pears',
        itemDisplay: 'Pears',
        priceDisplay: 1.00
    },
    {
        id:8,
        item: 'pineapples',
        itemDisplay: 'Pineapples',
        priceDisplay: 3.33
    },
    {
        id:9,
        item: 'bellPeppers',
        itemDisplay: 'Bell Peppers',
        priceDisplay: 1.35
    }
]

// let pricePerPound = 0
// let weight = 0
// let item = ''
// let price = 0
let results = {
    item: '',
    weight: 0,
    price: 0,
    pricePerPound: 0
}

//Display data on browser
// .map() => return a copied arr after performing a task on an original array


const cells = data.map(item =>{
    const cell = document.createElement('div')
    cell.classList.add('item')
    cell.setAttribute('data-item', `${item.item}`)
    cell.innerText = `${item.itemDisplay} - ${item.priceDisplay} per lb.`

    return cell
})

cells.forEach(cell =>{
    document.getElementById('itemSection').appendChild(cell)

    cell.addEventListener('click', ()=>{
        // console.log('click')
        const itemDisplay = document.getElementById('itemDisplay')
        for(let obj of data){
            if(obj.item == cell.getAttribute('data-item')){
                results.item = obj.itemDisplay
                results.pricePerPound = obj.priceDisplay

                itemDisplay.innerText = results.item
            }
        }
    })
})

const setWeight = ()=>{
    const scale = parseFloat(document.getElementById('scale').value)
    // console.log(scale)
    results.weight = scale

    setPrice(results.weight, results.pricePerPound)
}


const setPrice =(w, p)=>{
    results.price = w * p
    return results.price
}

const displayResults =()=>{
    const weightDisplay = document.getElementById('weightDisplay')
    const priceDisplay = document.getElementById('priceDisplay')

    // results.item = item
    // results.price = price
    // results.weight = weight

    weightDisplay.innerText = results.weight
    priceDisplay.innerText = results.price.toFixed(2)
}


const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    setWeight()
    displayResults()
})