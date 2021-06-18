var x = prompt("Enter minimum value: ");
var y = prompt("Enter maximum value: ");
var z = prompt("Enter threshold value: ");
var mail = prompt("Enter your Email: ")

function sendmail(params) {
    var tempParams = {
        to_mail: mail,
        threshold: z
    };
    emailjs.send('service_hrf2dd6', 'template_y2ain9h', tempParams)
    .then(function(res) {
        console.log("success", res.status);
    })
}

function getData(max = 100) {
    num = Math.floor(Math.random() * max)
    
    if(num < x) {
        alert("Minimum reached: " + num);
    } else if(num > y){
        alert("Maximum reached: " + num);
    }
    if(num > z) {
        sendmail()
    }

    return num
}  

Plotly.newPlot('chart',[{
    y:[getData()],
    type:'line'
}]);
var cnt = 0;

setInterval(function(){

    Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
    cnt++;
    if(cnt > 500) {
        Plotly.relayout('chart',{
            xaxis: {
                range: [cnt-300,cnt]
            }
        });
    }
},1000);