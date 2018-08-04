/**
 * Router module
 * @param app:object, express app   
 */
module.exports = (app) =>{

  app.get('/',(req, res)=>{
    res.send("<h1>This is minicube k8 cluster version of simple node app!</h1>");
  });

  app.get('/login',(req, res)=>{
    res.send("So you want to login here?");
  });

  app.get('/logout',(req, res)=>{
    res.send("Now you are logged out");
  });

  app.get('/home',(req, res)=>{
    res.send("<h1>Welkom home my son!</h1>");
  });

}