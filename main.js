var arr = []
for (i = 0; i<=999; i++){
    arr[i]=true
}

for (i = 2; i <= 999; i++){
        for(ii = 2; i * ii <= 999; ii++){
            arr[i*ii] = false
        }
    if(arr[i]==true){
        console.log(i)
    }
}