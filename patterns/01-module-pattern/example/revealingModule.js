const UserModule = (function () {
    let username = 'guest' //private

    function login(name) {
        username = name;
        console.log(`Logged in as ${username}.`);
    }
    function logout() {
        username = 'guest';
        console.log(`Logged out`)
    }

    // only expose login and logout
    return {
        login,
        logout
    }

})();