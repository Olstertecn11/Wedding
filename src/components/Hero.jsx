import '../assets/hero.css';
import Clock from './Clock';



const Hero = () => {
  return (
    <div className="d-relative">
      <div className="hero d-relative">
        <img className="hero-img" src="https://scontent.fgua9-1.fna.fbcdn.net/v/t39.30808-6/448604351_10211789985142675_5523218795349631710_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-sdUNfpsv40Q7kNvgH8Q-EG&_nc_ht=scontent.fgua9-1.fna&oh=00_AYCMViUTGV6xqSvQfgfwu3n54tvUh2NEC5ITFxaPM2pR1g&oe=66F91FFA" alt="" />
        <img className="hero-divisor" src="https://fixdate.io/modelo-invitacion/105/img/curva_portada_horizontal.png" alt="" />
      </div>
      <div className='d-flex-column flex-center'>
        <span className="date">14.11.2024</span>
      </div>
      <div className="names-box">
        <h1>
          CARLOS
        </h1>
        <h1>
          ASLYN
        </h1>
      </div>
      <div className="hero-p d-flex-column flex-center">
        <img src="https://fixdate.io/modelo-invitacion/105/img/comilla-apertura.svg" alt="" />
        <p>Todos somos mortales, </p>
        <p>hasta el primer beso y la segunda</p>
        <p>copa de vino</p>
        <img src="https://fixdate.io/modelo-invitacion/105/img/comilla-cierre.svg" alt="" />
      </div>
      <div className="d-flex-column flex-center mt-2">
        <img src="https://fixdate.io/modelo-invitacion/105/img/contador.webp" className='counter' alt="" />
        <h2 className="clock-title">Falta</h2>
        <Clock />
        <br />
      </div>
      <div className="d-flex-column flex-center anillos-container">
        <div className="anillos">
        </div>
      </div>
      <div className="d-flex-column flex-center">
        <div className="ceremony">
          Ceremonia
        </div>
      </div>
      <br />
      <div className="d-flex-column flex-center event-information">
        <h2>Día</h2>
        <h3>Sábado 15 de Mayo - 17hrs</h3>
        <button className='btn-information'>Agendar</button>
        <br />
        <h2>Lugar</h2>
        <h3>Apartamentos San Niolás</h3>
        <button className='btn-information'>Confimar Asistencia</button>
        <br />
        <h2>Dirección</h2>
        <h3>Sábado 15 de Mayo - 17hrs</h3>
        <button className='btn-information'>¿Cómo llegar?</button>
      </div>
      <div className="d-flex-column flex-center anillos-container mt-2">
        <div className="anillos">
        </div>
      </div>
      <div className="d-flex-column flex-center">
        <div className="ceremony">
          Fiesta
        </div>
      </div>
      <div className="d-flex-column flex-center event-information">
        <h2>Día</h2>
        <h3>Sábado 15 de Mayo - 17hrs</h3>
        <button className='btn-information'>Agendar</button>
        <br />
        <h2>Lugar</h2>
        <h3>Apartamentos San Niolás</h3>
        <button className='btn-information'>Confimar Asistencia</button>
        <br />
        <h2>Dirección</h2>
        <h3>Sábado 15 de Mayo - 17hrs</h3>
        <button className='btn-information'>¿Cómo llegar?</button>
      </div>

      <div className="d-flex-column flex-center mt-2">
        <img src="https://fixdate.io/modelo-invitacion/105/img/curva01.svg" className='' alt="" />
      </div>

      <h3 className='slider-title'>Retratos de nuestro amor</h3>
      <p className='slider-p'>Un minuto, un segundo, un instante que queda en la eternidad</p>
      <br />
    </div>
  );
};

export default Hero;
