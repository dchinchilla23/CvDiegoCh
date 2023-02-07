import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Experiencias</span></h1>
 

            <div className="ten columns flex-container">
                  <ul className="slides">
                 <font color ="White"> <p><em>Comprometido, responsable, honesto y trabajador </em></p>
                  <p>- Luis pulido</p>
                  
                  <p><em>Recursivo, innovador , de caracter fuerte pero sicncer y muy competitivo. </em></p>
                  <p>-Jorge gomez</p> </font>

                      {/* {testimonials} */}
                  </ul>
               </div>
            </div>

            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
