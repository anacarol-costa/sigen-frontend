import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';


export function MeuCarousel() {

    function Example(props) {
        var items = [
            {
                name: "Random Name #1",
                description: "Probably the most random thing you have ever seen!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }
        ]

        return (
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        )
    }

    function Item(props) {
        return (            
            <Paper>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>                
            </Paper>
        )
    }
}