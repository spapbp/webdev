function game(){
    let amount;
    let diff;
   // let table = document.querySelector("table");
    
    amount = prompt("How many imgages 8, 10, 12?");
    diff = prompt("How long to memorize 3, 5, 8?");

    if(amount == 8){
        display(8);
    }
    else if(amount == 10){
        display(10);
    }
    else if(amount == 12){
        display(12);
    }
}

function display(number){
    let row_count;
    let col_count;
    let table_row;
    let table_cell;
    let count = 0;
    var image_array = [];

    fill_array(number);
    if(number == 8){
        row_count = 2;
        col_count = 4;
    }
    else if(number == 10){
        row_count = 3;
        col_count = 4;
    }
    else if(number == 12){
        row_count = 3;
        col_count = 4;
    }

    let table = document.querySelector("table");
    
    for(let i = 0; i < row_count; i++){
        table_row = table.insertRow();

        for(let j = 0; j < col_count; j++){
            if(count >= number){
                break;
            }
            table_cell = table_row.insertCell();
            text = document.createTextNode("TEST");
            table_cell.appendChild(text);
            count++;
        }
    }
}

function fill_array(number){
    let imgage_address;
    for(let i = 0; i < number; i++)
}