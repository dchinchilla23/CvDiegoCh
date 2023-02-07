import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
       var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
                <img className="profile-pic" src={profilepic} alt="Diego chinchilla" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre mi</h2>

            <p>Futuro ingeniero de sistemas 10 semestre</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contacto</h2>
                  <p className="address">
						   <span>Diego Chinchilla</span><br />
						   <span>Bogota-Colombia<br /> 
                     <span>+573133153488</span><br />
                     <span>digeo.chinchilla23@gmail.com</span>
                     <ul className="social">
                     <a href="https://github.com/dchinchilla23e">
                        <i className="fa fa-github"></i>
                     </a>
                     &ensp;
                     <a href="https://www.linkedin.com/in/diego-f-chinchilla-a6715a86/">
                        <i className="fa fa-linkedin"></i>
                     </a><a href="diego.chinchilla23@gmail.com">
                        <i className="fa fa-google"></i>
                     </a>
                     &ensp;
                     <a class="fa fa-whatsapp" href="https://wa.me/+573133153488/?text=tu%20texto%20personalizado"   target="_blank">whatsapp </a>
  
                     <i class="fa fa-whatsapp" ></i>


                  </ul>
                   </span><br />
						   
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i></a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
