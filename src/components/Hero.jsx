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
      </div>
    </div>
  );
};

export default Hero;
