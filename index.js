

const parentCart = document.getElementsByClassName("card-actions")
const coins = document.getElementById('coins')
const historyesSection = document.getElementById("historyes")
const copyNum = document.getElementById("copy-text")
const hartText = document.getElementById("hart-text")
const hartClass = document.getElementsByClassName("fa-heart")
// let historyes = []
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
            // let history = {
            //     title: item.parentNode.children[0].innerText,
            //     number: item.parentNode.children[2].innerText,
            //     date: new Date().toLocaleTimeString()
            // }

            // historyes.push(history)

            alert(`Calling ${item.parentNode.children[0].innerText}  ${item.parentNode.children[2].innerText}...`)
                // getHistory()



                const newCart = document.createElement('div')
                
                newCart.innerHTML =`<div id="historyes" class="flex justify-between items-center p-5 bg-[#FAFAFA] rounded-xl mb-4">
                    <div>
                        <p class="text-[18px]">${item.parentNode.children[0].innerText} </p>
                        <p class="text-[18px] text-[#5C5C5C]">${item.parentNode.children[2].innerText}</p>
                    </div>
                    <p class="text-[18px]">${new Date().toLocaleTimeString()}</p>
                </div>`

                historyesSection.appendChild(newCart)
            

        } else{
            coins.innerText = '0'
            alert('need coin')
        }

// console.log(historyesSection, '==============')

    }
    }


// for (let h of historyes){

                // const p = document.createElement("p")
                // const p2 = document.createElement("p")
                // const p3 = document.createElement("p")
                // const createDiv = document.createElement("div")
                // createDiv.classList.add("historyes")
                // const createInDiv = document.createElement("div")
                // let createNewDiv = createDiv.appendChild(createInDiv) 

                // let para = createNewDiv.appendChild(p) 
                // para.innerText = h.title
                // let para2 = createNewDiv.appendChild(p2) 
                // para2.innerText = h.number
                // let para3 = createDiv.appendChild(p3) 
                // para3.innerText = h.date


                // const newCart = document.createElement('div')
                
                // newCart.innerHTML =`<div id="historyes" class="flex justify-between items-center p-5 bg-[#FAFAFA] rounded-xl mb-4">
                //     <div>
                //         <p class="text-[18px]">${h.title} </p>
                //         <p class="text-[18px] text-[#5C5C5C]">${h.number}</p>
                //     </div>
                //     <p class="text-[18px]">${h.date}</p>
                // </div>`

                // historyesSection.appendChild(newCart)
            // }

 } 



// function getHistory(){

    // for (let i of historyes){
        // for(let i = 0; i< historyes.length; i++){
            // historyesSection.removeChild(historyesSection.firstChild)
                // if(historyesSection.children.length >1){
                //     console.log(historyesSection.removeChild(historyesSection.firstChild))
                // } else {
                //     // break
                // }
                // const p = document.createElement("p")
                // const p2 = document.createElement("p")
                // const p3 = document.createElement("p")
                // const createDiv = document.createElement("div")
                // createDiv.classList.add("historyes")
                // const createInDiv = document.createElement("div")
                // let createNewDiv = createDiv.appendChild(createInDiv) 

                // let para = createNewDiv.appendChild(p) 
                // para.innerText = i.title
                // let para2 = createNewDiv.appendChild(p2) 
                // para2.innerText = i.number
                // let para3 = createDiv.appendChild(p3) 
                // para3.innerText = i.date

                                                        
                // historyesSection.appendChild(createDiv)



// console.log(i)

//             }
// }

// console.log(historyes)





