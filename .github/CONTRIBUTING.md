# Contribuindo para Syndic

Oi! Estamos felizes que você esteja interessado em contribuir para `Syndic`. Mas antes de enviar sua contribuição, certifique-se de reservar um momento e ler as diretrizes a seguir.

  - [1. Primeiros passos](#1-primeiros-passos)
  - [2. Diretrizes para relatórios de problemas](#2-issue-reporting-guidelines)
  - [3. Diretrizes de solicitação de pull](#3-pull-request-guidelines)
  - [4. Novos recursos e vulnerabilidades de segurança](#4-novos-recursos-e-vulnerabilidades-de-segurança)
  - [5. Configuração de desenvolvimento](#5-configuração-de-desenvolvimento)

## 1. Primeiros passos

Antes de você começar:
- Você leu o [Código de conduta de contribuição] (./CODE_OF_CONDUCT.md)?
- Você leu este documento na íntegra?
- Verifique se o seu ambiente atende aos requisitos mínimos estabelecidos.
- Verifique os [problemas existentes] (https://github.com/ebarrosjr/syndic/issues).

<br />

## 2. Diretrizes para relatórios de problemas

- A lista de problemas deste repositório é exclusivamente para relatórios de bugs, relatórios de documentos e solicitações de recursos. Os problemas não conformes serão encerrados imediatamente.

  - Para responder às suas perguntas, vamos criar um canal

- Tente pesquisar o seu problema, pode já ter sido respondido ou até corrigido no branch main (principal).
  
- Use apenas a quantidade mínima de código necessária para reproduzir o comportamento inesperado. Quanto mais precisamente você isolar o problema, mais rápido poderemos investigar.

- Verifique se o problema pode ser reproduzido com a versão estável mais recente do `Syndic` e indique a versão específica que você está usando.
  
- Problemas sem etapas de reprodução claras não serão submetidos à triagem. Se um problema com o rótulo "Needed info" não receber mais informações do autor do problema por mais de 7 dias, ele será encerrado.
  
- Se o seu problema foi resolvido, mas ainda está aberto, não hesite em fechá-lo. Caso você tenha encontrado uma solução sozinho, pode ser útil explicar como a corrigiu.

- Mais importante, pedimos sua paciência: a equipe deve equilibrar sua solicitação com muitas outras responsabilidades - corrigir outros bugs, responder a outras perguntas, novos recursos, nova documentação, conduzir a vida do canal, etc.

<br />

## 3. Diretrizes de solicitação de pull
- Se adicionar um novo recurso:
  - Forneça um motivo convincente para adicionar esse recurso. Idealmente, você deve abrir um problema de sugestão primeiro e receber luz verde antes de trabalhar nele.

- Se estiver corrigindo um bug:
  - Se você estiver resolvendo um problema especial, adicione `(corrigir: #xxxx [, # xxx])` (#xxxx é o id da issue) em seu título de RP para obter um registro de lançamento melhor, por exemplo, `correção: atualização de codificação / decodificação de entidades (correção # 3899)`.
  - Fornecer descrição detalhada do bug no PR.

<br />

## 4. Novos recursos e vulnerabilidades de segurança

Se você pretende propor um novo recurso, envie um problema para este repositório.

No caso de descoberta de uma vulnerabilidade de segurança em `Syndic`, ** NÃO ** divulgue publicamente como um problema, envie uma mensagem para o endereço de e-mail [ebarrosjr@gmail.com] (mailto://ebarrosjr@gmail.com). Todas as vulnerabilidades de segurança serão resolvidas o mais rápido possível.

<br />

## 5. Configuração de desenvolvimento

`Syndic` é desenvolvido com a versão Laravel 8.40. 

Consequentemente, para que possamos manter a compatibilidade entre os ambientes de desenvolvimento, vamos definir aqui os requisitos mínimos para a geração e hospedagem do projeto.

<hr  />

# Contributing to Syndic

Hi! We are happy that you are interested in contributing to `Syndic`. But before submitting your contribution, be sure to take a moment and read the following guidelines.

  - [1. Getting started](#1-getting-started)
  - [2. Issue Reporting Guidelines](#2-issue-reporting-guidelines)
  - [3. Pull Request Guidelines](#3-pull-request-guidelines)
  - [4. New Features and Security Vulnerabilities](#4-new-features-and-security-vulnerabilities)
  - [5. Development Setup](#5-development-setup)

## 1. Getting started

Before you begin:
- Did you read the [Contributing Code Conduct](./CODE_OF_CONDUCT.md)?
- Did you read this document in its entirety?
- Check if your environment meets the established minimum requirements.
- Check out the [existing issues](https://github.com/ebarrosjr/syndic/issues).

<br />

## 2. Issue Reporting Guidelines

- The issue list of this repo is exclusively for bug reports, docs reports and feature requests. Non-conforming issues will be closed immediately.

  - To answer your questions, we'll create a channel.

- Try to search for your issue, it may have already been answered or even fixed in the master branch (main).
  
- Use only the minimum amount of code necessary to reproduce the unexpected behavior. The more precisely you isolate the issue, the faster we can investigate.

- Check if the issue is reproducible with the latest stable version of `Syndic`, and please indicate the specific version you are using.
  
- Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 7 days, it will be closed.
  
- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

- Most importantly, we ask for your patience: the team must balance your request with many other responsibilities - fixing other bugs, answering other questions, new features, new documentation, conducting channel lives, etc.

<br />

## 3. Pull Request Guidelines
- If adding new feature:
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix: #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `fix: update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR.

<br />

## 4. New Features and Security Vulnerabilities

If you intend to propose a new feature, submit a issue to this repository.

In case of discovery of a security vulnerability in `Syndic`, **DO NOT** disclose publicly as an Issue, send a message to the email address [ebarrosjr@gmail.com](mailto://ebarrosjr@gmail.com). All security vulnerabilities will be resolved as soon as possible.

<br />

## 5. Development Setup

`Syndic` is developed with the Laravel 8.40 release.

Consequently, so that we can maintain compatibility between development environments, we will define here the minimum requirements for generating and hosting the project.