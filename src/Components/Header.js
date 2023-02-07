import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         // var name = this.props.data.name;
         // var occupation= this.props.data.occupation;
         // var description= this.props.data.description;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                  <li><a className="smoothscroll" href="#testimonials">Opiniones</a></li>
                  <li><a className="smoothscroll" href="#contact">Contacto</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline"> Hola! Soy Diego Chinchilla.</h1>
                  <h3> <span>Futuro ingeniero de sistemas 10 semestre cuento amplios conocimientos en BI, Sql, datastudio, powerbi, ofimatica, automatizacion de procesos y programacion en lenguajes como react.js | php | python | R-studio , acontinuacion podras dar click en los iconos para que veas mi perfil en las sigueintes plataformas</span></h3>
                  <hr />
                  <ul className="social">
                     <a href="https://github.com/dchinchilla23e">
                        <i className="fa fa-github"></i>
                     </a>
                     &ensp;
                     <a href="https://www.linkedin.com/in/diego-f-chinchilla-a6715a86/">
                        <i className="fa fa-linkedin"></i>
                     </a>
                     &ensp;
                     <a class="fa fa-whatsapp" href="https://wa.me/+573133153488/?text=tu%20texto%20personalizado"   target="_blank">whatsapp </a>
  
             

                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
