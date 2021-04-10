var image_array = [];
var click_array = [];
var matches_count = 0;

function start(){
    game();
}
function game(){
    let amount;
    let diff;
    let time;
    
    amount = prompt("How many imgages 8, 10, 12?");
    diff = prompt("How long to memorize 3, 5, 8?");
    if(amount == 8){
        time = 120000
        display(8);
    }
    else if(amount == 10){
        time = 150000
        display(10);
    }
    else if(amount == 12){
        time = 180000;
        display(12);
    }
}

function display(number){
    let row_count;
    let col_count;
    let table_row;
    let table_cell;
    let count = 0;
    let table = document.querySelector("table");
    match = 0;
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

            let back = document.createElement("DIV");
            back.setAttribute("class", "flip");
            table_cell.appendChild(back);
            table_cell.appendChild(img);
            count++;
        }
    }
    //add listeners
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => {card.classList.add("flip")}));
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => {match_check(card, number)}));
    
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

//check if selected cards match
function match_check(card, number){

    click_array.push(card.src);

    if(click_array.length == 2){
        if(click_array[0] == click_array[1]){
            matches_count += 1;
            click_array = [];
            document.querySelectorAll(".flip").forEach(card => card.classList.add("matched"));
        }
        else{
            click_array = [];
            //setTimeout(function(){document.querySelectorAll(".flip").forEach(card => card.classList.remove("flip"))}, 500);
        }

       // setTimeout(function(){document.querySelectorAll(".flip").forEach(card => card.classList.remove("flip"))}, 1000);

    }



    console.log(click_array.toString());
    console.log(matches_count);


    if(matches_count == number/2){
        alert("Done");
    }
}