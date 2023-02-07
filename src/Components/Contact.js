import React, { Component } from 'react';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         // var street = this.props.data.address.stree
         var city = this.props.data.address.city;
         // var state = this.props.data.address.state;
         // var zip = this.props.data.address.zip;
         // var phone= this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">



               </div>



            </div>

            <div className="row">
               <div className="columns contact-details">

                  <p className="address">
                     <span>Diego Chinchilla</span><br />
                     <span>Bogota-Colombia<br />
                        <span>+573133153488</span><br />
                        <span>digeo.chinchilla23@gmail.com</span>
                        <ul className="social">
                           <a href="https://github.com/dchinchilla23">
                              <i className="fa fa-github"></i>
                           </a>
                           &ensp;
                           <a href="https://www.linkedin.com/in/diego-f-chinchilla-a6715a86/">
                              <i className="fa fa-linkedin"></i>
                           </a><a href="diego.chinchilla23@gmail.com">
                              <i className="fa fa-google"></i>
                           </a>
                           &ensp;
                           <a class="fa fa-whatsapp" href="https://wa.me/+573133153488/?text=tu%20texto%20personalizado" target="_blank">whatsapp </a>

                           <i class="fa fa-whatsapp" ></i>


                        </ul>
                     </span><br />

                  </p>
               </div>
            </div>
         </section>
      );
   }
}

export default Contact;
