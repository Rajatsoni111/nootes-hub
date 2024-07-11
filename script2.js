showNotes()
let num = document.getElementById('timer')
let click = true
// initital count value
let count = 0
let btn = document.getElementById('btn')
btn.addEventListener('click', fun1)

let addnotes = document.getElementById('btn')

// for handling the click on the "Add Note" buttons
addnotes.addEventListener('click', function name(params) {

    let addTxt = document.getElementById('addtxt')
    let addTitle = document.getElementById('addTitle')
    let notes = localStorage.getItem('notes')
    // getting the value of count from the local storage
    let localCount = localStorage.getItem('count')

    if (notes == null) {
        notesObj = []
        // setting the count to 0
        count = 0;
    }
    else {
        notesObj = JSON.parse(notes)
        // setting the value of count to the actual value gotten from the local storage
        count = localCount;
    }

    let myObj = {
        Title: addTitle.value,
        Text: addTxt.value
    }
    notesObj.push(myObj)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    // setting the value of count into the localStorage
    localStorage.setItem('count', count);
    addTxt.value = ""
    addTitle.value = ""
    showNotes()
})

// function for showing the notes on the display
function showNotes() {
    let notes = localStorage.getItem('notes')
    // getting the value of count from the local storage
    let count = localStorage.getItem('count')
    if (notes == null) {
        notesObj = []
        // setting the value of count to 0
        c = 0;
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
       <div class="noteCard my-2 mx-2 " ">
                    <div class="card-body">
                        <h4 class="card-title" id="itle"> ${element.Title}</h4>
                        <hr>
                        <p class="card-text"> ${element.Text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary ">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesEl = document.getElementById('notes')
    let num = document.getElementById('timer')

    if (notesObj.length != 0) {
        notesEl.innerHTML = html
        // setting the value of count to the user interface
        num.innerHTML = count

    }
    else {
        notesEl.innerHTML = "nothing to show"
        // setting the value of count to the user interface
        num.innerHTML = count
    }

}

// function to increase the number of count on the display
function fun1() {
    if (click === true) {
        // increasing the value of count with 1
        setCount(true);
    } else {
        console.log('print nothing');
    }

}

// function to delete the note on the display
function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    let count = localStorage.getItem('count')
    if (notes == null) {
        notesObj = []
        count = 0;
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    // decreasing the value of count with 1
    setCount(false);
    showNotes()
}

function setCount(add) {
    let inter = setTimeout(() => {
        let count = localStorage.getItem('count');
        count = add ? (Number(count) + 1) : (Number(count) - 1);
        localStorage.setItem('count', count)

        num.innerHTML = count
        console.log('timer sarted', count)
    }, 200);
}
let click3 = true
let icon = document.querySelector('i')
function changecolor(params) {
    document.body.classList.toggle("back")

if (icon === click3) {
    icon.style.color='blue'
}
}


