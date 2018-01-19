function Add() {

    const item = document.querySelector('#itemName').value;

    if (item == '') {
        alert('Please input the item name.');
    } else {
        fetch(`/api/todo/`, {
            method: 'POST',
            body: JSON.stringify({
                item: item
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            window.location.reload();
        });
    }
}

function Delete(id) {
    fetch(`/api/todo/${id}`, {
        method: 'DELETE',
    }).then(res => {
        window.location.reload();
    });
}

function Checked(id, done) {
    console.log(id, !done);
    fetch(`/api/todo/`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            done: !done
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
    });
}