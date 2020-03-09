import React from 'react';

import Input from './components/Input';
import InputMask from './components/InputMask';
import Button from './components/Button'
import ReactSelect from './components/Select';

import { Form, Group2, Group3 } from './styles';

import GlobalStyle from './styles/global';

const states = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraiba' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'PR', label: 'Paraná' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RO', label: 'Rondonia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'TO', label: 'Tocantins' },
]

function App() {
  function handleSubmit(data) {
    const { cep = '', phone = '' } = data;
    console.table(data);
    console.log(cep.replace(/\D+/g, ''));
    console.log(phone.replace(/\D+/g, ''));
  }

  return (
    <div className="App">
      <GlobalStyle />      
      <Form onSubmit={handleSubmit}>
        <Input name="name" label="Nome" placeholder="Informe seu nome" />
        <Group2>
          <Input name="street" label="Rua" placeholder="Informe o logradouro" />
          <Input name="number" label="Número" />
          <Input name="complement" label="Complemento" placeholder="Casa, Apartamento..." />
        </Group2>
        <Group3>
          <Input name="city" label="Cidade" placeholder="Informe a cidade" />
          <ReactSelect name="state" label="Estado" options={states} placeholder="Selecione um estado" />
          <InputMask name="cep" mask="99999-999" label="CEP" placeholder="Informe o CEP..." />
        </Group3>
        <Button type="submit" title="Salvar" />
      </Form>
    </div>
  );
}

export default App;
