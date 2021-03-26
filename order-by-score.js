function orderUsersByScore(users) {
    return users.sort(((a, b) => a.score - b.score));
}