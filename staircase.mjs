/* 
Soal

Ketika diberikan input suatu angka n, print sbb:

misal, input 6. maka output:
"     #"  i => 1
"    ##"    2
"   ###"    3
"  ####"    4
" #####"    5
"######"    6

*/

// solusi
// for-loop, lalu print di setiap iterasinya.

// contoh iterasi pertama:
// jumlahSpasi = input - iterasi = 5
// jumlahPager = iterasi = 1
// gimana biar bisa jadi gini? "     #"

// untuk membuat kontennya bisa bikin for-loop lagi:
// iterasi (j) sejumlah input:
// let result = ""
// setiap iterasi for-loop, lakukan concat ke string tersebut (result + "sesuatu")

// perjalanan kodenya gini:
// i = 1
// j = 1....6
// i = 2
// j = 1....6






function solution(input) {
    for (let i = 1; i <= input; i++) {
        console.log(i + ":" + createContent(i, input))
    }
}

function createContent(i, input) {
    let res = ""
    for (let j = 1; j <= input - i; j++) {
        res = res + " "
    }
    return res.padEnd(input, "#")
}

solution(6)
solution(3)
solution(7)
