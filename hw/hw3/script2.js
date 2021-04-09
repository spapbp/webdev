var image_array = [];

function game(){
    let amount;
    let diff;
    
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

    match();
}

function display(number){
    let row_count;
    let col_count;
    let table_row;
    let table_cell;
    let count = 0;
    let table = document.querySelector("table");
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
    //fill table with images from fill_array    
    for(let i = 0; i < row_count; i++){
        table_row = table.insertRow();

        for(let j = 0; j < col_count; j++){
            if(count >= number){
                break;
            }
            table_cell = table_row.insertCell();
            let img = document.createElement("IMG");
            img.setAttribute("src", image_array[count].src);
            img.setAttribute("class", "card");
            table_cell.appendChild(img);
            count++;
        }
    }
    //add listeners
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () =>{
            card.classList.add("flip")}));
    
}

//fill array with images from images folder
function fill_array(number){
    let image;
    for(let i = 0; i < number/2; i++){
        image = new Image();
        image.src = "images/image (" + i + ").jpg";
        image_array.push(image);
        image_array.push(image);
    }
    image_array = image_array.sort(() => Math.random() - 0.5);
}

function match(){

}