# Uma Tecnologia em Camadas
 * É o "instrumento apropriado" Dão suporte automazado ou semi-automatizado para o processo e aos métodos
## Fasés Genericas de Desenvolvimento de Software
 * Definição -> Construção -> Software Produto -> Manutenção

   ### Definicão - o que
   
      * Análise de Sistema
      * Planejamento do Projeto
      * Análise de Requisitos
      * Informações a serem processadas

        - funções e desempenho desejados

        - interfaces que devem ser estabelecidas

        - restrições do projeto
     
        - critérios de validação requeridos    
    
   ### Construção - Como 
        * Projeto(Design)
        * Codificação
        * Teste
        * Informações a serem processadas
         
          * como devem ser projetadas a estrutura de dados e a arquitetura do software

          * como os procedimentos devem ser implementados

          * como o projeto deve ser traduzido para uma linguagem de programação

          * como o teste deve ser executado.    
   
   ### Manutenção - Mudanças
        * Entendimento 
        * Modificação
        * Revaliação
        * Informações a serem processadas

            * correções decorrentes de erros –  manutenção corretiva

            * adaptações requeridas decorrentes de alterações no meio ambiente – manutenção adaptativa 

            * melhoramentos relacionados a novas funções desejadas pelo usuário – manutenção perfectiva.

            * Melhorias na arquitetura do software e na legibilidade do código fonte sem alterar a funcionalidade – manutenção preventiva
 ## Espera-se do Processo de Software
    * Controlado 
    * Medido
    * Gerenciado
    * Eficiente 
    * Definido  

  ## Existe diversos modelos de Software
   Existem varios modelos entre eles:
   ### Modelo Sequencial Linear (Cascata)
        Engenaharia de Sistemas -> Análise de Requisitos -> Design -> Codificação -> Testes -> Manuteção
       
       * Engenharia de Sistemas 
          - envolve a coleta de requisitos de em nível do sistema, com análise de alto nível
         
       * Análise de Requsitos
          - o processo de coleta dos requisitos é intensificado e concentrado especificamente no software
          - deve-se ter compreender o domínio da informação, a função desempenho e interfaces exigidas.
          - os requisitos são documentos e revistos com o cliente
          - Modelo mais antigo (década 70)
          - requer uma abordagem sistemática, sequencial ao desenvolvimento de software
          - o resultado de uma fase se constitui na entrada da outra.
       * Design
          - Tradução dos requistos do sofware para um cojunto de representações que    podem ser avaliadas quando à qualidade, antes que a codificação se inicie
                 - Estrutura de Dados
                 - Arquitetura de Sofware
                 - Detalhes Procedimentais e Caracterização de Interfaces
       * Codificação
          - Tradução das representações do projeto para uma linguagem "Artificial" resultando em instruções executávies pelo computador
       
       * Testes 
          - nos aspectos lógicos internos do software -> garatia que "todas" as instruções tenham sido testadas
          - nos aspectos funcionais externos, para descobir erros e garantir que a enrada definida produza resultados que concordem com os esperados 
       * Menutenção
         - provavelente o software deveŕa sofrer mudanças depois que for entrege ao cliente
         - causas das mudanças: erros, adaptação do software para acomodar mudançãs em seu ambiente externo exigência do cliente para acréscimos funcionais e de desempenho
        * Problemas com o modelo Cascata
            - Projetos reias raramente seguem o fluxo sequencial que o modelo propõe
            - Logo no início é difíficl estabelecere explicitamente todos os requisitos no começo dos projetos sempre existe uma incereteza natural
            - o cliente deve ter paciência uma versão executáve do software só fica disponivel em uma etapa avançada do desenvolvimento.
        * Aplicabilidade 
             - Requisitos bem conhecidos
             - Requistos estáveis
             - Baixa probabilidade de mudanças em tecnologia
      Embora o Modelo Cascata tenha fragilidades e melhor que não ter um modolo(abordagem casual ao desenvolvimento).
        * Questão ciclo de vida em cascata:
         - A) enfatiza a realização seuqncial das atividades do desenvolvimento de um produto de sotware
         - B) enfatiza a cmunicação estreita com cliente durante o desenvolvimento do produto de software.
         - C) envolve a ideia principal de cria rum protótipo executável e, por meio de transformações sucessivavs, chgar ao sistema completamente implementado
         - D) envolve a análise dos riscos envolvido no desenvolvimento dos requisitos identificados para produtos de software 
         - E) recomenda a geração de versões  incompletas do sistema, que podem ser passads para o usuário final o que permite a retroalimentação do processo de desenvolvimento
   ### Modelo Paradigma de Prototipação
        * Objetivo : Entender os requisitos do usuário.
        * possibilidade que o desenvolvedor crie um modelo (protótipo ) do software que deve ser construído.
        * apropriado quando o cliente definiu um conjunto de objetivos gerais apra o software, mas não identificou detalhamente esses requisitos
        Obter Requisitos -> Elabora Projeto Rápido -> Construir Protótipo -> Avaliar Protótipo -> Refinamento do Protótipo 
        ouça o cliente -> construa/revise protótipo -> teste do protótipo pelo cliente
        * Ober Requsitos
            - Definem os objetos gerais
            - Identificam quais requsitos são conhecidos
            - Identificam as áreas que nocessitam de definições adicionais.
        * Elaborar Projeto Rápido
            - Representação dos aspectos do software que são visíveis ao usuário.
            - abordagens de entra e saida
        * Construir Protótipo 
            - Implementação rápida do projeto
        * Avaliar Protótipo
            - Cliene e desenvolvedor avaliam o protótipo
        * Refinamento do Protótipo
            - Cliente e desenvolvedor refinam os requisitos do software a ser desenvolvido
        * Construção do produto
            - Identificadors os requisitos, o protótipo deve ser descartado e a versão de produção deve ser construida considerando os critérios de qualidade
        * Dificuldades:
            - cliente não sabe que o software que ele vê, não considerou durante o desenvolvimento, a qualidade global e a manitenibilidade a longo prazo. Não aceita bem a ideia de "jogar fora " oque foi feito. 
            - desenvolvedor frequentemente desenvove o protótipo de forma comprometida (utilizando oque está disponível). Depois de um tempo ele se familiariza com essas escolhas, e pode ser que esqueça que elas não são apropraiadas para o produto final.

   ### Modelo Incremental
        * Combina Elementos do modelo cascata (aplicando repetidamente) com a filosofia iterativa da protótipação.
        * Usado quando é difici estabelecer a priori uma espeficicação detalhada dos requisitos.
        * Objetivo : trabalhar junto do usuário a fim de descobrir sues requisitos, de maneira incremental, até que o produto final seja obtido.
      * Fluxo Grama
         Definição de Requisitos Inicial -> Atribuição de Requisitos à Incrementos -> Design da Arquitetura do Sistema -> Desenvolvimento do Incremento -> Validação do Incremento -> Integracao do Incremento -> Validação do Sistema(podendo voltar para desenvolvimento do Incremento) -> Sistema Final 
         - Análise  -> Design -> Codificação -> Testes

       * Principais Caracteristicas 
            - Há Diversos Incrementos
            - Principais necessidades são atentidas primeiro
            - Requisitos não mudam dentro de um incremento
        * Vantagens 
            - Os usuários iniciam o uso do sistema mais cedo
            - Os incrementos iniciais podem servir de protótipos não descartáveis
            - Há menores riscos de falha no projeto
            - Diferente do paradigma da protótipação descartável, tem o objetivo de apresentar um produto operacional a cada incremento
            - Os testes podem ser mais efetivos(melhor testar partes pequenas doque tudo no final)
            - É melhor que a abordagem cascata para a maioria dos sistemas de negócio, e-commerce e sistemas pessiais.
            - Custo de acomodar mudanças nos requisitos do cliente é reduzido.
            - É mais fácil obter feedback dos clientes.
            - É possível obeter implementação e entrega rápida de software útil ao cliente.
        * Desvantagens
            - Os incrementos deveriam ser pequenos
            - A alocação de requisitos a incrementos de tamanho correto pode ser difícil.
        * Aplicabilidade 
            - Requisitos não muito bem conhecidos( todavia o escopo deve ser bem conhecido)
            - Requisitos não tão estávies.     
   ### Modelo Espiral
        * Principais Caracteristicas
            - Cada iteração da espiral representa uma fase do processo de software
            - A Primeira pode tratar a viabilidade do sistema; a segunda sobre requesitos; a terceira sobre design....
            - Não já fases fixas -> decide-se no planejamento.
            - Diferencial em relação a outros modelos (foco em riscos)
        * Fluxo Grama
            Determinar objetivos, alternativas e restrições -> avaliar alternativas, identificar, resolver riscos -> desenvolver, verificar, produto de próximo nível -> Planejar prómxia fase.
            - Engloba as melhores características do modelo Cascata e da Prototipação, adicionando um novo elemento: a Análise de Risco
        * Riscos
            - é um problema em potencial pode ou não acontecer
            - Exemplos: 
                - Dificuldade de comunicação devido a dsitrubição geográfica da equipe.
                - Indisponibilidade de usuários das áreas de negócio para levantamento de informações durante a requeistos.
            - Os riscos devem ser:
                - Identificados
                - Estimados
                - monitorados
                - mitigados
                - contingenciados
            Sendo assim capacita o desenvolvedor e o cliente a entender e reagir aos riscos em cada etapa evolutiva.
        * Aplicabilidade
            - recomendável para projetos complexos, com alto risco e requisitos pouco conhecidos
            - Adequado para a área de jogos pois, em geral:
                - os requistos não são conhecidos sem que protótipos tenham sido testados e os riscos se apresentam altos tanto do pronto de vista tenológico quanto do ponto de vista de usabilidade do sistema.


   ### Técnicas de Quarta Geração 
     Engloba um conjunto de ferramentas de software que possibilita que:
            - o sistema seja especificado em uma linguagem de alto nível;
            - o código fonte seja gerado automaticamente a partir dessas especificações
        - O Ambiente de desenvolvimento de software que sustenta o ciclo de vida de 4ª geração inclui as ferramentas:
            - linguagens para consulta de banco de dados
            - geração de relatórios, planilhas e manipulação de dados.
            - interação e definição de telas
            - geração de código
            - capacidade gráfica de alto nível
            - criação automática de páginas web

        Obtenção dos requisitos -> Estratégia do Design -> Implementação usando 4GL -> Testes

 ## 