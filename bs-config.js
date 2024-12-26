module.exports = {
  proxy: "localhost:3001", // Endereço onde o servidor está rodando
  files: ["**/*.css", "**/*.pug", "**/*.js"], // Arquivos a serem monitorados para mudanças
  ignore: ["node_modules"], // Diretórios ou arquivos a serem ignorados
  reloadDelay: 10, // Tempo (em ms) de atraso antes do reload
  ui: false, // Desativa a interface de controle do BrowserSync
  notify: false, // Desativa notificações no navegador sobre recarregamentos
  port: 3000, // Porta em que o BrowserSync será servido
};
