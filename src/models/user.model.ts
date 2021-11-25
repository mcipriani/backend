import {Entity, model, property, hasMany} from '@loopback/repository';
import {Empresa} from './empresa.model';

@model()
export class User extends Entity {
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
  usuario: number;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    default: 'Nombre Usuario',
  })
  nombre?: string;

  @property({
    type: 'string',
    default: "Apellido Usuario",
  })
  apellido?: string;

  @property({
    type: 'string',
    default: "correo@gmail.com",
  })
  correo?: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'boolean',
    default: false,
  })
  admin?: boolean;

  @property({
    type: 'boolean',
    default: true,
  })
  cliente?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  empleado?: boolean;

  @property({
    type: 'array',
    itemType: 'number',
  })
  despacho?: number[];

  @property({
    type: 'array',
    itemType: 'number',
  })
  factura?: number[];

  @property({
    type: 'string',
  })
  empresaId?: string;

  @hasMany(() => Empresa)
  empresa: Empresa[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
