import './footer.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Slide } from 'react-awesome-reveal';

const footer = () => {
    return (
        <div className="footer_style">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                      <Slide direction={"up"} delay={100}>
                      <div className="footer_sub">
                            <h1>О НАС</h1>
                            <p>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!
                            </p>
                            <h1>МЫ В СОЦ.СЕТЯХ:</h1>
                            <div className="footer_icon">
                                <a href="https://osten.vercel.app/production#"><FontAwesomeIcon className="icons" icon={faFacebook}/></a>
                                <a href="https://osten.vercel.app/production#"><FontAwesomeIcon className="icons" icon={faInstagramSquare}/></a>
                                <a href="https://osten.vercel.app/production#"><FontAwesomeIcon className="icons" icon={faTelegram}/></a>
                            </div>
                        </div>
                      </Slide>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-4">
                   <Slide direction={"up"} delay={200}>
                       <div>
                       <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
                    <div>
                    <a href="/news/TmV3c05vZGU6MQ==" ><p>Построен новый лифт</p></a>
                    <a href="/news/TmV3c05vZGU6MQ==" ><p>РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</p></a>
                    <a href="/news/TmV3c05vZGU6MQ==" ><p>ДИСПЕТЧЕРИЗАЦИЯ</p></a>
                    </div>
                       </div>
                   </Slide>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-4">
                        <Slide direction={"up"} delay={300}>
                        <div>
                        <h1>КОНТАКТЫ</h1>

                        <p><strong>Номер телефона:</strong> 
                        <span> +998 (93) 511-11-17</span> 
                        <span>+998 (91) 791-51-15</span>
                        </p>
                        <p> <strong>Электронная почта: </strong>
                        info@uzlift.uz
                        </p>
                        <p><strong>Адрес: </strong>100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
