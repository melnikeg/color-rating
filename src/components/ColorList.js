import Color from "./Color";
import s from "./Color.module.css"

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div className={s.mainBox}>
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