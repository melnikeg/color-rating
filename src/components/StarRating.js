import { Component } from 'react';
import Star from './Star';

class StarRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }
    change(starsSelected) {
        this.setState({starsSelected})
    }
    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div>
                {[...Array(totalStars)].map((n, i) =>
                    <Star   key={i}
                            selected={i<starsSelected}
                            onClick={() => this.change(i+1)}
                    />
                )}
                <p>{starsSelected} of {totalStars}</p>
            </div>
        )
    }
}

export default StarRating;