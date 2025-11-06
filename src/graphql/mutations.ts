/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTbAulas = /* GraphQL */ `mutation CreateTbAulas(
  $condition: ModelTbAulasConditionInput
  $input: CreateTbAulasInput!
) {
  createTbAulas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTbAulasMutationVariables,
  APITypes.CreateTbAulasMutation
>;
export const createTbJoinTurmasAlunos = /* GraphQL */ `mutation CreateTbJoinTurmasAlunos(
  $condition: ModelTbJoinTurmasAlunosConditionInput
  $input: CreateTbJoinTurmasAlunosInput!
) {
  createTbJoinTurmasAlunos(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTbJoinTurmasAlunosMutationVariables,
  APITypes.CreateTbJoinTurmasAlunosMutation
>;
export const createTbPresenca = /* GraphQL */ `mutation CreateTbPresenca(
  $condition: ModelTbPresencaConditionInput
  $input: CreateTbPresencaInput!
) {
  createTbPresenca(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTbPresencaMutationVariables,
  APITypes.CreateTbPresencaMutation
>;
export const createTbTurmas = /* GraphQL */ `mutation CreateTbTurmas(
  $condition: ModelTbTurmasConditionInput
  $input: CreateTbTurmasInput!
) {
  createTbTurmas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTbTurmasMutationVariables,
  APITypes.CreateTbTurmasMutation
>;
export const createTbUsuarios = /* GraphQL */ `mutation CreateTbUsuarios(
  $condition: ModelTbUsuariosConditionInput
  $input: CreateTbUsuariosInput!
) {
  createTbUsuarios(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTbUsuariosMutationVariables,
  APITypes.CreateTbUsuariosMutation
>;
export const deleteTbAulas = /* GraphQL */ `mutation DeleteTbAulas(
  $condition: ModelTbAulasConditionInput
  $input: DeleteTbAulasInput!
) {
  deleteTbAulas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTbAulasMutationVariables,
  APITypes.DeleteTbAulasMutation
>;
export const deleteTbJoinTurmasAlunos = /* GraphQL */ `mutation DeleteTbJoinTurmasAlunos(
  $condition: ModelTbJoinTurmasAlunosConditionInput
  $input: DeleteTbJoinTurmasAlunosInput!
) {
  deleteTbJoinTurmasAlunos(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTbJoinTurmasAlunosMutationVariables,
  APITypes.DeleteTbJoinTurmasAlunosMutation
>;
export const deleteTbPresenca = /* GraphQL */ `mutation DeleteTbPresenca(
  $condition: ModelTbPresencaConditionInput
  $input: DeleteTbPresencaInput!
) {
  deleteTbPresenca(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTbPresencaMutationVariables,
  APITypes.DeleteTbPresencaMutation
>;
export const deleteTbTurmas = /* GraphQL */ `mutation DeleteTbTurmas(
  $condition: ModelTbTurmasConditionInput
  $input: DeleteTbTurmasInput!
) {
  deleteTbTurmas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTbTurmasMutationVariables,
  APITypes.DeleteTbTurmasMutation
>;
export const deleteTbUsuarios = /* GraphQL */ `mutation DeleteTbUsuarios(
  $condition: ModelTbUsuariosConditionInput
  $input: DeleteTbUsuariosInput!
) {
  deleteTbUsuarios(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTbUsuariosMutationVariables,
  APITypes.DeleteTbUsuariosMutation
>;
export const gerarQRCodeAula = /* GraphQL */ `mutation GerarQRCodeAula($aulaId: String!) {
  gerarQRCodeAula(aulaId: $aulaId)
}
` as GeneratedMutation<
  APITypes.GerarQRCodeAulaMutationVariables,
  APITypes.GerarQRCodeAulaMutation
>;
export const registrarPresencaQRCode = /* GraphQL */ `mutation RegistrarPresencaQRCode($qrcode: String!) {
  registrarPresencaQRCode(qrcode: $qrcode) {
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
` as GeneratedMutation<
  APITypes.RegistrarPresencaQRCodeMutationVariables,
  APITypes.RegistrarPresencaQRCodeMutation
>;
export const updateTbAulas = /* GraphQL */ `mutation UpdateTbAulas(
  $condition: ModelTbAulasConditionInput
  $input: UpdateTbAulasInput!
) {
  updateTbAulas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTbAulasMutationVariables,
  APITypes.UpdateTbAulasMutation
>;
export const updateTbJoinTurmasAlunos = /* GraphQL */ `mutation UpdateTbJoinTurmasAlunos(
  $condition: ModelTbJoinTurmasAlunosConditionInput
  $input: UpdateTbJoinTurmasAlunosInput!
) {
  updateTbJoinTurmasAlunos(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTbJoinTurmasAlunosMutationVariables,
  APITypes.UpdateTbJoinTurmasAlunosMutation
>;
export const updateTbPresenca = /* GraphQL */ `mutation UpdateTbPresenca(
  $condition: ModelTbPresencaConditionInput
  $input: UpdateTbPresencaInput!
) {
  updateTbPresenca(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTbPresencaMutationVariables,
  APITypes.UpdateTbPresencaMutation
>;
export const updateTbTurmas = /* GraphQL */ `mutation UpdateTbTurmas(
  $condition: ModelTbTurmasConditionInput
  $input: UpdateTbTurmasInput!
) {
  updateTbTurmas(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTbTurmasMutationVariables,
  APITypes.UpdateTbTurmasMutation
>;
export const updateTbUsuarios = /* GraphQL */ `mutation UpdateTbUsuarios(
  $condition: ModelTbUsuariosConditionInput
  $input: UpdateTbUsuariosInput!
) {
  updateTbUsuarios(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTbUsuariosMutationVariables,
  APITypes.UpdateTbUsuariosMutation
>;
