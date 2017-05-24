## Gerenciador de Medida Protetivas

# Documento de Requisitos



## A – VISÃO GERAL DO SISTEMA

O sistema para Policia Militar consiste em desenvolver um gerenciador de medidas protetivas, expedida pela Justiça. Cada medida tem uma ou mais vitimas e um ou mais Reus, contendo data de emissão, objservação e um valor em dias que representa quantos dias esta em vigor essa medida. Com a medida já em mão deve-se cadastrala colocando esses dados para  possível consulta e impressão de uma versão previamente digitalizada . O sistema deve ainda emitir diversos tipos de relatórios e consultas, possibilitando um melhor gerenciamento do policiamento ostencivo economisando recursos para melhores aplicações.

## B – REQUISITOS FUNCIONAIS

### B1 – Lançamentos diversos

1. O sistema deve permitir a inclusão, alteração e remoção de medidas protetivas, contendo os seguintes atributos: nome, endereço, cidade onde mora, estado, país, telefone, documento de identificação (RG ou CPF para brasileiros e  passaporte para estrangeiros), data de nascimento e nome dos pais(“se constar na medida”) de ambas as vitimas e acusados .
### B2 – Impressão de diversos tipos de relatórios e consultas

2. O sistema deve criar relatórios e graficos de bairro, cidades, vitimas e acusados com maiores indices de medidas cada relatório deve ser individual para cada uma das opções.

3. O sistema deve permitir a consulta a medida por nome da vitima, nome do acusado, bairro da vitima juntamente da  impressão do documento original.

### B3 – Usuarios diferentes 

4. O sistema deve possuir 2 niveis de usuarios com privilegios diferentes no sistma: gerenciador e usuario, o gerenciador lanca os dados, o usuario apenas consulta e imprimi. 

5. O sistema deve estar 24 horas nos 7 dias da semenana para consulta e impressão de medida. 

## C – REQUISITOS NÃO FUNCIONAIS

### C1. Confiabilidade

6. O sistema deve ter capacidade para recuperar os dados perdidos da última operação que realizou em caso de falha.

7. O sistema deve fornecer facilidades para a realização de backups dos arquivos do sistema.

8. O sistema deve possuir senhas de acesso e identificação para diferentes tipos de usuários: usuario e gerenciador

### C2. Eficiência

9. O sistema deve responder a consultas on-line em menos de 5 segundos.

10. O sistema deve iniciar a impressão de relatórios solicitados dentro de no máximo 20 segundos após sua requisição.
### C3. Portabilidade

11. O sistema deve ser web e adaptavel para dispositivos moveis.

## Glossário

* Medida Protetiva
  - Uma medida protetiva e um documento expedido pelo juiz com poder de proteção para a vitima
* Backup
  - Cópia de segurança ou cópia de salvaguarda
