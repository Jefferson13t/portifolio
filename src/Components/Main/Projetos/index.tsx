import { Projects, Container , Wrapper , Card } from './style'
import { useEffect } from 'react';
import { data } from './../../../data'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

export const Projetos = () => {
    const dados = data.projects
    
    let control = 0;


        //habilitar arrow para chamar a funcao scrollTo 
        window.addEventListener('keydown', (event)=> {
            if (event.key === 'ArrowLeft') {
                scrollTo(true)
            }
            if (event.key === 'ArrowRight') {
                scrollTo(false)
            }
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
            event.preventDefault()
            }
        })
    //habilitar swipe do celular para o carousel
    let touchendX = 0
    let touchstartX = 0
    let alreadySwipeLeft = false
    let alreadySwipeRight = false

    function checkDirection() {
        //left
        if(touchendX > touchstartX)  {
            if (!alreadySwipeLeft){
            scrollTo()
        } 
        alreadySwipeLeft = !alreadySwipeLeft

        }
        //right
        if(touchendX < touchstartX)  {
            if (!alreadySwipeRight) {
                scrollTo(false)
            }
            alreadySwipeRight = !alreadySwipeRight
        }
    
    }
    useEffect(() => {
        const container = document.getElementById('carouselcontainer')
        
    
    container?.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
      e.preventDefault()
    }, false)
    
    container?.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
      e.preventDefault()
    }, false)
    
    },[])

    const scrollTo = (isLeft: boolean = true): void => {
        const cards = document.querySelectorAll('.card');
        console.log(control)

        isLeft ? control-- : control++;

        if (control < 0) {
            control = cards.length - 1
        }
        if (control > cards.length - 1){
            control = 0
        }
        
        cards[control].scrollIntoView({inline: 'center', behavior: 'smooth'})
        }

        const cards = dados.map((dados)=> {
            return (
                <Card className='card'> 
                <h1>{dados.title}</h1>
                <a href={dados.link} target="blank">
                <img src={dados.img} alt={dados.title}></img>
                </a>
                <p>Tecnologias: {dados.techs}</p>
                </Card>
            )
        })

        
        return (<Projects>
            <h1>Projetos</h1>
            <Container id="carouselcontainer">
                    <BiLeftArrow id="left-arrow" onClick={() => scrollTo()}/>
                <Wrapper>
                    {cards}
            </Wrapper>
            <BiRightArrow id="right-arrow" onClick={() => scrollTo(false)}/>    

            </Container>
        </Projects>)
    }
