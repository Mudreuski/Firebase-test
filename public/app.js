const dataTable = document.getElementById('dataTable');
const addUser = document.getElementById('addUser');


addUser.addEventListener('click', (event) => {
    event.preventDefault();
    const app = firebase.app();
    const db = firebase.firestore();
    const users = db.collection('users').doc('users-database');

    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;

    users.update({[login]:{password:password}});
    users.get()
        .then(doc =>{
            const data = doc.data();
            const dataArray = Object.entries(data)
                .reduce((rows, element) => {
                    let template = `<tr><td>${element[0]}</td><td>${element[1].password}</td></tr>`;
                    return rows += template;
                }, "");

            dataTable.innerHTML = dataArray;           
        });
  });
