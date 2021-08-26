import s from './AddColorForm.module.css'

const AddColorForm = ({ onNewColor = f => f }) => {

	let _title, _color

	const submit = e => {
		e.preventDefault();
		onNewColor(_title.value, _color.value)
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}

	return (
		<form className={s.form} onSubmit={submit}>
			<input className={s.box} 
				ref={input => _title = input}
				type="text"
				placeholder="color title..." required />
			<input className={s.box}
				ref={input => _color = input}
				type="color" required />
			<button className={s.box}>ADD</button>
		</form>
	)
}

export default AddColorForm;