/**
 * Roberto Oliveira RU: 4559748
 * Engenharia de Software - UNINTER
 * Matéria: Fundamentos da Programação Web
 *
 * Uso esse estilo de código devido a minha experiencia na area, trabalho como desenvolvedor 
 * front-end a mais de 2 anos,
 */

// Função para exibir o conteúdo da página inicial
function primeiraPagina() {
    return `
          <div class="home-container">
              <h1 class="main-title">Olá! Sou Roberto Oliveira.</h1>
              <p class="boxcontent">Curso analise e desenvolvimento de sistemas - UNINTER.</p>
              <p class="boxcontent">Cai de paraquedas no mundo da programação como indiação do meu irmão e acabei achando minha profissão.</p>
          </div>
      `;
  }
  
  // Função para exibir o conteúdo da página "Sobre Mim"
  function sobreMim() {
    const idade = calcularIdade('1999-11-11');
    const cidade = "Santa Cruz do Sul - RS";
    const hobbies = "Mesmo não podendo fazer tudo na mesma semana, quando me sobra um tempo, gosto de dormir, sair com meus amigos ou jogar jogos single-player. A competitividade não me atrai tanto assim em jogos; gosto de curtir a história.";
    
    return `
        <div class="sobre-container">
            <h1 class="main-title">Sobre mim</h1>
            <p class="boxcontent">Aqui quem vos fala é o Roberto, um desenvolvedor front-end, com ${idade} anos de idade e alguns sonhos para alcançar. Atualmente, resido em ${cidade}, onde basicamente trabalho como desenvolvedor das 8h às 18h como CLT e sou parceiro de outra empresa, na qual fico encarregado da parte de desenvolvimento das 19h às 2h. ${hobbies}</p>
            <p class="boxcontent">Após desistir da faculdade de administração, decido olhar um vídeo do Curso em Vídeo sobre programação e foi ai que a semente da curiosidade foi plantada. Trabalhando como auxiliar de produção e tendo que me mudar para outra cidade, acabei mergulhando de cabeça no curso da New Tab.</p>
            <p class="boxcontent">Após seis meses morando em outra cidade e estudando programação, decidi largar o meu trabalho para tentar abrir um negócio de distribuição de pães com meu pai. Sem nenhuma oportunidade na área de programação, foi a saída que eu tinha para ficar perto da família.</p>
            <p class="boxcontent">Após 2 semanas, recebi uma ligação para uma entrevista na área de programação devido a uma indicação. Sem nenhuma experiência na área de programação, fui mesmo assim. Ao conversar com os chefes da empresa, fui sincero sobre meu conhecimento e qual curso tinha feito.</p>
            <p class="boxcontent">Os sócios da empresa gostaram da minha sinceridade e viram algo em mim que nem eu conseguia ver naquela época.</p>
            <p class="boxcontent">Fui contratado e é nessa empresa que atuo como desenvolvedor front-end, com experiência em Vue, React e React Native, usando tanto JavaScript quanto TypeScript. Também consigo desenvolver algumas funcionalidades no back-end com Laravel, usando PHP.</p>
            <p class="boxcontent">Meu dia a dia agora é desenvolver novas features e novos projetos, mas ainda há muito a melhorar e aprender.</p>
            <p class="boxcontent">Decidi fazer Análise e Desenvolvimento de Sistemas com o objetivo de melhorar minha percepção como desenvolvedor.</p>
            <button class="btn-voltar">De volta para o início</button>
        </div>
    
      `;
  }
  
  
  // Função para exibir o conteúdo da página "Formação"
  function minhaFormacao() {
    return `
          <div class="formacao-container">
              <h1 class="main-title">Estudos</h1>
              <p class="boxcontent">No momento, tô na correria pra aprender o máximo com meus superio na empresa e com desenvolvedores com mais experiência. Mesmo não tendo terminado a graduação da new tab, estou sempre buscando oportunidades de aprender e crescer na área.</p>
              <p class="boxcontent">Aqui uns cursos que comecei:</p>
              <ul>
                  <li>Administração - Dom alberto (1 semestres)</li>
                  <li>Desenvolvedor fullstack - New tab academy (4 meses)</li>
                  <li>Engenharia de Software - UNINTER (Atual)</li>
              </ul>
              <p class="boxcontent">Cursos extras:</p>
              <ul>
                  <li>Cursos sobre programação (HTML, CSS, JavaScript e React) - Udemy</li>
                  <li>Cursos de Vue, estrutura de dados, orientação a objeto - Udemy</li>
                  <li>Curso de PHP(incompleto) - Udemy</li>
              </ul>
              <p class="boxcontent">Sempre tento melhorar quando começo um projeto novo, pois com dev's mais experientes sempre se aprende uma maneira correta e mais rápida de fazer algo.</p>
              <button class="btn-voltar">De volta pro início</button>
          </div>
      `;
  }
  
  // Função para exibir o conteúdo da página "Meu Portfólio"
  function meuPortifolio() {
    return `
          <div class="portfolio-container">
              <h1 class="main-title">Meus Trabalhos</h1>
              <div class="project">
                  <h2 class="project-title">Meu GitHub</h2>
                  <p class="project-description">Não tenho muitos projetos pessoais no meu GitHub, mas pode dar uma olhada no meu perfil.</p>
                  <div class="project-links"><a href="https://github.com/robertoedu" target="_blank" class="project-link"><i class="fab fa-github"></i> Roberto Oliveira</a></div>
              </div>
              <div class="project">
                  <h2 class="project-title">Night buttons</h2>
                  <p class="project-description">Primeiro projeto solo sem saber absolutamente nada.</p>
                  <p class="project-description">Usei html e css, para criar um botão de modo noturno.</p>
                  <div class="project-links"><a href="https://github.com/ROliveira/startupgame" target="_blank" class="project-link"><i class="fab fa-github"></i> Night button</a></div>
              </div>
              <div class="project">
                  <h2 class="project-title">Projeto figma</h2>
                  <p class="project-description">Projeto feito ao inicair na new tab.</p>
                  <p class="project-description">Usei html,css e js  para criar um projeto responsivo e com calculo de valores inseridos em uma tabela.</p>
                  <div class="project-links"><a href="https://github.com/ROliveira/startupgame" target="_blank" class="project-link"><i class="fab fa-github"></i> Projeto figma</a></div>
              </div>
              <div class="project">
                  <h2 class="project-title">Hackatom</h2>
                  <p class="project-description">Projeto feito com uma equipe de alunos da new tab.</p>
                  <p class="project-description">Usei html,css, js e o Rect como framework para criar um projeto de compras, na época eu trabalhava na area já, o projeto infelizmente não foi concluído, pois como foi divido entre todos os participantes da equipe, teve alguns que desistiram ou deixaram de fazer o projeto sem avisar.</p>
                  <div class="project-links"><a href="https://github.com/ROliveira/startupgame" target="_blank" class="project-link"><i class="fab fa-github"></i> Hackatom</a></div>
              </div>
              <div class="project">
                  <h2 class="project-title">Projetos nos quais eu trabalhei ou desenvolvi desde o início</h2>
                  <p class="project-description">Esses são alguns projetos que trabalhei ou trabalho atuamente em ambas as empresas.</p>
                  <p class="project-description">Sendo usado Quasar ou Vuetify como tecnológia, css para estilização de alguns componentes e Vue como framework, em alguns deles também utilizes do framework Laravel para e a linguagem PHP para desenvolver algumas features.</p>
                  <div class="project-links"><a href="https://appinovars.azurewebsites.net/home" target="_blank" class="project-link"><i class="fab fa-github"></i> Inova</a></div>
                  <div class="project-links"><a href="https://etaparifas.azurewebsites.net/login?path=%2F" target="_blank" class="project-link"><i class="fab fa-github"></i> Etapa </a></div>
                  <div class="project-links"><a href="https://reduzzenergia.com.br/" target="_blank" class="project-link"><i class="fab fa-github"></i> Reduzz energia</a></div>
              </div>
              <button class="btn-voltar">De volta pro início</button>
          </div>
      `;
  }
  
  /**
   * Função para a página "Contato"
   * Adiciona um event listener ao formulário de contato.
   * Isso é necessário aqui, pois o formulário precisa existir antes de adicionar o listener.
   */
  function entrarEmContato() {
    // Adiciona event listener ao formulário de contato aqui
    setTimeout(() => {
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          // Previne o comportamento padrão do formulário (enviar o formulário para o navegador)
          event.preventDefault();
  
          // Captura os valores dos campos pelo ID
          const nome = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const mensagem = document.getElementById("message").value;
  
          // Envia os dados para o Formspree (plataforma de envio de e-mail)
          fetch("https://formspree.io/f/meqyrnqo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: nome,
              email: email,
              message: mensagem,
            }),
          })
            .then((response) => {
              // Limpa os campos se o envio for bem-sucedido
              if (response.ok) {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Mensagem enviada com sucesso!");
              } else {
                // Exibe uma mensagem de erro se o envio falhar
                alert(
                  "Ops! Algo deu errado ao enviar a mensagem. Por favor, tente novamente."
                );
              }
            })
            .catch((error) => {
              console.error("Erro:", error);
              // Exibe uma mensagem de erro se ocorrer um erro durante o envio
              alert(
                "Ops! Algo deu errado ao enviar a mensagem. Por favor, tente novamente."
              );
            });
        });
    }, 0);
  
    // Retorna o HTML do conteúdo da página "Contato"
    return `
          <div class="contato-container">
              <h1 class="main-title">Caso queira entrar em contato comigo</h1>
              <form id="contact-form" class="contact-form">
                <div class="form-group">
                  <label for="name">Nome:</label>
                  <input type="text" id="name" name="name" required>
                        </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn-submit">Enviar</button>
            </form>
            <button class="btn-voltar">De volta pro início</button>
          </div>
      `;
  }
  
  // Função para calcular a idade com base na data de nascimento
  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  
  // Função para definir o botão "ativo" no menu
  function botaoAtivo(botaoSelecionado) {
    const botoes = document.querySelectorAll("nav button");
    botoes.forEach((botao) => {
      if (botao.id === botaoSelecionado) {
        botao.classList.add("ativo");
      } else {
        botao.classList.remove("ativo");
      }
    });
  }
  
  // Escutar evento pro clique no botão "Início"
  document.getElementById("inicio").addEventListener("click", () => {
    document.getElementById("conteudo").innerHTML = primeiraPagina();
    botaoAtivo("inicio");
  });
  
  // Escutar evento do clique no botão "Sobre Mim"
  document.getElementById("sobreMim").addEventListener("click", () => {
    document.getElementById("conteudo").innerHTML = sobreMim();
    botaoAtivo("sobreMim");
  });
  
  // Escutar evento do clique no botão "Formação"
  document.getElementById("formacao").addEventListener("click", () => {
    document.getElementById("conteudo").innerHTML = minhaFormacao();
    botaoAtivo("formacao");
  });
  
  // Escutar evento do clique no botão "Portfólio"
  document.getElementById("portifolio").addEventListener("click", () => {
    document.getElementById("conteudo").innerHTML = meuPortifolio();
    botaoAtivo("portifolio");
  });
  
  // Escutar evento do clique no botão "Contato"
  document.getElementById("contato").addEventListener("click", () => {
    document.getElementById("conteudo").innerHTML = entrarEmContato();
    botaoAtivo("contato");
  });
  
  // Event listener pra carregar o conteúdo "Início" por padrão quando a página é carregada
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("conteudo").innerHTML = primeiraPagina();
    botaoAtivo("inicio"); // Define o início como ativo assim que a página é carregada!
  
    // Adiciona evento escutando o botão "Voltar" em todos os conteúdos
    document.getElementById("conteudo").addEventListener("click", (evento) => {
      if (evento.target.classList.contains("btn-voltar")) {
        document.getElementById("conteudo").innerHTML = primeiraPagina();
        botaoAtivo("inicio");
      }
    });
  });
