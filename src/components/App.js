import {Component} from 'react';
import { v4 } from uuid;
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.reteColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id:v4(),
                title,
                color,
                reting: 0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    reting
                }
            )
            this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors})
    }

    rendrer() {
        const {addColor, rateColor, removeColor} = this
        const {colors} = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList  colors={colors} 
                            onRate={rateColor}
                            onRemove={removeColor}/>
            </div>
        )
    }
}