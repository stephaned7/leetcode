function binarySearchAlg(arr, a){
    let l = 0;
    let r = arr.length - 1;

    while(l <= r){
        let m = Math.floor((l + r) / 2);

        if(a > arr[m]){
            l = m + 1;
        } else if(a < arr[m]){
            r = m - 1;
        } else {
            return m;
        }
    }
    return false;
}