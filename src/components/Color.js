import StarRating from "./StarRating";
import s from "./Color.module.css";

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
    <div className={s.color}>
        <div className={s.box3}>
            <h1>{title}</h1>
        </div>
        <div>
            <button onClick={onRemove}>X</button>
        </div>

        <div className={s.box1}
            style={{ backgroundColor: color }}>
        </div>
        <div className={s.box2}>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </div>

export default Color;