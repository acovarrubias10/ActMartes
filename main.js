let vector1 = new Array(20)
let vector2 = new Array(20)
for(let i = 0; i<20; i++){
    let random1 = Math.floor(Math.random() * (30 - 1)) + 1
    let random2 = Math.floor(Math.random() * (30 - 1)) + 1
    vector1[i] = random1
    vector2[i] = random2
}
vector1.sort((a, b) => a-b)
vector2.sort((a, b) => a-b)
console.log(vector1, vector2)
const getOrderedArray = (primero = [], segundo = []) => {
    let vector = []
    primero.forEach((e) => {
        if(e <= segundo.primero()){
            vector.push(e)
        } else{
            let i
            for(i=0; i<segundo.length; i++){
                if(segundo[i]<=e){
                    vector.push(segundo[i])
                } else{
                    break
                }
            }
            segundo.splice(0, i)
            vector.push(e)
        }
    })
    return vector
}

let vector3 = getOrderedArray(vector1, [...vector2]) 
console.log(vector3)