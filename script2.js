showNotes()
let num = document.getElementById('timer')
let click = true
let count 
let btn = document.getElementById('btn')
btn.addEventListener('click', fun1 )

let addnotes = document.getElementById('btn')
addnotes.addEventListener('click', function name(params) {
    
let addTxt = document.getElementById('addtxt')
let addTitle = document.getElementById('addTitle')
let notes = localStorage.getItem('notes')

if (notes == null ) {
     notesObj = []
}
else{
    notesObj = JSON.parse(notes)
}

let myObj = {
    Title: addTitle.value,
    Text: addTxt.value
}
notesObj.push(myObj)
localStorage.setItem('notes',JSON.stringify(notesObj))
addTxt.value = ""
addTitle.value=""
showNotes()

})
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
         notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
       <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="itle"> ${element.Title}</h5>
                        <p class="card-text"> ${element.Text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary ">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesEl = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesEl.innerHTML = html
        
    }
    else{
        notesEl.innerHTML = "nothing to show"
    }
}


function fun1(params) {
    if (click === true) {
        let inter = setTimeout(() => {
            count ++
            num.innerHTML = count
            console.log('timer sarted' , count)
        }, 200);
    
    }else{
        console.log('print nothing');
    }
      
   }
function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
         notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()

    let inter = setTimeout(() => {
        count --
        num.innerHTML = count
        console.log('timer sarted' , count)
    }, 200);
}



