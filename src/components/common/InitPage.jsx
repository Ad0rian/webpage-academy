import React from "react";
import personImage from '../img/contactPage/menStock.png';
import "./initPage.css";
import { useInView } from 'react-intersection-observer';


const InitPage = () => {
  const {ref:home, inView: myHomeIsvisible } = useInView();
  const {ref:courses, inView: myCourseIsvisible} = useInView();
  const {ref:about, inView: myAboutIsvisible} = useInView();
  const {ref:imageabout, inView: myImageAboutIsvisible} = useInView();

    return (
      
      <div id="BodyContent">

      <div id="bgHomeid" className= {myHomeIsvisible || myCourseIsvisible ? "bgHome appearingBgHome" : 'bgHome'}></div>
      <div id="bgAboutid" className= {myAboutIsvisible || myImageAboutIsvisible ? "bgAbout appearingBgAbout" : 'bgAbout'}></div>

      <section id="home" className="homeBody">
        <div ref={home} className="partHB">
          <h1 > Classroom title </h1>
          <br/><br /><br />
          <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud. Laboris reprehenderit enim et ex exercitation aliqua culpa nostrud. Sint in minim officia culpa Lorem do voluptate minim et excepteur laboris. Amet ullamco sunt aliquip nostrud nostrud anim. Lorem et proident dolore dolor commodo.</p><br /><br />
          <span> canal yutu</span><br /><br /><br />
          <p>Commodo elit nostrud ullamco esse ex dolor qui et ea laboris ea est qui nostrud. Aliqua incididunt duis consequat ea adipisicing do elit ex esse eu. Magna voluptate in eiusmod pariatur proident consequat sunt consectetur.</p>
        </div>
        <div className="partHB">
        <div ></div>
        </div>
      </section>
      {/* Courses general view*/}
      <div className="coursesBody">
        <section id="courses" className="homeBody">
          <div className="partHB">
            <h1 ref={courses}> Classroom title</h1> 
            <br/><br /><br />
            <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud. Laboris reprehenderit enim et ex exercitation aliqua culpa nostrud. Sint in minim officia culpa Lorem do voluptate minim et excepteur laboris. Amet ullamco sunt aliquip nostrud nostrud anim. Lorem et proident dolore dolor commodo.</p><br /><br />
            <span> canal yutu</span><br /><br /><br />
            <p>Commodo elit nostrud ullamco esse ex dolor qui et ea laboris ea est qui nostrud. Aliqua incididunt duis consequat ea adipisicing do elit ex esse eu. Magna voluptate in eiusmod pariatur proident consequat sunt consectetur.</p>
          </div>
          <div className="partHB containerCourses">
            <div className="contentCourses">

              <div className="insideCourses">
                <div className="partCourses LeftCourses">
                  <h1> Secundaria</h1>
                <br />
                  <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud.</p><br /><br />
                </div>
                <div className="partCourses RightCourses">
                  <table>
                    <tr><td>1r ESO</td></tr>
                    <tr><td>2n ESO</td></tr>
                    <tr><td>3r ESO</td></tr>
                    <tr><td>4t ESO</td></tr>
                  </table>
                </div>
              </div>

              
              <div className="insideCourses">
                <div className="partCourses LeftCourses">
                  <h1> Bachillerato</h1>
                <br/>
                  <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud.</p><br /><br />
                </div>
                <div className="partCourses RightCourses">
                  <table>
                  <tr><td>1r Curso</td></tr>
                  <tr><td>2n Curso</td></tr>
                  <tr><td>Selectividad</td></tr>
                  </table>
                </div>
              </div>


              <div className="insideCourses">
                <div className="partCourses LeftCourses">
                  <h1> Universidad</h1>
                <br/>
                  <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud.</p><br /><br />
                </div>
                <div className="partCourses RightCourses">
                  <table>
                  <tr><td>1r Año</td></tr>
                  <tr><td>2n Año</td></tr>
                  <tr><td>3r Año</td></tr>
                  <tr><td>4t Año</td></tr>
                  </table>
                </div>
              </div>
              <br /><br /><br />
            </div>
          </div>
        </section>
        
      </div>
      {/* Contact view*/}
      <section id="aboutSection" className="homeBody">
        <div ref={about} className="partHB">
          <h1 > Classroom title</h1>
          <br/><br /><br />
          <p>Exercitation consectetur exercitation nisi et excepteur sit aliquip. Ipsum commodo sit aliqua labore magna est minim enim ex incididunt proident nostrud. Laboris reprehenderit enim et ex exercitation aliqua culpa nostrud. Sint in minim officia culpa Lorem do voluptate minim et excepteur laboris. Amet ullamco sunt aliquip nostrud nostrud anim. Lorem et proident dolore dolor commodo.</p><br /><br />
          <span> canal yutu</span>
          </div>
        <div ref={imageabout} className="partHB ">
          <center className="containerImage">
            <img src={personImage} alt="img_Person"  className= {myImageAboutIsvisible ? "contactImage appearingImage" : 'contactImage'}/> 
            </center>
        

        
        </div>
      </section>

      </div>
    )
  };
  
  export default InitPage;