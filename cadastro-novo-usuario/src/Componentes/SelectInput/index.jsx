const opcoes = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Feminino' },
  { value: 'NI', label: 'Não informado' }
];

const SelectInput = () => {
  return (
    <>
      <select>
        {opcoes.map(opcao => (
          <option value={opcao.value}>{opcao.label}</option>
        ))}
      </select>
    </>
  );
}

export default SelectInput;