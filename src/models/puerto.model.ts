import {Entity, model, property} from '@loopback/repository';

@model()
export class Puerto extends Entity {
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
   codePort: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  locode: string;

  @property({
    type: 'string',
    default: "Ciudad",
  })
  ciudad?: string;

  @property({
    type: 'string',
    default: "Pais",
  })
  pais?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'array',
    itemType: 'number',
  })
  datos?: number[];

  @property({
    type: 'string',
  })
  imagen1?: string;

  @property({
    type: 'string',
  })
  imagen2?: string;

  @property({
    type: 'array',
    itemType: 'number',
  })
  distancias?: number[];


  constructor(data?: Partial<Puerto>) {
    super(data);
  }
}

export interface PuertoRelations {
  // describe navigational properties here
}

export type PuertoWithRelations = Puerto & PuertoRelations;
