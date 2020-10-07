var arr = []
for (let i = 0; i<=999; i++){
    arr[i]=true
}

for (let i = 2; i <= 999; i++){
    if(arr[i]==true){
        for(let ii = i; i * ii <= 999; ii++){
            arr[i*ii] = false
        }
    }
}

for (let i = 2; i <= 999; i++){
    if(arr[i]==true){
        console.log(i)
    }
}