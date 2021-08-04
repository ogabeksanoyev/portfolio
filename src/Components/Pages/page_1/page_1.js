import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from "react";
// import Slider from "react-slick";
import { Fade, Hinge, Slide } from 'react-awesome-reveal';
import './page_1.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlobeAsia, faListOl, faPencilRuler, faRuler, faRunning, faSortAlphaUp, faThumbsUp, faToolbox, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft, faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-bootstrap/Carousel'


const data_1 = [
    {
        icons:faPencilRuler,
        title:"ПРОЕКТИРОВАНИЕ",
        text:"Подробно про проектирование",
    },
    {
        icons:faToolbox,
        title:"МОНТАЖ",
        text:"Подробно про монтаж",
    },
    {
        icons:faCreativeCommons,
        title:"ЗАПАСНЫЕ ЧАСТИ",
        text:"Подробно про запасные части",
    },
    {
        icons:faTools,
        title:"РЕМОНТ",
        text:"Подробно про ремонт",
    },
]

const data_2 = [
    {
        icosn:faSortAlphaUp,
        number:"300",
        text:"лифтов в год",
    },
    {
        icosn:faGlobeAsia,
        number:"2",
        text:"года на рынке",
        },
        {
            icosn:faRunning,
            number:"200",
            text:"эскалаторов в год",
            }
]

const data_3 = [
    {
        icons:faAccusoft,
        title:"Поиск и инновации",
        text:"Мы ведем постоянный поиск и внедряем инноваций",
    },
    {
        icons:faThumbsUp,
        title:"Качество и цена",
        text:"Предложение лифтов и эскалаторов высокого качества по конкурентным ценам",
    },
    {
        icons:faUser,
        title:"Индивидуальный подход",
        text:"Индивидуальный и гибкий подход к каждому клиенту",
    },
    {
        icons:faListOl,
        title:"Широкий ассортимент",
        text:"Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами",
    },
    {
        icons:faCheck,
        title:"Гибкость",
        text:"Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания",
    }
]

const page_1 = () => {
    return (
        <div className="page_1_section">
            <section className="section section_before section_1">
               <div className="container">
                  <Slide>
                      <div class="animation">
                        <h1 className="page_title">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</h1>
                      </div>
                  </Slide>
             <Slide delay={250}><div className="animation"><p className="page_text">Компания «Osten» была основана в 2019 году!</p></div></Slide>

               <Slide delay={500}><div className="animation"><a class="page_btn" href="/about">ПОДРОБНЕЕ</a></div></Slide>
             </div>
            </section>
            <section className="section section_2">
                <div className="conatiner">
                    <div className="section_title">
                        <h1>Наши услуги</h1>
                    </div>
                   
                 <div className="container">
                       <div className="row mt-5">
                            {
                                data_1.map((v,i)=>{
                                    return(
                                
                            <div className="text-center col-lg-3 col-md-6 col-sm-10 col-12 mt-5">
                                
                               <Slide direction={"left"} delay={i*50}>
                               <div>
                                   <div class="cards py-5 px-3 h-100">
                                       <FontAwesomeIcon icon={v.icons} key={i} className="icons"/>
                                    <div><h4 class="mb-3">{v.title}</h4>
                                        <p>{v.text}</p></div>
                                     </div>
                                </div>
                               </Slide>
                              
                            </div>
                                
                                    )
                                })
                            }
                        </div>
                 </div>
               
                </div>
            </section>
            <section className="section section_before section_3">
               <div className="container">
                   <div className="section_title">
                     <h1>Результаты</h1>
                   </div>

                   <div className = "row text-center">
                       {
                           data_2.map((v,i)=>{
                               return(
                                <div className="col-md-4 mt-4 mt-md-2">
                          <Slide direction={"up"} delay={i*100}>
                          <div>
                              <FontAwesomeIcon icon={v.icosn} className="icons" />
                              <h1 class="my-2">{v.number}</h1>
                              <p>{v.text}</p>
                              <hr  className="d-md-none"/>
                          </div>
                          </Slide>
                       </div>
                               )
                           })
                       }
                   </div>

               </div>
            </section>
            <section className="section section_4">
                <div className="container">
                    <div className="section_title">
                      <h1>Кабины лифтов</h1>
                    </div>
                  
                    <div className="btnx"> <Slide direction={"up"} delay={100}><a className="page_btn" href="/about">ВСЯ ПРОДУКЦИЯ</a>
                    </Slide></div>
                
                </div>
            </section>
            <section className=" section section_5">
                <div className="container">
                   <div className="section_title">
                     <h1>Преимущества</h1>
                    </div>

                    <div className="row justify-content-center">
                       {
                           data_3.map((v,i)=>{
                               return(
                        <div className="col-xl-4 col-lg-6 mt-4">
                           <Slide direction={"up"}>
                           <div className="cards py-3 px-2 text-center">
                            <div className="circle mb-3"> <FontAwesomeIcon icon={v.icons} className="icons"/></div>
                            <h4 class="mb-3">{v.title}</h4>
                            <p>{v.text}</p>
                            </div>
                           </Slide>
                        </div>
                               )
                           })
                       }
                    </div>
                </div>
            </section>
            <section className="section section_before section_6">
                <div className="container">
                    <div className="section_title ">
                        <h1>Отзывы клиентов</h1>
                    </div>
                     
                    <div>
                        <div className="text-center jx">
                          <h4 class="my-5">JOHN DOE • PROPERTY INVESTOR</h4>  
                          
                          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
                      </div>
                    </div>
                
                </div>
            </section>
        </div>
    )
}

export default page_1
