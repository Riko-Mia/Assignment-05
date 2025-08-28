

const parentCart = document.getElementsByClassName("card-actions")
const coins = document.getElementById('coins')
const historyesSection = document.getElementById("historyes")
const copyNum = document.getElementById("copy-text")
const hartText = document.getElementById("hart-text")
const hartClass = document.getElementsByClassName("fa-heart")
let historyes = []
let duplicates =[]
let copyCount = 0
let heartCountNum = 0



 function clearBtn(){
    historyesSection.innerText = ''
 }



 function heartCount(){
    heartCountNum += 1
    hartText.innerText = heartCountNum
    console.log(heartCountNum)
    for (let hart of hartClass){

    }
}



 function copyText(e){
    copyCount += 1
    copyNum.innerText = copyCount

    for(let item of parentCart){
        if(item.parentNode.children[0].innerText === e){
            
            navigator.clipboard.writeText(item.parentNode.children[2].innerText)
            alert(`Number is copy  ${item.parentNode.children[2].innerText}...`)
        }
    }

 }




function callFunction(e){



    // console.log(e)
    for(let item of parentCart){

    if(e === item.parentNode.children[0].innerText){
        // alert(`Calling ${item.parentNode.children[0].innerText}  ${item.parentNode.children[2].innerText}...`)
        
        let num = parseInt(coins.innerText)
        

        if(num > 0){

            coins.innerText = num - 20
            let history = {
                title: item.parentNode.children[0].innerText,
                number: item.parentNode.children[2].innerText,
                date: new Date().toLocaleTimeString()
            }

            historyes.push(history)

            alert(`Calling ${item.parentNode.children[0].innerText}  ${item.parentNode.children[2].innerText}...`)
                getHistory()
            

        } else{
            coins.innerText = '0'
            alert('need coin')
        }

console.log(historyes, '==============')

    }
    }


// for (let h of historyes){

//                 const p = document.createElement("p")
//                 const p2 = document.createElement("p")
//                 const p3 = document.createElement("p")
//                 const createDiv = document.createElement("div")
//                 createDiv.classList.add("historyes")
//                 const createInDiv = document.createElement("div")
//                 let createNewDiv = createDiv.appendChild(createInDiv) 

//                 let para = createNewDiv.appendChild(p) 
//                 para.innerText = h.title
//                 let para2 = createNewDiv.appendChild(p2) 
//                 para2.innerText = h.number
//                 let para3 = createDiv.appendChild(p3) 
//                 para3.innerText = h.date

                
//                 historyesSection.appendChild(createDiv)
//             }

 } 



function getHistory(){

    for (let h of historyes){
        

                const p = document.createElement("p")
                const p2 = document.createElement("p")
                const p3 = document.createElement("p")
                const createDiv = document.createElement("div")
                createDiv.classList.add("historyes")
                const createInDiv = document.createElement("div")
                let createNewDiv = createDiv.appendChild(createInDiv) 

                let para = createNewDiv.appendChild(p) 
                para.innerText = h.title
                let para2 = createNewDiv.appendChild(p2) 
                para2.innerText = h.number
                let para3 = createDiv.appendChild(p3) 
                para3.innerText = h.date

                                                        
                historyesSection.appendChild(createDiv)



console.log(h)

            }
}

// console.log(historyes)





