# Documentação
  O arquivo “content.js” tem a função de aplicar a camada de filtro após uma ação
acionar o script, no caso, o acionamento do botão no popup. O objeto daltonismo foi
definido para armazenar diferentes estilos CSS (usado para estilização de elementos
escritos em HTML) associados a condições visuais. Possui duas propriedades: a
“normal”, representando o plugin desativado, sem quaisquer filtros aplicados; e a
“protanopia”, que contém uma string com regras CSS que ajustam a aparência da
página para simular a visão de uma pessoa com protanopia. Especificamente, estas
regras alteram brilho, contraste, filtro sépia, saturação e a rotação de matiz da página.

  A função filtro recebe um estilo e o aplica ao documento ao inserir ou atualizar
um elemento “style” com o id “filtroProtanopia” no documento HTML. A função
verifica se o elemento ‘style’ com o id já existe, criando este elemento e o adicionando
ao cabeçalho do arquivo HTML, caso não exista. Por fim, o conteúdo de textContent do
elemento ‘style’ é atualizado, aplicando o estilo selecionado

  O script utiliza a função ‘chrome.storage.sync’ para obter a configuração de
daltonismo armazenada, A função ‘layout’ é utilizada como uma variável local para
armazenar o estilo CSS correspondente à configuração obtida no armazenamento do
“Chrome”, onde o valor é armazenado sob a chave protanopia. Caso não haja um valor
definido, assume-se o valor “normal”. De acordo com o valor obtido (protanopia ou
normal), a função “filtro” será chamada com o estilo atual do objeto “daltonismo”.

  Foi configurado um receptor de dados que aguarda mensagens “updateContent”.
Foi definido também um receptor para mensagens enviadas pela extensão, fazendo com
que, após a mensagem “updateContent” ser recebida, o script obtenha a configuração
atual da paleta e chame a função “filtro” para atualizar o estilo da página.

  JSON é um formato de arquivo no qual é detalhado ao browser informações
relacionadas ao que é necessário para o funcionamento como o html principal, nome da
aplicação, versão dele, descrição e permissões.

  O principal objetivo do arquivo popup.js é instruir o funcionamento do botão
criado no HTML, executando a chamada do arquivo que aplica a camada de filtro no
browse (content.js). Esta call é feita por meio do ID que são iguais em ambos arquivos.
O evento acionado a seguir é a ativação da API (Application Programming Interface) do
“Google” e obtém o filtro de daltonismo definido no content.js.

  O programa utiliza o método “getElementById” para funcionar em conjunto
com o HTML, por meio do id “ativaExtensao”. Foi adicionado um receptor de evento
do tipo “click” ao botão. Este receptor define uma função chamada “” que é executada
quando o botão for pressionado. Dentro da função, o método “chrome.storage.sync.get”
é utilizado para recuperar o estado atual do filtro protanopia do armazenamento
sincronizado do Chrome. Por fim, ocorre uma análise do estado atual do filtro: se o
estado atual for normal (ou seja, o filtro não está ativado), ele será alterado para
protanopia, ativando assim o filtro. Caso contrário, o estado será revertido para normal.

  Na seção seguinte do código, por meio das funções “chrome.tabs.query” e
“chrome.tabs.sendMessage”, são consultadas as abas do navegador que estão ativas e é
enviada uma mensagem solicitando a atualização do conteúdo das mesmas.

  Com a mensagem ‘updateContent’ recebida, a aparência e o texto do botão
‘ativaExtensao’ ativam o filtro. Se o filtro protanopia estiver ativado, o botão é
estilizado com um fundo cinza e texto escuro, e seu texto é alterado para "Desativar
Extensão". Caso contrário, o botão retorna ao estado anterior, recebendo novamente um
fundo escuro e texto claro, com seu texto alterado para "Ativar Extensão".

  O arquivo Popup.html fornece ao browser a estrutura exibida ao usuário, neste
caso, o popup do “Recolor!”. No popup.html, são definidas as cores, o tamanho e as
fontes do popup. No início há a declaração “!DOCTYPE html”, que define o padrão
HTML 5 para o documento, permitindo compatibilidade com navegadores modernos.
Um atributo lang é definido para português brasileiro. Dentro do cabeçalho, foi definido
no elemento a codificação de caracteres como UTF-8, codificação que fornece suporte a
uma quantidade diversa de caracteres distintos. O elemento ‘title’ especifica o título do
documento e é exibido na aba do navegador.

  A seção ‘style’ contém regras CSS que definem a aparência dos elementos no
documento. A estilização é aplicada diretamente ao popup e ao botão dentro dele.
Foram aplicadas fontes, cores, espaço entre conteúdo e bordas do popup e do botão,
cursor e arredondamento das bordas.

  O corpo do documento contém o conteúdo visual e interativo do popup. O título
"Recolor!" foi adicionado na janela da extensão. O elemento ‘button’ cria um botão com
o texto "Ativar Extensão". O atributo ‘ativaExtensao’ foi colocado em um ‘id’. Por fim,
o ‘script’ importa e executa o arquivo ‘popup.js’, que contém a lógica para a
funcionalidade do botão.

