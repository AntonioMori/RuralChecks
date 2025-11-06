/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./ApiTypes";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTbAulas = /* GraphQL */ `query GetTbAulas($id: ID!) {
  getTbAulas(id: $id) {
    conteudo
    createdAt
    data
    id
    materialUrl
    numeroAula
    presencas {
      items {
        alunoEmail
        aulaId
        createdAt
        id
        justificativa
        owner
        presente
        statusJustificativa
        tipo
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    qrcode
    status
    turma {
      alunos {
        nextToken
        __typename
      }
      aulas {
        nextToken
        __typename
      }
      createdAt
      descricao
      id
      nome
      periodo
      professor {
        cadastro_realizado
        cargo
        conta_ativa
        createdAt
        email
        nome
        owner
        updatedAt
        __typename
      }
      professorEmail
      turma_ativa
      updatedAt
      __typename
    }
    turmaId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTbAulasQueryVariables,
  APITypes.GetTbAulasQuery
>;
export const getTbJoinTurmasAlunos = /* GraphQL */ `query GetTbJoinTurmasAlunos($id: ID!) {
  getTbJoinTurmasAlunos(id: $id) {
    aluno {
      cadastro_realizado
      cargo
      conta_ativa
      createdAt
      email
      nome
      owner
      presencas {
        nextToken
        __typename
      }
      turmasComoAluno {
        nextToken
        __typename
      }
      turmasComoProfessor {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    alunoEmail
    createdAt
    id
    turma {
      alunos {
        nextToken
        __typename
      }
      aulas {
        nextToken
        __typename
      }
      createdAt
      descricao
      id
      nome
      periodo
      professor {
        cadastro_realizado
        cargo
        conta_ativa
        createdAt
        email
        nome
        owner
        updatedAt
        __typename
      }
      professorEmail
      turma_ativa
      updatedAt
      __typename
    }
    turmaId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTbJoinTurmasAlunosQueryVariables,
  APITypes.GetTbJoinTurmasAlunosQuery
>;
export const getTbPresenca = /* GraphQL */ `query GetTbPresenca($id: ID!) {
  getTbPresenca(id: $id) {
    aluno {
      cadastro_realizado
      cargo
      conta_ativa
      createdAt
      email
      nome
      owner
      presencas {
        nextToken
        __typename
      }
      turmasComoAluno {
        nextToken
        __typename
      }
      turmasComoProfessor {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    alunoEmail
    aula {
      conteudo
      createdAt
      data
      id
      materialUrl
      numeroAula
      presencas {
        nextToken
        __typename
      }
      qrcode
      status
      turma {
        createdAt
        descricao
        id
        nome
        periodo
        professorEmail
        turma_ativa
        updatedAt
        __typename
      }
      turmaId
      updatedAt
      __typename
    }
    aulaId
    createdAt
    id
    justificativa
    owner
    presente
    statusJustificativa
    tipo
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTbPresencaQueryVariables,
  APITypes.GetTbPresencaQuery
>;
export const getTbTurmas = /* GraphQL */ `query GetTbTurmas($id: ID!) {
  getTbTurmas(id: $id) {
    alunos {
      items {
        alunoEmail
        createdAt
        id
        turmaId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    aulas {
      items {
        conteudo
        createdAt
        data
        id
        materialUrl
        numeroAula
        qrcode
        status
        turmaId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    descricao
    id
    nome
    periodo
    professor {
      cadastro_realizado
      cargo
      conta_ativa
      createdAt
      email
      nome
      owner
      presencas {
        nextToken
        __typename
      }
      turmasComoAluno {
        nextToken
        __typename
      }
      turmasComoProfessor {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    professorEmail
    turma_ativa
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTbTurmasQueryVariables,
  APITypes.GetTbTurmasQuery
>;
export const getTbUsuarios = /* GraphQL */ `query GetTbUsuarios($email: String!) {
  getTbUsuarios(email: $email) {
    cadastro_realizado
    cargo
    conta_ativa
    createdAt
    email
    nome
    owner
    presencas {
      items {
        alunoEmail
        aulaId
        createdAt
        id
        justificativa
        owner
        presente
        statusJustificativa
        tipo
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    turmasComoAluno {
      items {
        alunoEmail
        createdAt
        id
        turmaId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    turmasComoProfessor {
      items {
        createdAt
        descricao
        id
        nome
        periodo
        professorEmail
        turma_ativa
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTbUsuariosQueryVariables,
  APITypes.GetTbUsuariosQuery
>;
export const listTbAulas = /* GraphQL */ `query ListTbAulas(
  $filter: ModelTbAulasFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTbAulas(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      conteudo
      createdAt
      data
      id
      materialUrl
      numeroAula
      presencas {
        nextToken
        __typename
      }
      qrcode
      status
      turma {
        createdAt
        descricao
        id
        nome
        periodo
        professorEmail
        turma_ativa
        updatedAt
        __typename
      }
      turmaId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTbAulasQueryVariables,
  APITypes.ListTbAulasQuery
>;
export const listTbJoinTurmasAlunos = /* GraphQL */ `query ListTbJoinTurmasAlunos(
  $filter: ModelTbJoinTurmasAlunosFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTbJoinTurmasAlunos(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      aluno {
        cadastro_realizado
        cargo
        conta_ativa
        createdAt
        email
        nome
        owner
        updatedAt
        __typename
      }
      alunoEmail
      createdAt
      id
      turma {
        createdAt
        descricao
        id
        nome
        periodo
        professorEmail
        turma_ativa
        updatedAt
        __typename
      }
      turmaId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTbJoinTurmasAlunosQueryVariables,
  APITypes.ListTbJoinTurmasAlunosQuery
>;
export const listTbPresencas = /* GraphQL */ `query ListTbPresencas(
  $filter: ModelTbPresencaFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTbPresencas(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      aluno {
        cadastro_realizado
        cargo
        conta_ativa
        createdAt
        email
        nome
        owner
        updatedAt
        __typename
      }
      alunoEmail
      aula {
        conteudo
        createdAt
        data
        id
        materialUrl
        numeroAula
        qrcode
        status
        turmaId
        updatedAt
        __typename
      }
      aulaId
      createdAt
      id
      justificativa
      owner
      presente
      statusJustificativa
      tipo
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTbPresencasQueryVariables,
  APITypes.ListTbPresencasQuery
>;
export const listTbTurmas = /* GraphQL */ `query ListTbTurmas(
  $filter: ModelTbTurmasFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTbTurmas(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      alunos {
        nextToken
        __typename
      }
      aulas {
        nextToken
        __typename
      }
      createdAt
      descricao
      id
      nome
      periodo
      professor {
        cadastro_realizado
        cargo
        conta_ativa
        createdAt
        email
        nome
        owner
        updatedAt
        __typename
      }
      professorEmail
      turma_ativa
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTbTurmasQueryVariables,
  APITypes.ListTbTurmasQuery
>;
export const listTbUsuarios = /* GraphQL */ `query ListTbUsuarios(
  $email: String
  $filter: ModelTbUsuariosFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTbUsuarios(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cadastro_realizado
      cargo
      conta_ativa
      createdAt
      email
      nome
      owner
      presencas {
        nextToken
        __typename
      }
      turmasComoAluno {
        nextToken
        __typename
      }
      turmasComoProfessor {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTbUsuariosQueryVariables,
  APITypes.ListTbUsuariosQuery
>;
