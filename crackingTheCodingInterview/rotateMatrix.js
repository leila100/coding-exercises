/*
Given an image represented by an NxN matrix, where each pixel in the image
is represented by an integer, write a method to rotate by 90 degrees.
Can you do this in place?
*/

rotate = (matrix) => {
    // rotate in layers
    if (matrix.length === 0 || matrix[0].length !== matrix.length) return false;
    const n = matrix.length
    for (let row = 0; row < Math.floor(n / 2); row++) {
        console.log(`row: ${row}`)
        const first = row;
        const last = n - 1 - row;
        for (let i = first; i < last; i++) {
            console.log(`i: ${i}`)
            const offset = i - first;
            console.log(`offset: ${offset}`)
            const top = matrix[first][i] // save top
            // left -> top
            console.log(`swapping ${matrix[first][i]} with ${matrix[last - offset][first]}`)
            matrix[first][i] = matrix[last - offset][first]
            // bottom -> left
            console.log(`swapping ${matrix[last - offset][first]} with ${matrix[last][last - offset]}`)
            matrix[last - offset][first] = matrix[last][last - offset]
            // right -> bottom
            console.log(`swapping ${matrix[last - offset][first]} with ${matrix[i][last]}`)
            matrix[last][last - offset] = matrix[i][last]
            // top -> right
            console.log(`swapping ${matrix[i][last]} with ${top}`)
            matrix[i][last] = top; // right <- saved top
        }
    }
    console.log(matrix)
    return true;
}
// const matrix = [[1,2,3], [4,5,6],[7,8,9]]
const matrix = [[1,2,3,4], [5,6,7,8],[9,10,11,12], [13,14,15,16]]
rotate(matrix)