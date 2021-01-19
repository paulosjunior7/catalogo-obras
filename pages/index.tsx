import react from 'react';

import  Header from '../components/Header'
import GlobalStyles from '../styles/global';




const Home = () => {
    return (
        <>
        <GlobalStyles />
        
        <header>
            <div className="container">
                <img
                    src="\logo-rocketseat.svg"
                    alt="Rocketseat"
                />
                <div className="menu-section">
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Starter</a>
                            </li>
                            <li>
                                <a href="#">Bootcamp</a>
                            </li>
                            <li>
                                <a href="#">Comunidade</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
        <section className="hero">
            <div className="container">
                <div>
                    <h2>
                        As melhores tecnologias em programação, direto ao ponto e do jeito
                        certo.
          </h2>
                    <p>
                        No meio de tanta informação e da quantidade de ferramentas que
                        surgem todos os dias, você precisa de alguém que te leve na direção
                        certa.
          </p>
                    <a href="#" className="button">Quero embarcar neste foguete!</a>
                </div>
                <img
                    src="./images/melhores-tecnologias.svg"
                    alt=""
                />
            </div>
        </section>

        <main>
      <section className="cards">
        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>

        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>

        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>

        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>

        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>

        <div className="card">
          {/* <!--
          <picture className="image" alt="Imagem">
            <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
            <source media="(min-width: 320px)" srcset="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg">
            <source media="(min-width: 10px)" srcset="https://i.ytimg.com/vi/HN1UjzRSdBk/mqdefault.jpg">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Imagem" />
            </picture>
          --> */}
          <div className="image">
            <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
          </div>
          <div className="content">
            <p className="title text--medium">
              Formulário Animado com JS puro e CSS Animation | Mayk Brito
            </p>
            <div className="info">
              <p className="text--medium">57 Min</p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section id="form">
      <form action="">
        <h3>Quero Estudar na Rocket!</h3>
        <div className="form-group">
          <input className="input-control" placeholder="Nome" />

          <input type="email" className="input-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <input className="input-control" placeholder="Empresa" />
        </div>

        <div className="form-group">
          <input className="input-control" placeholder="Endereço" />
        </div>

        <div className="form-group">
          <input className="input-control" placeholder="Cidade" style={{ flex: '3 2'}} />
          <input className="input-control" placeholder="Estado" style={{ flex: '1'}} />
          <input className="input-control" placeholder="CEP" style={{ flex: '1'}} />
        </div>

        <div className="form-group">
          <button type="submit" className="button">Save</button>

        </div>

      </form>
    </section>

    <div className="modal-overlay">
      <div className="modal">
        <a className="close-modal">
          <svg viewBox="0 0 20 20">
            <path
              fill="#000000"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
            ></path>
          </svg>
        </a>
        <div className="modal-content">
          <div className="video-background">
            <div className="video-foreground">
              <iframe
                src="https://www.youtube.com/embed/GykTLqODQuU"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>
    )
} 

export default Home;


