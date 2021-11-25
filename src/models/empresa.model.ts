import {Entity, model, property, hasOne} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  codeEmpresa: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    default: "Direccion",
  })
  direccion?: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    default: "NIT 123456789-0",
  })
  nit?: string;

  @hasOne(() => User, {keyTo: 'usuario'})
  codeUser: User;

  @hasOne(() => User)
  user: User;

  @property({
    type: 'string',
  })
  userId?: string;

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
