import {Entity, model, property} from '@loopback/repository';

@model()
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroFactura: string;

  @property({
    type: 'number',
    required: true,
  })
  ordenCliente: number;

  @property({
    type: 'date',
  })
  fechaOrden?: string;

  @property({
    type: 'date',
  })
  fechaFactura?: string;

  @property({
    type: 'string',
    default: "Calle 45 Sur No. 123 ",
  })
  direccion?: string;

  @property({
    type: 'string',
    default: "DC Bogota",
  })
  ciudad?: string;

  @property({
    type: 'string',
    default: "Colombia",
  })
  pais?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
    default: "NIT 23454342-0",
  })
  nit?: string;

  @property({
    type: 'number',
  })
  codeEmpresa?: number;


  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
