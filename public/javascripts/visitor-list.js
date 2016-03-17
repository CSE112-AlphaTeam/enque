function highlight(){
    var table = document.getElementById('appointment-list');
    for (var i=0;i < table.rows.length;i++){
        table.rows[i].onclick= function () {
            if(!this.hilite){
                unhighlight();
                this.style.backgroundColor='#f5f5f5';
                this.hilite = true;
            }
            else{
                this.style.backgroundColor="white";
                this.hilite = false;
            }
        }
    }
}

function unhighlight(){
 var table = document.getElementById('appointment-list');
 for (var i=0;i < table.rows.length;i++){
   var row = table.rows[i];
   row.style.backgroundColor="white";
   row.hilite = false;
 }
}

function checkOut(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="red";
        }
    }
}
function checkIn(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="green";
        }
    }
}
function reschedule(){
    var table = document.getElementById('appointment-list');
    for(var i=0; i<table.rows.length;i++){
        var row = table.rows[i];
        if(row.hilite){
            row.style.backgroundColor="yellow";
        }
    }
}
