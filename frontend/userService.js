'use strict';
console.log('service');


async function saveForm(user) {
    let res = await axios.post('http://localhost:3000/user/signup', user);
    console.log(res.data)
    return res.data
}