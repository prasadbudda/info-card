import React from 'react';
import Card from './components/card'

let myItems = [{
    title: 'CARD 1',
    ico: true,
    img: "https://assets.imgix.net/unsplash/citystreet.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 2',
    ico: false,
    img: "https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=600&h=600&q=80&cs=tinysrgb&crop=&bg=",
    description: "Card 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 3',
    ico: true,
    img: "https://assets.imgix.net/unsplash/pineneedles.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 4',
    ico: false,
    img: "https://assets.imgix.net/unsplash/motorbike.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 5',
    ico: true,
    img: "https://assets.imgix.net/unsplash/macaque.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 6',
    ico: false,
    img: "https://assets.imgix.net/examples/balloons.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 7',
    ico: true,
    img: "https://assets.imgix.net/unsplash/paperlamp.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
},
{
    title: 'CARD 8',
    ico: false,
    img: "https://assets.imgix.net/examples/kingfisher.jpg?auto=compress&w=600&h=600&fit=crop&fm=png",
    description: "Card 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. "
}
];
class App extends React.Component {
    constructor(){
        super();
        this.state = {
          data: myItems
        }
        this.delete = this.delete.bind(this);
     }
  
     delete(id){
        this.setState(prevState => ({
            data: prevState.data.filter(el => el != id )
        }));
     }
    render() {
        return (
            <div>
                <Card cards={this.state.data} delete={this.delete}/>
            </div>
        );
    }
}

export default App;