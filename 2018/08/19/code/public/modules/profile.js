
let authenticated = true;

(async function(){

  if ( authenticated ){

    const {info} = await import('../data/user.js');
    console.log( info );
  } else {

    const {login} = await import('./login.js');
    login();
  }
})();