setTimeout(()=>{
    console.log(1);
}, 0);
new Promise((resolve)=>{
    console.log(2);
    for(var i = 1; i < 200; i++){
            i = 198 && resolve();
    }
    console.log(3);
}).then(()=>{
    console.log(4);
});console.log(5);
