import react from 'react';
import { Container, Card, Caroucel } from '../Detalhe/styles';
import { useRouter } from 'next/router';
import Carousel from 'react-img-carousel';


import { Casas } from '../../utils/residencias';

const Detalhe = () => {
    const router = useRouter()
    const { id } = router.query

    const detalheCasa = Casas.find(p => p.id === Number(id));

    return (

        <Container>
            {
                <div className="card" key={detalheCasa.id} onClick={() => { }}>
                    <div className="content">
                        <Carousel viewportWidth="750px" cellPadding={1}>
                            {
                                detalheCasa.imagens.map(p =>
                                    <img src={p} />
                                )
                            }

                        </Carousel>

                        <p> {detalheCasa.endereco}</p>
                        <p> {detalheCasa.bairro}</p>

                        <ul>
                            {
                                detalheCasa.detalhes.map(p =>
                                    <li>{p}</li>
                                )
                            }
                        </ul>

                        <p>Condições de pagamento: {detalheCasa.condicoes} </p>
                        <div className="info">
                            <p className="text--medium">{detalheCasa.valor}</p>
                            <p className="price text--medium">{detalheCasa.status}</p>
                        </div>
                    </div>
                </div>

            }
        </Container>
    )
}


export default Detalhe;