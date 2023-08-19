//За допомогою async await
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
};

fetchData();

//За допомогою Promise Chaining

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log("id:", data.id);
        console.log("name:", data.name);
        console.log("username:", data.username);
        console.log("email:", data.email);
        console.log("phone:", data.phone);
        console.log("website:", data.website);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

//Зробити запит на публічну API JSONPlaceholder

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        data.forEach(({ id, name, email }) => console.log(`id: ${id}, name: ${name}, email: ${email}`));
    } catch (error) {
        console.log('Error:', error);
    }
};

getUsers();