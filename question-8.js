// Question #8: Fetching User List from Server
const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
}

const handleResponse = (response) => {
    return response.json();
};

const onSuccess = (data) =>{
    let newUsers = [];
    for (let item in data){
        newUsers.push((data[item].name))
    }
    return console.log(newUsers)
}

const onFailure = (error) => {
    console.log(error)
    }

getUser().then(handleResponse).then(onSuccess).catch(onFailure)



