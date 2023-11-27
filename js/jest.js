const { obterAlimentosDaAPI } = require('./script');

// Mock da função fetch para simular chamadas à API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          alimento_nome: 'Arroz',
          usuario_id: 1,
          alimento_id: 1,
        },
      ]),
  })
);

// Teste para verificar se a função obterAlimentosDaAPI retorna a lista de alimentos esperada
test('obterAlimentosDaAPI retorna a lista de alimentos correta', async () => {
  const alimentos = await obterAlimentosDaAPI();
  expect(alimentos).toHaveLength(1); // O tamanho da lista deve ser ajustado com base no número de alimentos simulados
  expect(alimentos[0].alimento_nome).toBe('Arroz');
});

// Teste para verificar se a função obterAlimentosDaAPI lida com erros de forma apropriada
test('obterAlimentosDaAPI trata erros corretamente', async () => {
  // Simulando um erro na solicitação da API
  global.fetch.mockImplementationOnce(() => Promise.reject('Erro simulado'));

  const alimentos = await obterAlimentosDaAPI();
  expect(alimentos).toEqual([]); // A função deve retornar uma lista vazia em caso de erro
});