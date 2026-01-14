function Manager(Employee){
    console.log("What did you do yesterday")
    Employee();

    function client(){
        console.log("Your 70% work has been done")
    }
    return client()
}

function Employee(){
    console.log("Excel sheet maintained")
     console.log("Worked on project")

}

Manager(Employee)