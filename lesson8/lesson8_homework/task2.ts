interface User {
    name: string;
    age: number;
    gender: string;
    [key: string]: string | number;
}

const user: User = {
    name: 'John',
    age: 25,
    gender: 'male',
    hobby: 'reading',
    favoriteMovie: 'Inception'
};
console.log(user)