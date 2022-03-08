// aqui va el codigo js que maneja el login,
// ya sean addeventlisteners, logica del DOM y logica de uso
// aqui va la estructura de HTML de login
export function loadLogin() {
  const content = document.createElement('section');

  content.innerHTML = `<section class="login">
    <p class="welcome">Bienvenido</p>
    <h1>Mapask</h1>
    <p>Conecta con personas que se apasionan por la programación</p>

    <section class="image-login">
      <img src='https://svgshare.com/i/ept.svg' title='img-login' />
    </section>
    <section class="container-login">
      <h2>Mapask</h2>
      <form class="form-session">
        <input class="input input-email" id="inputEmail" type="text" placeholder="Email: " required>
        <div class="container-email" id="containerEmail"></div>
        <input class="input input-password" id="inputPassword" type="password" placeholder="Contraseña: ">
        <div class="container-password" id="containerPassword"></div>
        <button class="button btn-login" id="btnLogin">Iniciar Sesión</button>
      </form>
      <div class="registration">
        <span>¿Ya estas en Mapask?</span>
        <a class="link-registration" id="linkRegistration">Registrate</a>
      </div>
      <button class="btn-google" id="btnGoogle">
        <span class="iconify" data-icon="akar-icons:google-contained-fill"></span>
        GOOGLE
      </button>
    </section>
    <section class="overlay" id="overlay">
      <div class="popup">
        <a href="#" class="btn-cerrar-popup" id="btnCerrarPopup">X</a>
        <h3>Registrarte en Mapask</h3>
        <p> es rápido y fácil</p>
        <form action="" class="form-registration">
          <input type="text" placeholder="Nombre: ">
          <input type="text" placeholder="Apellido: ">
          <input class="input" id="inputEmailR" type="email" placeholder="Correo: ">
          <input class="input" id="inputPasswordR" type="password" placeholder="Contraseña: ">
          <input class="input" id="inputPassConf" type="password" placeholder="Confirmar contraseña: ">
          <div class="container-email-r" id="containerEmailR"></div>

          <div class="date-of-birth">
            <label for="">Fecha de Nacimiento: </label>
            <input type="date">
          </div>
          <button class="button btn-registration" id="btnRegistration">Registrate</button>
        </form>
      </div>
    </section>
  </section>`;

  return content;
}
