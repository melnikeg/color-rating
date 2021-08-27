import style from './Star.module.css';

const Star = ({ selected=false, onClick=f=>f}) =>
<div className={(selected) ? (style.star + ' ' + style.starSelected) : (style.star)}
    onClick={onClick}>
</div>

export default Star;