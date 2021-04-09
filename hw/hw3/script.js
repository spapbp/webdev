function getHours(){
    let hours = 0;
    let table = document.querySelector("table");
    let row;
    let text;
    let pay;
    let counter = 1;
    
    while(true){
        hours = prompt("How many hours did you work?");

        if(hours == -1 && counter == 1){
            hours = prompt("No hours have been entered yet.");
        }
        else if(hours == -1){
            break;
        }

        if(hours > 40){
            let overtime = hours - 40;
            let overtime_pay = overtime * 15 * 1.5
            pay  = (40 * 15) + overtime_pay; 
        }
        else{
            pay = hours * 15;
        }

        row = table.insertRow();

        let cell_one = row.insertCell();
        text = document.createTextNode(counter);
        cell_one.appendChild(text); 
        counter  += 1;

        let cell_two = row.insertCell();
        text = document.createTextNode(hours);
        cell_two.appendChild(text);

        let cell_three = row.insertCell();
        text = document.createTextNode(pay);
        cell_three.appendChild(text);
    }
    return;
}