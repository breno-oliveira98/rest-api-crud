//console.log('js link');
const cep = document.querySelector('#cep');
const numero = document.querySelector('#numero');

const preencherEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(response => response.json())
    .then(data => {
      const estados = data;
      const selectElement = document.querySelector('#uf');
      console.log(selectElement)

      estados.forEach(estados => {
        const option = document.createElement('option');
        option.value = estados.sigla;
        option.innerHTML = estados.sigla;
        selectElement.appendChild(option);
      })

      
      const preencherMunicipios = () => {
        const optionUf = document.querySelector('#uf').value
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${optionUf}/municipios`)
        .then(response => response.json())
        .then(data => {
          const municipio = data;
          const selectElementLocalidade = document.querySelector('#localidade');
      
          municipio.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio.nome;
            option.innerHTML = municipio.nome;
            selectElementLocalidade.appendChild(option);
          })
        })
      }
      addEventListener
      preencherMunicipios();
    })
}




preencherEstados();

const consultaCep = async () => {
  let cepValue = cep.value;
  console.log(cepValue);

  if (cepValue.length === 8) {
    try {
      const res = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cepValue}`);
      console.log(res.data);

      preencherCampos(res.data);
      numero.focus();

    } catch (error) {
      console.error(error);
    }
  }
}

const preencherCampos = data => {
  const logradouro = document.querySelector('#logradouro');
  const bairro = document.querySelector('#bairro');
  const uf = document.querySelector('#uf');

  logradouro.value = data.street;
  bairro.value = data.neighborhood;
  uf.value = data.state;

}

//consultaCep('60420670')