//File for the tablecreator class once it is done

var  special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
class tableCreator {
    constructor(id){

        //Creating a div that will contain the table and two input fields (button and textfield)
        this.div = document.createElement("div");

        
        //The table
        this.table = document.createElement("table");
        this.table.setAttribute("id", id); //Potentially redundant, necessary incase I would like to access the full list of names
        this.id = id;
        this.nameList = [];
        let newrow = this.table.insertRow();
        newrow.insertCell(0).appendChild(document.createTextNode("First name"));
        newrow.insertCell(1).appendChild(document.createTextNode("Last name"));
        
        //The text input field
        this.input = document.createElement("input");
        this.input.setAttribute("type","text");
        this.input.setAttribute("placeholder","First lastname");
        this.input.setAttribute("id",this.id);
        
        //The button
        this.button = document.createElement("input");
        this.button.setAttribute("type", "button");
        this.button.setAttribute("id", this.id);
        this.button.setAttribute("value", "Add")
        
        //Eventlisteners
        this.input.onkeyup = event => {
            event.preventDefault();
            if (event.keyCode == 13) {
                this.addPerson(this.input.value);    
            }
        }

        this.button.onclick = event => {
            this.addPerson(this.input.value);
        }

        //Appending all the table and input elements to the div, then appending the div to the document body.
        this.div.appendChild(this.table);
        this.div.appendChild(this.input);
        this.div.appendChild(this.button);
        document.body.appendChild(this.div)
        
    }

    addPerson(fullname) {
        if(special_characters.test(fullname)) {   
                    alert("Special characters not allowed")
                }
            else {
                if(/ /.test(fullname)) {
                var splitNames = fullname.split(' ');
                let newrow = this.table.insertRow();
                newrow.insertCell(0).appendChild(document.createTextNode(splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1)));
                newrow.insertCell(1).appendChild(document.createTextNode(splitNames[1].charAt(0).toUpperCase() + splitNames[1].slice(1)));
                this.nameList.push(fullname)
            }
                if(!/ /.test(fullname)) {
                    alert("Must contain spaces between first and lastname")
                }
            }
        
    }
//string.charAt(0).toUpperCase()

}

export {tableCreator};
