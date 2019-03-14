import test from 'ava';
var axios = require('axios');
var nock = require('nock');

const scope = nock('https://geocode.xyz')
  .get('/paris?json=1')
  .reply(200, {
    Request: {
      latt: '0,00',
      name: 'paris',
      longt: '1,11',
    },
  })

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

test('display city name', async t => {
  const response = await axios.post("https://geocode.xyz/paris?json=1");
  try {
    
  } catch (e) {

  }
});
