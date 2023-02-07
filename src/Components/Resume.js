import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      },
      )
      var Cursos = this.props.data.Cursos.map(function (Cursos) {
        return <div key={Cursos.company}><h3>{Cursos.company}</h3>
          <p className="info">{Cursos.title}<span>&bull;</span> <em className="date">{Cursos.years}</em></p>
          <p>{Cursos.description}</p>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Educacion</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns" >
             <h1>Universidad Ecci</h1>
             <p>Ingenieria de sistemas <h6>Estado:</h6>
             <p>Actualmente</p> </p>

             <h1>Sena</h1>
             <p>Sistematizar datos masivos de acuerdo con métodos de analítica y herramientas tecnológicas, Análisis de sistemas informáticos. <h6>Estado:</h6>
             <p>Finalizado 2020</p> </p>
             <h1>Sena</h1>
             <p>Tecnologo en analisis y desarrollo de sistemas de información <h6>Estado:</h6>
             <p>Finalizado 2019</p> </p>
             <p>Tecnico en comercio internacional<h6>Estado:</h6>
             <p>Finalizado 2017</p> </p>  
             
             </div>          
            </div>
          </div>

        </div>

        <div className="row Cursos">

          <div className="three columns header-col">
            <h1><span>Cursos</span></h1>
          </div>

          <div className="nine columns main-col">
             <h2>Udemy</h2>
             <p>User Experience Desing fundamental<h6>Estado:</h6>
             <p>Finalizado 2022</p> </p>
             <h2>Udemy</h2>
             <p>Symfony 5 - The compelte guide for beginners 2022 <h6>Estado:</h6>
             <p>Finalizado 2022</p> </p>      
             <h2>Udemy</h2>
             <p>Evoluciona de excel a python  <h6>Estado:</h6>
             <p>Finalizado 2022</p> </p>
             <h2>Platzi</h2>        
             <p>Curso de Análisis de Negocios para Ciencia de Datos  <h6>Estado:</h6>
             <p>Finalizado 2022</p></p>
             <h2>CertiProf</h2>        
             <p>Scrum Foundation Certificate <h6>Estado:</h6>
             <p>Finalizado 2020</p></p>
             <h2>PeopleCert </h2>        
             <p>ITIL® Foundation Certificate in IT Service Management<h6>Estado:</h6>
             <p>Finalizado 2019</p></p>
             <h2>Sena </h2>        
             <p>Manejo de herramientas administrativas<h6>Estado:</h6>
             <p>Finalizado 2013</p></p>                       
          </div>  
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Experiencia</span></h1>
          </div>

          <div className="nine columns main-col">
          <h2>Andikem</h2>        
             <p><em>Full Stack PHP Developer • Mayo 2022 - Enero 2023</em><h6>Funciones:</h6>
             <p>Programación y desarrollo de aplicaciones en PHP, administración y desarrollo de OROINC, programación de plataforma blackpearl en NODE.JS, administración de AWS , creación de RDS en AWS , GitHub . javascript y React.js conocimiento MVC , Java , Spring Framework , Spring Boot Control y monitoreo de cambios de versiones, despliegue de herramientas en AWS y creacion de Bases de datos. HTML, CSS, Javascript, AJAX, composer , symfony, linux , npm, react.js , uso de git hub para control de versiones y uso de dependencias de npm y composer , administración backend en php</p></p>  
 

            <h2>Indra misaint colombia</h2>        
             <p><em>Desarrollador backend• Octubre 2021 - Mayo 20223</em><h6>Funciones:</h6>
             <p>Generación de automatizaciones para procesos de deservidores Linux y Windows, desarrollo en Php, laravel y Ansible, Python, actualización y creación de dashboard para el control de ejecución de automatizaciones presentadas, creación de bases de datos y administración en navicat, mysql, dbbeader, Oracle, Sql. Poweshell conforme a requerimientos de cliente para la optimización de procesos</p></p>  
             {/* {work} */}
             <h2>Banco Davivienda </h2>        
             <p><em>Analista III op red y captación y aceptación Daviplata • Junio 2020 - Octubre 2021</em><h6>Funciones:</h6>
             <p>Gestión y administración bases de datos y proceso Etl con python, R-studio sql, automatización de procesos y gestión de indicadores con uso de herramientas de BI como Datastudio powerbi Grafana, uso de Hadoop y herramientas de bigdata.</p></p>  


          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            

            <p> </p>

            <div className="bars">
              <ul className="skills">
                <em></em>Git,php,React.js,css,html,Aws,sql, posgresql, my sql, Data studio , PowerBi, Offimatica
                {/* {skills} */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
