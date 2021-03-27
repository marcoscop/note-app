const usersController = {};

// funcion que renderiza el formulario de registro
usersController.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};
// funcion que realiza el registro en la base dedatos
usersController.signup = (req, res) => {
    console.log(req.body);
    const {name, email, password, confirm_password} = req.body;
    
    res.send('sigup');
};
// funcion que realiza el renderizado del login
usersController.renderSigninForm = (req, res) => {
    res.render('users/signin');
};
// funcion que realiza el sigin del usuario
usersController.signin = (req, res) => {
    res.send('signin');
};
usersController.logout = (req, res) => {
    res.send('logout');
};

module.exports = usersController;