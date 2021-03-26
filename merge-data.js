function mergeData(users, attendance) {
    for ( let i = 0; i < users.length; i++){
        for (let j = 0; j < attendance.length; j++){
            if (users[i].email === attendance[j].email){
                users[i].attendance = attendance[j].attendance;
            }
        }
    }
    return users;
}
