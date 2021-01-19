import react from 'react';

import Header from '../components/Header'
import GlobalStyles from '../styles/global';

const Home = () => {

  const videos = [
    {
      endereco: "Casa 2 Quartos, 2 suítes , 110m² ",
      bairro: "Residencial Canada",
      imagem: "https://img.olx.com.br/images/06/069070358716009.jpg",
      valor: "R$ 210.000,00",
      status: "Concluída"
    },
    {
      endereco: "Casa 3 Quartos, 2 suítes , 110m² ",
      bairro: "Residencial Moinho dos ventos",
      imagem: "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/df624cc2c99a38bac1804e458d35803a.jpg",
      valor: "R$ 310.000,00",
      status: "Concluída"
    },
    {
      endereco: "Casa 2 Quartos, 2 suítes , 110m² ",
      bairro: "Residencial Canada",
      imagem: "https://img.olx.com.br/images/06/069070358716009.jpg",
      valor: "R$ 210.000,00",
      status: "Concluída"
    },
    {
      endereco: "Casa 3 Quartos, 2 suítes , 110m² ",
      bairro: "Residencial Moinho dos ventos",
      imagem: "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/df624cc2c99a38bac1804e458d35803a.jpg",
      valor: "R$ 310.000,00",
      status: "Concluída"
    },
   
  
  
  ];


  return (
    <>
      <GlobalStyles />

      <header>
        <p>JMS Construção e Projeto Engenharia</p>
      </header>

      <section className="hero">
        <div className="container">
          <div>
            <h2>
              Catálogo de obras em execução, concluídas e finalizadas.
          </h2>
          </div>

        </div>
      </section>

      <main>
        <section className="cards">

          {
            videos.map(p =>
              <div className="card">
                <div className="image">
                  <img src={p.imagem} />
                </div>
                <div className="content">
                  <p className="title text--medium">
                    {p.endereco}
                    {p.bairro}
                  </p>
                  <p className="title text--medium"></p>
                  <div className="info">
                    <p className="text--medium">{p.valor}</p>
                    <p className="price text--medium">{p.status}</p>
                  </div>
                </div>
              </div>
            )

          }

        </section>
      </main>

      {/* <section id="form">
        <form action="">
          <h3>Solicitar Orçamento!</h3>
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
            <input className="input-control" placeholder="Cidade" style={{ flex: '3 2' }} />
            <input className="input-control" placeholder="Estado" style={{ flex: '1' }} />
            <input className="input-control" placeholder="CEP" style={{ flex: '1' }} />
          </div>

          <div className="form-group">
            <button type="submit" className="button">Save</button>

          </div>

        </form>
      </section> */}

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


