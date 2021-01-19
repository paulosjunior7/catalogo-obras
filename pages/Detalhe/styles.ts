import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .cards {
        width: 90%;
        max-width: 1024px;
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
    }

    .text--medium {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #ecf0f1;
    }

.card {
        display: flex;
        flex-direction: column;
        background-color: #7159c1;
        cursor: pointer;
        transition: all 0.3s ease 0s;

}

.card:hover {
  transform: translateY(-7px);
}

.image {

}

.image img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  margin: 20px;

  p {
      font-size: 20;
  }

  li {
      font-size: 20;
  }
}

.title {
  margin-bottom: 20px;
}

.info {
  display: flex;
  align-self: end;
  align-items: center;
}

.price {
  margin-left: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #7159c1;
  filter: brightness(90%);
}
`

export const Card = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 32px;

 

`

export const Caroucel = styled.div`
    /* external css: flickity.css */

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body { font-family: sans-serif; }

.gallery {
  background: #EEE;
}

.gallery-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
`