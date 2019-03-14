import test from 'ava';
var axios = require('axios');

test('form on index', async t => {
  const response = await axios.get("http://localhost:3000");
    try {
      if(response.data.toString().includes('form')){
        t.pass();
      }else{
        t.fail("Pas de formulaire dans la page d'index du site!");
      }
    } catch (e) {
      t.fail("Une erreur s'est produite");
    }
});
