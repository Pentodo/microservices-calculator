# Minicurso sobre Microsserviços

## Configuração

Cada microsserviço tem um arquivo ".env", que, inicialmente, define a variável PORT.
Entretanto, a ideia é disponibilizar suporte para futuras implementações de informações sensíveis.
Deve ser localizado no diretório raiz de cada microsserviço.

Além disso, o microsserviço "store" também utiliza um "file.json", para a execução de modificações em arquivo.
Deve ser localizado na pasta "public". Este microsserviço é o único que deve ter algo do tipo.

## Ideia

A aplicação "server" servirá de interface para o cliente.
Ele conversa diretamente com o microsserviço "store".

O microsserviço "store" guarda as informações de contas já realizadas.
Sendo mantidas em arquivo .json como "expressão:resultado".

O microsserviço "calculation" realiza a conta.
Ele retorna apenas um texto com o valor do resultado.

O microsserviço "response" envia o resultado para o "server", já formatado.
Pode ser formatado como: "A expressão {2 + 4} equivale a {6}."

## Implementação

Não usaremos um orquestrador, todos os microsserviços saberão exatamente o endereço do outro.
Não há necessidade para a existência de um banco de dados.

### Interface "server"

O "server" repassará para o microsserviço "response" a expressão que deseja ser calculada.
Esta expressão deve estar previamente simplificada e validada, o que pode ser feita pelo lado do cliente.

### Microsserviço "response"

Após o recebimento, este microsserviço encaminhará a requisição para o microsserviço "store".
Ao receber o resultado da expressão, ele responderá o "server" via json, contendo "{expressao: resultado}".

### Microsserviço "store"

Checando um arquivo .json interno, ele irá ver se já existe o resultado da expressão.
Caso existir, ele o retornará para o microsserviço "response".

Senão, ele enviará a expressão para o microsserviço "calculation", e aguardará o resultado.
Após a resposta, ele irá retornar e atualizar o seu arquivo .json.

### Microsserviço "calculation"

Após o recebimento da expressão, este microsserviço a calculará.
Calculando-a, ele retornará para o microsserviço "store" a resposta, como um simples texto.
