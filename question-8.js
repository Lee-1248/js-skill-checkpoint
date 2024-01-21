// Question #8: Fetching User List from Server
const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
}

const handleResponse = (response) => {
    return response.json();
};

const onSuccess = (data) =>{
    return console.log(data)
}

const onFailure = (error) => {
    console.log(error)
}
    
getUser().then(handleResponse).then(onSuccess).catch(onFailure)