import Color from "./Color";

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div>
        {(colors.length === 0) ? 
            <p>No colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color  key={color.id}
                        {...color}
                        onRate={(rating) => onRate(color.id, rating)}
                        onRemove={() => onRemove(color.id)} />
            )
        }
    </div>


export default ColorList;