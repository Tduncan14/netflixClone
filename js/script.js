const inputs = document.querySelectorAll('form .field input');


const form = document.querySelector('form')

inputs.forEach((i,index) =>{


    i.addEventListener('blur',
    validateInput)
    i.addEventListener('input',validateInput)
    
})


// inputs.forEach(input =>{
   
// })

function validateInput(event){
    console.log(event.target.id,event.target.value)


    // create array of states

    const state = ['valid','not-valid'];


    console.log(state,'state')

    let classes;

    console.log(event.target.value.length);

    if(event.target.value.length === 0) {

        console.log('this input is empty')

        classes = state[1]
    }
    else{
        console.log('there is something else in the input')

        classes= state[0]
    }


    // generate or remobe the alert

    if(classes === 'not-valid'){

        // incase alert doesnt exist add an alert
        if(event.target.parentElement.nextElementSibling.classList[0] !== 'alert'){

                
        const error = document.createElement('div');

        error.appendChild(document.createTextNode('This field is mandatory'));

        error.classList.add('alert');


        console.log(error)


        event.target.parentElement.parentElement.insertBefore(error, event.target.parentElement.nextElementSibling)
        

        

            
        }
    
       
        
        }
    

    
}