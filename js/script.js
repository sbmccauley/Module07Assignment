// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let numberOfRecords = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellDelete = row.insertCell('X')
    let cellDepartment = row.insertCell('department');
    let cellEmail = row.insertCell('email');
    let cellExtension = row.insertCell('extension');
    let cellName = row.insertCell('name');
    let cellID = row.insertCell('id');
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id))
    cellName.appendChild(document.createTextNode(name))
    cellExtension.appendChild(document.createTextNode(extension))
    cellEmail.appendChild(document.createTextNode(email))
    cellDepartment.appendChild(document.createTextNode(department))
 
 
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    //ADD NECESSARY BOOTSTRAP CLASSES FOR BUTTONS
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //CREATE TEXT NODE.SET IT TO 'X' , AND APPEND TO DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'))
   
   
    //APPEND DELETE BUTTON TO CELL
    cellDelete.appendChild(deleteBtn)
 
    // RESET THE FORM
    form.reset()
    // document.querySelector('#id').value = ''
    // document.querySelector('#name').value = ''
    // document.querySelector('#extension').value = ''
    // document.querySelector('#email').value = ''
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    function employeeCount() {
        let numberOfRecords = (table.tBodies[0].rows.length)-1
     
        console.log(`The total number or records is: ${numberOfRecords}.`)
        document.querySelector('#empCount').value =  `(${numberOfRecords})`
      
    }
    
    
        employeeCount() 
   
}) 


// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    e.preventDefault()   
    table.deleteRow(e.target.parentElement.parentElement.rowIndex)
    alert(`${e.target.parentElement.parentElement.innerText} has been successfully deleted.`)
    let numberOfRecords = (table.tBodies[0].rows.length)-1
    document.querySelector('#empCount').value =  `(${numberOfRecords})`
   }
       
 ) 