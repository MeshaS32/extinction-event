let dinoList1 = document.querySelectorAll("#dino-ordered li")

function strikeOl(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener("click", function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = "line-through";
        })
    }
}
strikeOl();

//unordered-dino - parent div

let dinoList2 = document.querySelector("#unordered-dinos")

    dinoList2.addEventListener("click", function(event){
    let listItem = event.target;
    console.log(listItem.innerText)
    listItem.style.opacity = "0"
})



let row = document.querySelector("#row")

row.addEventListener("click", function(event){
    let rowItem = event.target;
    rowItem.style.width = "0px"
})

// let massButton = document.querySelector("#destroy-all")

function destroyAll(arr1, arr2, arr3){

}

// massButton.addEventListener("click", function(){
//     for(let i = 0; i < dinoList1.length; i++){
//         dinoList1[i].addEventListener("click", function(){
//             console.log(dinoList1[i].innerText);
//             dinoList1[i].style.textDecoration = "line-through";
//         })
//     }for(let i = 0; i < )
// })


