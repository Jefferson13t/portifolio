import { Projects, Container , Wrapper , Card } from './style'
import { useEffect } from 'react';

export const Projetos = () => {
    
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
    useEffect(() => {
        const container = document.getElementById('carouselContainet')
        let touchendX = 0
        let touchstartX = 0
        
    function checkDirection() {
      if (touchendX < touchstartX) scrollTo(true)
      if (touchendX > touchstartX) scrollTo(false)
    }
    
    container?.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
      e.preventDefault()
    })
    
    container?.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
      e.preventDefault()
    })
    
    })


    
    const scrollTo = (isLeft: boolean): void => {
        const cards = document.querySelectorAll('.card');


        isLeft ? control -= 1 : control += 1;

        if (control < 0) {
            control = cards.length - 1
        }
        if (control > cards.length - 1){
            control = 0
        }
        
        cards[control].scrollIntoView({inline: 'center', behavior: 'smooth'})
        }

        
        return (<Projects>
            <h1>Projetos</h1>
            <Container id="carouselContainet">
                <div id="left-arrow" onClick={() => scrollTo(true)}>{"<"}</div>
                <Wrapper>
            <Card className='card' onKeyDown={()=> console.log('a')}>
                a
            </Card>
            <Card className='card'>
                b
            </Card><Card className='card'>
                c
            </Card><Card className='card'>
                d
            </Card>
            </Wrapper>
            <div id="right-arrow" onClick={() => scrollTo(false)}>{">"}</div>

            </Container>
        </Projects>)
    }
