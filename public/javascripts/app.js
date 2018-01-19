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
        body: JSON.stringify({ id: id, done: !done }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
    });
}