interface user {
    name?: string,
    surname: string,
}

const obj: user = {
    name: 'John',
    surname: 'Smith',
}

delete obj.name
obj.name = 'Pete'

type numArr = number[]
const arr: numArr = [1, 2, 3, -1, -2, -3]

function moreZero(arr: number[]): boolean {
    return arr.every(a => a > 0)
}

console.log(moreZero(arr));