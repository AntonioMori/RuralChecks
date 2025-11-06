/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./ApiTypes";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTbAulas = /* GraphQL */ `subscription OnCreateTbAulas($filter: ModelSubscriptionTbAulasFilterInput) {
  onCreateTbAulas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTbAulasSubscriptionVariables,
  APITypes.OnCreateTbAulasSubscription
>;
export const onCreateTbJoinTurmasAlunos = /* GraphQL */ `subscription OnCreateTbJoinTurmasAlunos(
  $filter: ModelSubscriptionTbJoinTurmasAlunosFilterInput
) {
  onCreateTbJoinTurmasAlunos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTbJoinTurmasAlunosSubscriptionVariables,
  APITypes.OnCreateTbJoinTurmasAlunosSubscription
>;
export const onCreateTbPresenca = /* GraphQL */ `subscription OnCreateTbPresenca(
  $filter: ModelSubscriptionTbPresencaFilterInput
) {
  onCreateTbPresenca(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTbPresencaSubscriptionVariables,
  APITypes.OnCreateTbPresencaSubscription
>;
export const onCreateTbTurmas = /* GraphQL */ `subscription OnCreateTbTurmas($filter: ModelSubscriptionTbTurmasFilterInput) {
  onCreateTbTurmas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTbTurmasSubscriptionVariables,
  APITypes.OnCreateTbTurmasSubscription
>;
export const onCreateTbUsuarios = /* GraphQL */ `subscription OnCreateTbUsuarios(
  $filter: ModelSubscriptionTbUsuariosFilterInput
  $owner: String
) {
  onCreateTbUsuarios(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTbUsuariosSubscriptionVariables,
  APITypes.OnCreateTbUsuariosSubscription
>;
export const onDeleteTbAulas = /* GraphQL */ `subscription OnDeleteTbAulas($filter: ModelSubscriptionTbAulasFilterInput) {
  onDeleteTbAulas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTbAulasSubscriptionVariables,
  APITypes.OnDeleteTbAulasSubscription
>;
export const onDeleteTbJoinTurmasAlunos = /* GraphQL */ `subscription OnDeleteTbJoinTurmasAlunos(
  $filter: ModelSubscriptionTbJoinTurmasAlunosFilterInput
) {
  onDeleteTbJoinTurmasAlunos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTbJoinTurmasAlunosSubscriptionVariables,
  APITypes.OnDeleteTbJoinTurmasAlunosSubscription
>;
export const onDeleteTbPresenca = /* GraphQL */ `subscription OnDeleteTbPresenca(
  $filter: ModelSubscriptionTbPresencaFilterInput
) {
  onDeleteTbPresenca(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTbPresencaSubscriptionVariables,
  APITypes.OnDeleteTbPresencaSubscription
>;
export const onDeleteTbTurmas = /* GraphQL */ `subscription OnDeleteTbTurmas($filter: ModelSubscriptionTbTurmasFilterInput) {
  onDeleteTbTurmas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTbTurmasSubscriptionVariables,
  APITypes.OnDeleteTbTurmasSubscription
>;
export const onDeleteTbUsuarios = /* GraphQL */ `subscription OnDeleteTbUsuarios(
  $filter: ModelSubscriptionTbUsuariosFilterInput
  $owner: String
) {
  onDeleteTbUsuarios(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTbUsuariosSubscriptionVariables,
  APITypes.OnDeleteTbUsuariosSubscription
>;
export const onUpdateTbAulas = /* GraphQL */ `subscription OnUpdateTbAulas($filter: ModelSubscriptionTbAulasFilterInput) {
  onUpdateTbAulas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTbAulasSubscriptionVariables,
  APITypes.OnUpdateTbAulasSubscription
>;
export const onUpdateTbJoinTurmasAlunos = /* GraphQL */ `subscription OnUpdateTbJoinTurmasAlunos(
  $filter: ModelSubscriptionTbJoinTurmasAlunosFilterInput
) {
  onUpdateTbJoinTurmasAlunos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTbJoinTurmasAlunosSubscriptionVariables,
  APITypes.OnUpdateTbJoinTurmasAlunosSubscription
>;
export const onUpdateTbPresenca = /* GraphQL */ `subscription OnUpdateTbPresenca(
  $filter: ModelSubscriptionTbPresencaFilterInput
) {
  onUpdateTbPresenca(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTbPresencaSubscriptionVariables,
  APITypes.OnUpdateTbPresencaSubscription
>;
export const onUpdateTbTurmas = /* GraphQL */ `subscription OnUpdateTbTurmas($filter: ModelSubscriptionTbTurmasFilterInput) {
  onUpdateTbTurmas(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTbTurmasSubscriptionVariables,
  APITypes.OnUpdateTbTurmasSubscription
>;
export const onUpdateTbUsuarios = /* GraphQL */ `subscription OnUpdateTbUsuarios(
  $filter: ModelSubscriptionTbUsuariosFilterInput
  $owner: String
) {
  onUpdateTbUsuarios(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTbUsuariosSubscriptionVariables,
  APITypes.OnUpdateTbUsuariosSubscription
>;
