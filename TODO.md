# 0.0 Documentação

- [ ] Documento visão
- [ ] Diagrama de requisitos
- [ ] Dicionário de dados
- [ ] DER
- [ ] Diagrama de classes
- [ ] Wiki
- [ ] Manual do usuário
    - [ ] Síndico
    - [ ] Condômino

# 0.1 Layout base

- [ ] Login
- [ ] Menu
- [ ] Dashboard
- [ ] Formulários
- [ ] Tabelas
- [ ] Alertas

# 0.2 Banco de dados

- [ ] Criação das migrations
- [ ] Criação das tabelas

# 1.0 Cadastro de usuários

- [ ] Criar graus de hierarquia
- [ ] Criar usuário
- [ ] Editar usuário 
- [ ] Excluir usuário

## 1.1 Gerenciamento de equipes

- [ ] Criar a equipe
- [ ] Incluir os membros nas suas respectivas cadeias hierárquicas
- [ ] Definir salários
- [ ] Definir comissões
- [ ] Permissão de venda
- [ ] Permissão de aluguel
- [ ] Permissão de arrendamento
- [ ] Demissão
- [ ] Troca de equipe

# 2.0 Cadastro de clientes

- [ ] Criar tipos de clientes
- [ ] Criar usuário
- [ ] Editar usuário 
- [ ] Excluir usuário

# 3.0 Cadastro de condomínios

- [ ] Criar condomínio
- [ ] Cadastrar contas a pagar
- [ ] Gerenciar áreas comuns disponíveis a alugel e/ou utilização
    - [ ] Criar
        - [ ] Definir se aluga, apenas agenda uso ou se é livre para uso comun
    - [ ] Editar
    - [ ] Excluir
- [ ] Gerenciar atestados médicos
    - [ ] Criar
    - [ ] Editar
    - [ ] Excluir

# 4.0 Cadastro de imóveis

- [ ] Criar tipos de imóveis
- [ ] Criar objetivo do imóvel (vender, alugar, arrendar)
    - [ ] Em caso de aluguel e arrendamento, definir se aceita fiador, depósito e/ou seguro aluguel
- [ ] Criar o imóvel
- [ ] Editar o imóvel
- [ ] Excluir o imóvel
- [ ] Vincular ao condomínio
- [ ] Disponibilizar aos clientes
    - [ ] Integrar com portais

# 5.0 Negociações

## 5.1 Venda
- [ ] Registrar interesse de compra
- [ ] Agendar visita
- [ ] Receber sinal
- [ ] Lavrar contrato
- [ ] Fechar venda
    - [ ] Debitar taxas
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente
## 5.2 Aluguel
- [ ] Registrar interesse de aluguel
- [ ] Agendar visita
- [ ] Receber depósito
    - [ ] Debitar taxas
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente
- [ ] Vincular fiador
- [ ] Vincular seguro
- [ ] Lavrar contrato
- [ ] Fechar aluguel
- [ ] Gerar boletos contento taxas
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente
## 5.3 Arrendamento
- [ ] Registrar interesse de arrendamento
- [ ] Agendar visita
- [ ] Receber depósito
    - [ ] Debitar taxas
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente
- [ ] Vincular fiador
- [ ] Vincular seguro
- [ ] Lavrar contrato
- [ ] Fechar arrendamento
- [ ] Gerar boletos contento taxas
    - [ ] Emitir NF-e
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente

# 6.0 Serviços de condomínio

## 6.1 Cadastro de condôminos
- [ ] Níveis de condôminos
- [ ] Vincluar condômino à unidade
- [ ] Dependentes
- [ ] Visitantes autorizados
- [ ] Vincluar condômino à unidade
## 6.2 Gestão de garagem
- [ ] Cadastro de vagas
    - [ ] Vinculada à unidade
    - [ ] Aluguel independente
        - [ ] Vincular a condômino
## 6.3 Eleição de síndico
- [ ] Criar eleição
- [ ] Cadastrar candidatos
- [ ] Receber votos
- [ ] Consolidar votos
- [ ] Auditar eleição
- [ ] Cancelar eleição
- [ ] Divulgar resultado
- [ ] Empossar síndico
## 6.4 Gerenciar reuniões
- [ ] Criar reunião
- [ ] Convidar condôminos
    - [ ] E-mail
    - [ ] SMS
- [ ] Gerenciamento de sugestões/Demandas
    - [ ] Criar demanda (criação, manutenção preventiva, correção)
        - [ ] Definir orçamento
            - [ ] Especificar divisão
- [ ] Criar ATA de reunião
- [ ] Divulgar ATA de reunião
    - [ ] Receber OK dos condôminos presentes
    - [ ] Imprimir
    - [ ] Enviar por e-mail
- [ ] Finalizar reunião
## 6.5 Gerenciamento de funcionários
- [ ] Definir cargos
    - [ ] Definir salário base
- [ ] Definir hierarquias
    - [ ] Definir salário base
- [ ] Cadastro de funcionários
    - [ ] Definir salário
    - [ ] Vincular à equipe (contratação)
        - [ ] Gerar contrato de trabalho
    - [ ] Desvincular da equipe
    - [ ] Demitir funcionário
        - [ ] Executar recisão
- [ ] Atribuir equipe/funcionário à demanda
    - [ ] Definir responsável (gerente)
- [ ] Folha de pagamento
    - [ ] Descontos padrão
    - [ ] Descontos opcionais
    - [ ] Realizar pagamento
- [ ] Banco de talentos
## 6.6 Consolidar contas a pagar
- [ ] Emitir boletos
    - [ ] Emitir NF-e
    - [ ] Pagar comissões
    - [ ] Repassar valor ao cliente
- [ ] Publicar balanço financeiro