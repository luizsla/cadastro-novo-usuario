
const FormInput = ({id, tipo, label, placeholder}) => {
    return (
			<>
				<label htmlFor={id}>{label}:</label>
				<input type={tipo} id={id} placeholder={placeholder} />
			</>
    );
}

export default FormInput;