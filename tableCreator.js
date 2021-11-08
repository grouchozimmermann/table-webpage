//File for the tablecreator class once it is done

var  special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
class tableCreator {
    constructor(id){
        this.div = document.createElement("div");

        
        //The table
        this.table = document.createElement("table");
        this.table.setAttribute("id", id);
        this.id = id;
        this.nameList = [];
        let newrow = this.table.insertRow();
        newrow.insertCell(0).appendChild(document.createTextNode("First name"));
        newrow.insertCell(1).appendChild(document.createTextNode("Last name"));
        this.div.appendChild(this.table);
        //document.body.appendChild(this.table);
        //The text input field
        this.input = document.createElement("input");
        this.input.setAttribute("type","text");
        this.input.setAttribute("placeholder","First lastname");
        this.input.setAttribute("id",this.id);
        this.input.onkeyup = event => {
            event.preventDefault();
            if (event.keyCode == 13) {
                this.addBeta(this.input.value)
                
        }
        }
        //The button
        this.button = document.createElement("input");
        this.button.setAttribute("type", "button");
        this.button.setAttribute("id", this.id);
        this.button.setAttribute("value", "Add")
        
        document.body.appendChild(this.input);
        document.body.appendChild(this.button);
        this.button.onclick = event => {
            this.addBeta(this.input.value);
        } //https://stackoverflow.com/questions/57963863/javascript-how-do-i-use-onclick-event-on-a-class-method-to-call-another-class-me
        
        this.div.appendChild(this.input);
        this.div.appendChild(this.button);
        document.body.appendChild(this.div)
        
    }
    print() {
        console.log("kom igen");
    }

    addBeta(fullname) {
        if(special_characters.test(fullname)) {   
                    alert("Special characters not allowed")
                }
            else {
                if(/ /.test(fullname)) {
                var splitNames = fullname.split(' ');
                let newrow = this.table.insertRow();
                newrow.insertCell(0).appendChild(document.createTextNode(splitNames[0]));
                newrow.insertCell(1).appendChild(document.createTextNode(splitNames[1]));
                this.nameList.push(fullname)
            }
                if(!/ /.test(fullname)) {
                    alert("Must contain spaces between first and lastname")
                }
            }
        
    }


    addPerson(fullName) {

        var splitNames = fullName.split(' ');
        let newrow = this.table.insertRow();
        newrow.insertCell(0).appendChild(document.createTextNode(splitNames[0]));
        newrow.insertCell(1).appendChild(document.createTextNode(splitNames[1]));
    }
}



export {tableCreator};
