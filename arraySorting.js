let arr = [1, 8, 2, 9, 56, 5, 78];
//外层循环，控制趟数，每一次找到一个最大值
for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环,控制比较的次数，并且判断两个数的大小  
    for (let j = 0; j < arr.length - 1 - i; j++) {
        // 如果前面的数大，放到后面(当然是从小到大的冒泡排序)
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr)