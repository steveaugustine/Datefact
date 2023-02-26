const date = new Date();
let day=date.getDate()
let month=date.getMonth()+1
let value=month+"/"+day;
console.log("http://numbersapi.com/"+value+"/date");
$.get('http://numbersapi.com/'+value+'/date', function(data) {
    console.log(data);
    let q=data;
    let words=q.split(" ");
    let str=""
    for(var i=1;i<words.length;i++){
        if(words[i][0]==words[i][0].toUpperCase()){
            str=str+" "+words[i];

        }
    }
    console.log(words);
    console.log("this is the str"+str);
    $(".fact").click(function(){
        $(".fact").text(data);
        $(".fact").addClass("word")

    });
    
});


