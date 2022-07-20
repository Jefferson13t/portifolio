import { Projects, Container , Wrapper , Card } from './style'

export const Projetos = () => {
    
    const cards = document.querySelectorAll('.card');
    let control = 0;

    const scrollTo = (isLeft: boolean) => {

        isLeft ? control -= 1 : control += 1;


        if (control < 0) {
            control = cards.length - 1
        }
        if (control > cards.length - 1){
            control = 0
        }

        const swippe = (control: number) => {

            console.log(control)
           // cards[control].scrollIntoView({inline: 'center', behavior: 'smooth'})
        } 
        swippe(control)
        }


        return (<Projects>
            <h1>Projetos</h1>
            <Container>
                <div id="left-arrow" onClick={() => scrollTo(true)}>{"<"}</div>
                <Wrapper>
            <Card className='card'>
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
