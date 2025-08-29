

const parentCart = document.getElementsByClassName("card-actions")
const coins = document.getElementById('coins')
const historyesSection = document.getElementById("historyes")
const copyNum = document.getElementById("copy-text")
const hartText = document.getElementById("hart-text")
const hartClass = document.getElementsByClassName("fa-heart")
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



    for(let item of parentCart){

    if(e === item.parentNode.children[0].innerText){
        // alert(`Calling ${item.parentNode.children[0].innerText}  ${item.parentNode.children[2].innerText}...`)
        
        let num = parseInt(coins.innerText)
        

        if(num > 0){

            coins.innerText = num - 20

            alert(`Calling ${item.parentNode.children[0].innerText}  ${item.parentNode.children[2].innerText}...`)


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


    }
    }
 } 





