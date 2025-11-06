/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelTbAulasConditionInput = {
  and?: Array< ModelTbAulasConditionInput | null > | null,
  conteudo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  data?: ModelStringInput | null,
  materialUrl?: ModelStringInput | null,
  not?: ModelTbAulasConditionInput | null,
  numeroAula?: ModelIntInput | null,
  or?: Array< ModelTbAulasConditionInput | null > | null,
  qrcode?: ModelStringInput | null,
  status?: ModelTbAulasStatusInput | null,
  turmaId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelTbAulasStatusInput = {
  eq?: TbAulasStatus | null,
  ne?: TbAulasStatus | null,
};

export enum TbAulasStatus {
  CANCELADA = "CANCELADA",
  REALIZADA = "REALIZADA",
  REMARCADA = "REMARCADA",
}


export type CreateTbAulasInput = {
  conteudo?: string | null,
  data: string,
  id?: string | null,
  materialUrl?: Array< string | null > | null,
  numeroAula?: number | null,
  qrcode?: string | null,
  status?: TbAulasStatus | null,
  turmaId: string,
};

export type tbAulas = {
  __typename: "tbAulas",
  conteudo?: string | null,
  createdAt: string,
  data: string,
  id: string,
  materialUrl?: Array< string | null > | null,
  numeroAula?: number | null,
  presencas?: ModeltbPresencaConnection | null,
  qrcode?: string | null,
  status?: TbAulasStatus | null,
  turma?: tbTurmas | null,
  turmaId: string,
  updatedAt: string,
};

export type ModeltbPresencaConnection = {
  __typename: "ModeltbPresencaConnection",
  items:  Array<tbPresenca | null >,
  nextToken?: string | null,
};

export type tbPresenca = {
  __typename: "tbPresenca",
  aluno?: tbUsuarios | null,
  alunoEmail: string,
  aula?: tbAulas | null,
  aulaId: string,
  createdAt: string,
  id: string,
  justificativa?: string | null,
  owner?: string | null,
  presente: boolean,
  statusJustificativa?: TbPresencaStatusJustificativa | null,
  tipo?: TbPresencaTipo | null,
  updatedAt: string,
};

export type tbUsuarios = {
  __typename: "tbUsuarios",
  cadastro_realizado?: boolean | null,
  cargo?: TbUsuariosCargo | null,
  conta_ativa?: boolean | null,
  createdAt: string,
  email: string,
  nome?: string | null,
  owner?: string | null,
  presencas?: ModeltbPresencaConnection | null,
  turmasComoAluno?: ModeltbJoinTurmasAlunosConnection | null,
  turmasComoProfessor?: ModeltbTurmasConnection | null,
  updatedAt: string,
};

export enum TbUsuariosCargo {
  ADMIN = "ADMIN",
  ALUNO = "ALUNO",
  PROFESSOR = "PROFESSOR",
}


export type ModeltbJoinTurmasAlunosConnection = {
  __typename: "ModeltbJoinTurmasAlunosConnection",
  items:  Array<tbJoinTurmasAlunos | null >,
  nextToken?: string | null,
};

export type tbJoinTurmasAlunos = {
  __typename: "tbJoinTurmasAlunos",
  aluno?: tbUsuarios | null,
  alunoEmail: string,
  createdAt: string,
  id: string,
  turma?: tbTurmas | null,
  turmaId: string,
  updatedAt: string,
};

export type tbTurmas = {
  __typename: "tbTurmas",
  alunos?: ModeltbJoinTurmasAlunosConnection | null,
  aulas?: ModeltbAulasConnection | null,
  createdAt: string,
  descricao?: string | null,
  id: string,
  nome: string,
  periodo: string,
  professor?: tbUsuarios | null,
  professorEmail: string,
  turma_ativa?: boolean | null,
  updatedAt: string,
};

export type ModeltbAulasConnection = {
  __typename: "ModeltbAulasConnection",
  items:  Array<tbAulas | null >,
  nextToken?: string | null,
};

export type ModeltbTurmasConnection = {
  __typename: "ModeltbTurmasConnection",
  items:  Array<tbTurmas | null >,
  nextToken?: string | null,
};

export enum TbPresencaStatusJustificativa {
  APROVADA = "APROVADA",
  PENDENTE = "PENDENTE",
  REJEITADA = "REJEITADA",
}


export enum TbPresencaTipo {
  MANUAL = "MANUAL",
  QR_CODE = "QR_CODE",
}


export type ModelTbJoinTurmasAlunosConditionInput = {
  alunoEmail?: ModelStringInput | null,
  and?: Array< ModelTbJoinTurmasAlunosConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTbJoinTurmasAlunosConditionInput | null,
  or?: Array< ModelTbJoinTurmasAlunosConditionInput | null > | null,
  turmaId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTbJoinTurmasAlunosInput = {
  alunoEmail: string,
  id?: string | null,
  turmaId: string,
};

export type ModelTbPresencaConditionInput = {
  alunoEmail?: ModelStringInput | null,
  and?: Array< ModelTbPresencaConditionInput | null > | null,
  aulaId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  justificativa?: ModelStringInput | null,
  not?: ModelTbPresencaConditionInput | null,
  or?: Array< ModelTbPresencaConditionInput | null > | null,
  owner?: ModelStringInput | null,
  presente?: ModelBooleanInput | null,
  statusJustificativa?: ModelTbPresencaStatusJustificativaInput | null,
  tipo?: ModelTbPresencaTipoInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelTbPresencaStatusJustificativaInput = {
  eq?: TbPresencaStatusJustificativa | null,
  ne?: TbPresencaStatusJustificativa | null,
};

export type ModelTbPresencaTipoInput = {
  eq?: TbPresencaTipo | null,
  ne?: TbPresencaTipo | null,
};

export type CreateTbPresencaInput = {
  alunoEmail: string,
  aulaId: string,
  id?: string | null,
  justificativa?: string | null,
  presente: boolean,
  statusJustificativa?: TbPresencaStatusJustificativa | null,
  tipo?: TbPresencaTipo | null,
};

export type ModelTbTurmasConditionInput = {
  and?: Array< ModelTbTurmasConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  descricao?: ModelStringInput | null,
  nome?: ModelStringInput | null,
  not?: ModelTbTurmasConditionInput | null,
  or?: Array< ModelTbTurmasConditionInput | null > | null,
  periodo?: ModelStringInput | null,
  professorEmail?: ModelStringInput | null,
  turma_ativa?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTbTurmasInput = {
  descricao?: string | null,
  id?: string | null,
  nome: string,
  periodo: string,
  professorEmail: string,
  turma_ativa?: boolean | null,
};

export type ModelTbUsuariosConditionInput = {
  and?: Array< ModelTbUsuariosConditionInput | null > | null,
  cadastro_realizado?: ModelBooleanInput | null,
  cargo?: ModelTbUsuariosCargoInput | null,
  conta_ativa?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  nome?: ModelStringInput | null,
  not?: ModelTbUsuariosConditionInput | null,
  or?: Array< ModelTbUsuariosConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTbUsuariosCargoInput = {
  eq?: TbUsuariosCargo | null,
  ne?: TbUsuariosCargo | null,
};

export type CreateTbUsuariosInput = {
  cadastro_realizado?: boolean | null,
  cargo?: TbUsuariosCargo | null,
  conta_ativa?: boolean | null,
  email: string,
  nome?: string | null,
};

export type DeleteTbAulasInput = {
  id: string,
};

export type DeleteTbJoinTurmasAlunosInput = {
  id: string,
};

export type DeleteTbPresencaInput = {
  id: string,
};

export type DeleteTbTurmasInput = {
  id: string,
};

export type DeleteTbUsuariosInput = {
  email: string,
};

export type UpdateTbAulasInput = {
  conteudo?: string | null,
  data?: string | null,
  id: string,
  materialUrl?: Array< string | null > | null,
  numeroAula?: number | null,
  qrcode?: string | null,
  status?: TbAulasStatus | null,
  turmaId?: string | null,
};

export type UpdateTbJoinTurmasAlunosInput = {
  alunoEmail?: string | null,
  id: string,
  turmaId?: string | null,
};

export type UpdateTbPresencaInput = {
  alunoEmail?: string | null,
  aulaId?: string | null,
  id: string,
  justificativa?: string | null,
  presente?: boolean | null,
  statusJustificativa?: TbPresencaStatusJustificativa | null,
  tipo?: TbPresencaTipo | null,
};

export type UpdateTbTurmasInput = {
  descricao?: string | null,
  id: string,
  nome?: string | null,
  periodo?: string | null,
  professorEmail?: string | null,
  turma_ativa?: boolean | null,
};

export type UpdateTbUsuariosInput = {
  cadastro_realizado?: boolean | null,
  cargo?: TbUsuariosCargo | null,
  conta_ativa?: boolean | null,
  email: string,
  nome?: string | null,
};

export type ModelTbAulasFilterInput = {
  and?: Array< ModelTbAulasFilterInput | null > | null,
  conteudo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  data?: ModelStringInput | null,
  id?: ModelIDInput | null,
  materialUrl?: ModelStringInput | null,
  not?: ModelTbAulasFilterInput | null,
  numeroAula?: ModelIntInput | null,
  or?: Array< ModelTbAulasFilterInput | null > | null,
  qrcode?: ModelStringInput | null,
  status?: ModelTbAulasStatusInput | null,
  turmaId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTbAulasConnection = {
  __typename: "ModelTbAulasConnection",
  items:  Array<tbAulas | null >,
  nextToken?: string | null,
};

export type ModelTbJoinTurmasAlunosFilterInput = {
  alunoEmail?: ModelStringInput | null,
  and?: Array< ModelTbJoinTurmasAlunosFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTbJoinTurmasAlunosFilterInput | null,
  or?: Array< ModelTbJoinTurmasAlunosFilterInput | null > | null,
  turmaId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTbJoinTurmasAlunosConnection = {
  __typename: "ModelTbJoinTurmasAlunosConnection",
  items:  Array<tbJoinTurmasAlunos | null >,
  nextToken?: string | null,
};

export type ModelTbPresencaFilterInput = {
  alunoEmail?: ModelStringInput | null,
  and?: Array< ModelTbPresencaFilterInput | null > | null,
  aulaId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  justificativa?: ModelStringInput | null,
  not?: ModelTbPresencaFilterInput | null,
  or?: Array< ModelTbPresencaFilterInput | null > | null,
  owner?: ModelStringInput | null,
  presente?: ModelBooleanInput | null,
  statusJustificativa?: ModelTbPresencaStatusJustificativaInput | null,
  tipo?: ModelTbPresencaTipoInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTbPresencaConnection = {
  __typename: "ModelTbPresencaConnection",
  items:  Array<tbPresenca | null >,
  nextToken?: string | null,
};

export type ModelTbTurmasFilterInput = {
  and?: Array< ModelTbTurmasFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  descricao?: ModelStringInput | null,
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  not?: ModelTbTurmasFilterInput | null,
  or?: Array< ModelTbTurmasFilterInput | null > | null,
  periodo?: ModelStringInput | null,
  professorEmail?: ModelStringInput | null,
  turma_ativa?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTbTurmasConnection = {
  __typename: "ModelTbTurmasConnection",
  items:  Array<tbTurmas | null >,
  nextToken?: string | null,
};

export type ModelTbUsuariosFilterInput = {
  and?: Array< ModelTbUsuariosFilterInput | null > | null,
  cadastro_realizado?: ModelBooleanInput | null,
  cargo?: ModelTbUsuariosCargoInput | null,
  conta_ativa?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  not?: ModelTbUsuariosFilterInput | null,
  or?: Array< ModelTbUsuariosFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTbUsuariosConnection = {
  __typename: "ModelTbUsuariosConnection",
  items:  Array<tbUsuarios | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTbAulasFilterInput = {
  and?: Array< ModelSubscriptionTbAulasFilterInput | null > | null,
  conteudo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  materialUrl?: ModelSubscriptionStringInput | null,
  numeroAula?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionTbAulasFilterInput | null > | null,
  qrcode?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  turmaId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTbJoinTurmasAlunosFilterInput = {
  alunoEmail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTbJoinTurmasAlunosFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTbJoinTurmasAlunosFilterInput | null > | null,
  turmaId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTbPresencaFilterInput = {
  alunoEmail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTbPresencaFilterInput | null > | null,
  aulaId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  justificativa?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTbPresencaFilterInput | null > | null,
  owner?: ModelStringInput | null,
  presente?: ModelSubscriptionBooleanInput | null,
  statusJustificativa?: ModelSubscriptionStringInput | null,
  tipo?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionTbTurmasFilterInput = {
  and?: Array< ModelSubscriptionTbTurmasFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  descricao?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTbTurmasFilterInput | null > | null,
  periodo?: ModelSubscriptionStringInput | null,
  professorEmail?: ModelSubscriptionStringInput | null,
  turma_ativa?: ModelSubscriptionBooleanInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTbUsuariosFilterInput = {
  and?: Array< ModelSubscriptionTbUsuariosFilterInput | null > | null,
  cadastro_realizado?: ModelSubscriptionBooleanInput | null,
  cargo?: ModelSubscriptionStringInput | null,
  conta_ativa?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTbUsuariosFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type CreateTbAulasMutationVariables = {
  condition?: ModelTbAulasConditionInput | null,
  input: CreateTbAulasInput,
};

export type CreateTbAulasMutation = {
  createTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type CreateTbJoinTurmasAlunosMutationVariables = {
  condition?: ModelTbJoinTurmasAlunosConditionInput | null,
  input: CreateTbJoinTurmasAlunosInput,
};

export type CreateTbJoinTurmasAlunosMutation = {
  createTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type CreateTbPresencaMutationVariables = {
  condition?: ModelTbPresencaConditionInput | null,
  input: CreateTbPresencaInput,
};

export type CreateTbPresencaMutation = {
  createTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type CreateTbTurmasMutationVariables = {
  condition?: ModelTbTurmasConditionInput | null,
  input: CreateTbTurmasInput,
};

export type CreateTbTurmasMutation = {
  createTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type CreateTbUsuariosMutationVariables = {
  condition?: ModelTbUsuariosConditionInput | null,
  input: CreateTbUsuariosInput,
};

export type CreateTbUsuariosMutation = {
  createTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteTbAulasMutationVariables = {
  condition?: ModelTbAulasConditionInput | null,
  input: DeleteTbAulasInput,
};

export type DeleteTbAulasMutation = {
  deleteTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type DeleteTbJoinTurmasAlunosMutationVariables = {
  condition?: ModelTbJoinTurmasAlunosConditionInput | null,
  input: DeleteTbJoinTurmasAlunosInput,
};

export type DeleteTbJoinTurmasAlunosMutation = {
  deleteTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type DeleteTbPresencaMutationVariables = {
  condition?: ModelTbPresencaConditionInput | null,
  input: DeleteTbPresencaInput,
};

export type DeleteTbPresencaMutation = {
  deleteTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type DeleteTbTurmasMutationVariables = {
  condition?: ModelTbTurmasConditionInput | null,
  input: DeleteTbTurmasInput,
};

export type DeleteTbTurmasMutation = {
  deleteTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type DeleteTbUsuariosMutationVariables = {
  condition?: ModelTbUsuariosConditionInput | null,
  input: DeleteTbUsuariosInput,
};

export type DeleteTbUsuariosMutation = {
  deleteTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GerarQRCodeAulaMutationVariables = {
  aulaId: string,
};

export type GerarQRCodeAulaMutation = {
  gerarQRCodeAula?: string | null,
};

export type RegistrarPresencaQRCodeMutationVariables = {
  qrcode: string,
};

export type RegistrarPresencaQRCodeMutation = {
  registrarPresencaQRCode?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type UpdateTbAulasMutationVariables = {
  condition?: ModelTbAulasConditionInput | null,
  input: UpdateTbAulasInput,
};

export type UpdateTbAulasMutation = {
  updateTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type UpdateTbJoinTurmasAlunosMutationVariables = {
  condition?: ModelTbJoinTurmasAlunosConditionInput | null,
  input: UpdateTbJoinTurmasAlunosInput,
};

export type UpdateTbJoinTurmasAlunosMutation = {
  updateTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type UpdateTbPresencaMutationVariables = {
  condition?: ModelTbPresencaConditionInput | null,
  input: UpdateTbPresencaInput,
};

export type UpdateTbPresencaMutation = {
  updateTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type UpdateTbTurmasMutationVariables = {
  condition?: ModelTbTurmasConditionInput | null,
  input: UpdateTbTurmasInput,
};

export type UpdateTbTurmasMutation = {
  updateTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type UpdateTbUsuariosMutationVariables = {
  condition?: ModelTbUsuariosConditionInput | null,
  input: UpdateTbUsuariosInput,
};

export type UpdateTbUsuariosMutation = {
  updateTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetTbAulasQueryVariables = {
  id: string,
};

export type GetTbAulasQuery = {
  getTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type GetTbJoinTurmasAlunosQueryVariables = {
  id: string,
};

export type GetTbJoinTurmasAlunosQuery = {
  getTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type GetTbPresencaQueryVariables = {
  id: string,
};

export type GetTbPresencaQuery = {
  getTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type GetTbTurmasQueryVariables = {
  id: string,
};

export type GetTbTurmasQuery = {
  getTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type GetTbUsuariosQueryVariables = {
  email: string,
};

export type GetTbUsuariosQuery = {
  getTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListTbAulasQueryVariables = {
  filter?: ModelTbAulasFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTbAulasQuery = {
  listTbAulas?:  {
    __typename: "ModelTbAulasConnection",
    items:  Array< {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTbJoinTurmasAlunosQueryVariables = {
  filter?: ModelTbJoinTurmasAlunosFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTbJoinTurmasAlunosQuery = {
  listTbJoinTurmasAlunos?:  {
    __typename: "ModelTbJoinTurmasAlunosConnection",
    items:  Array< {
      __typename: "tbJoinTurmasAlunos",
      aluno?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      alunoEmail: string,
      createdAt: string,
      id: string,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTbPresencasQueryVariables = {
  filter?: ModelTbPresencaFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTbPresencasQuery = {
  listTbPresencas?:  {
    __typename: "ModelTbPresencaConnection",
    items:  Array< {
      __typename: "tbPresenca",
      aluno?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      alunoEmail: string,
      aula?:  {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null,
      aulaId: string,
      createdAt: string,
      id: string,
      justificativa?: string | null,
      owner?: string | null,
      presente: boolean,
      statusJustificativa?: TbPresencaStatusJustificativa | null,
      tipo?: TbPresencaTipo | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTbTurmasQueryVariables = {
  filter?: ModelTbTurmasFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTbTurmasQuery = {
  listTbTurmas?:  {
    __typename: "ModelTbTurmasConnection",
    items:  Array< {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTbUsuariosQueryVariables = {
  email?: string | null,
  filter?: ModelTbUsuariosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTbUsuariosQuery = {
  listTbUsuarios?:  {
    __typename: "ModelTbUsuariosConnection",
    items:  Array< {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTbAulasSubscriptionVariables = {
  filter?: ModelSubscriptionTbAulasFilterInput | null,
};

export type OnCreateTbAulasSubscription = {
  onCreateTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTbJoinTurmasAlunosSubscriptionVariables = {
  filter?: ModelSubscriptionTbJoinTurmasAlunosFilterInput | null,
};

export type OnCreateTbJoinTurmasAlunosSubscription = {
  onCreateTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTbPresencaSubscriptionVariables = {
  filter?: ModelSubscriptionTbPresencaFilterInput | null,
};

export type OnCreateTbPresencaSubscription = {
  onCreateTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTbTurmasSubscriptionVariables = {
  filter?: ModelSubscriptionTbTurmasFilterInput | null,
};

export type OnCreateTbTurmasSubscription = {
  onCreateTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTbUsuariosSubscriptionVariables = {
  filter?: ModelSubscriptionTbUsuariosFilterInput | null,
  owner?: string | null,
};

export type OnCreateTbUsuariosSubscription = {
  onCreateTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTbAulasSubscriptionVariables = {
  filter?: ModelSubscriptionTbAulasFilterInput | null,
};

export type OnDeleteTbAulasSubscription = {
  onDeleteTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTbJoinTurmasAlunosSubscriptionVariables = {
  filter?: ModelSubscriptionTbJoinTurmasAlunosFilterInput | null,
};

export type OnDeleteTbJoinTurmasAlunosSubscription = {
  onDeleteTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTbPresencaSubscriptionVariables = {
  filter?: ModelSubscriptionTbPresencaFilterInput | null,
};

export type OnDeleteTbPresencaSubscription = {
  onDeleteTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTbTurmasSubscriptionVariables = {
  filter?: ModelSubscriptionTbTurmasFilterInput | null,
};

export type OnDeleteTbTurmasSubscription = {
  onDeleteTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTbUsuariosSubscriptionVariables = {
  filter?: ModelSubscriptionTbUsuariosFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTbUsuariosSubscription = {
  onDeleteTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTbAulasSubscriptionVariables = {
  filter?: ModelSubscriptionTbAulasFilterInput | null,
};

export type OnUpdateTbAulasSubscription = {
  onUpdateTbAulas?:  {
    __typename: "tbAulas",
    conteudo?: string | null,
    createdAt: string,
    data: string,
    id: string,
    materialUrl?: Array< string | null > | null,
    numeroAula?: number | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    qrcode?: string | null,
    status?: TbAulasStatus | null,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTbJoinTurmasAlunosSubscriptionVariables = {
  filter?: ModelSubscriptionTbJoinTurmasAlunosFilterInput | null,
};

export type OnUpdateTbJoinTurmasAlunosSubscription = {
  onUpdateTbJoinTurmasAlunos?:  {
    __typename: "tbJoinTurmasAlunos",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    createdAt: string,
    id: string,
    turma?:  {
      __typename: "tbTurmas",
      alunos?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      aulas?:  {
        __typename: "ModeltbAulasConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      descricao?: string | null,
      id: string,
      nome: string,
      periodo: string,
      professor?:  {
        __typename: "tbUsuarios",
        cadastro_realizado?: boolean | null,
        cargo?: TbUsuariosCargo | null,
        conta_ativa?: boolean | null,
        createdAt: string,
        email: string,
        nome?: string | null,
        owner?: string | null,
        updatedAt: string,
      } | null,
      professorEmail: string,
      turma_ativa?: boolean | null,
      updatedAt: string,
    } | null,
    turmaId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTbPresencaSubscriptionVariables = {
  filter?: ModelSubscriptionTbPresencaFilterInput | null,
};

export type OnUpdateTbPresencaSubscription = {
  onUpdateTbPresenca?:  {
    __typename: "tbPresenca",
    aluno?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    alunoEmail: string,
    aula?:  {
      __typename: "tbAulas",
      conteudo?: string | null,
      createdAt: string,
      data: string,
      id: string,
      materialUrl?: Array< string | null > | null,
      numeroAula?: number | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      qrcode?: string | null,
      status?: TbAulasStatus | null,
      turma?:  {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null,
      turmaId: string,
      updatedAt: string,
    } | null,
    aulaId: string,
    createdAt: string,
    id: string,
    justificativa?: string | null,
    owner?: string | null,
    presente: boolean,
    statusJustificativa?: TbPresencaStatusJustificativa | null,
    tipo?: TbPresencaTipo | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTbTurmasSubscriptionVariables = {
  filter?: ModelSubscriptionTbTurmasFilterInput | null,
};

export type OnUpdateTbTurmasSubscription = {
  onUpdateTbTurmas?:  {
    __typename: "tbTurmas",
    alunos?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    aulas?:  {
      __typename: "ModeltbAulasConnection",
      items:  Array< {
        __typename: "tbAulas",
        conteudo?: string | null,
        createdAt: string,
        data: string,
        id: string,
        materialUrl?: Array< string | null > | null,
        numeroAula?: number | null,
        qrcode?: string | null,
        status?: TbAulasStatus | null,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    descricao?: string | null,
    id: string,
    nome: string,
    periodo: string,
    professor?:  {
      __typename: "tbUsuarios",
      cadastro_realizado?: boolean | null,
      cargo?: TbUsuariosCargo | null,
      conta_ativa?: boolean | null,
      createdAt: string,
      email: string,
      nome?: string | null,
      owner?: string | null,
      presencas?:  {
        __typename: "ModeltbPresencaConnection",
        nextToken?: string | null,
      } | null,
      turmasComoAluno?:  {
        __typename: "ModeltbJoinTurmasAlunosConnection",
        nextToken?: string | null,
      } | null,
      turmasComoProfessor?:  {
        __typename: "ModeltbTurmasConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    professorEmail: string,
    turma_ativa?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTbUsuariosSubscriptionVariables = {
  filter?: ModelSubscriptionTbUsuariosFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTbUsuariosSubscription = {
  onUpdateTbUsuarios?:  {
    __typename: "tbUsuarios",
    cadastro_realizado?: boolean | null,
    cargo?: TbUsuariosCargo | null,
    conta_ativa?: boolean | null,
    createdAt: string,
    email: string,
    nome?: string | null,
    owner?: string | null,
    presencas?:  {
      __typename: "ModeltbPresencaConnection",
      items:  Array< {
        __typename: "tbPresenca",
        alunoEmail: string,
        aulaId: string,
        createdAt: string,
        id: string,
        justificativa?: string | null,
        owner?: string | null,
        presente: boolean,
        statusJustificativa?: TbPresencaStatusJustificativa | null,
        tipo?: TbPresencaTipo | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoAluno?:  {
      __typename: "ModeltbJoinTurmasAlunosConnection",
      items:  Array< {
        __typename: "tbJoinTurmasAlunos",
        alunoEmail: string,
        createdAt: string,
        id: string,
        turmaId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    turmasComoProfessor?:  {
      __typename: "ModeltbTurmasConnection",
      items:  Array< {
        __typename: "tbTurmas",
        createdAt: string,
        descricao?: string | null,
        id: string,
        nome: string,
        periodo: string,
        professorEmail: string,
        turma_ativa?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
