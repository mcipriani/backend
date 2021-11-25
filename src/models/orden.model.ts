import {Entity, model, property} from '@loopback/repository';

@model()
export class Orden extends Entity {
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
  ordenNumero: number;

    @property({
    type: 'number',
    required: true,
  })
  ordenCliente: number;


  @property({
    type: 'number',
    required: true,
  })
  origen: number;

  @property({
    type: 'string',
    default: 'Barranquilla,'
  })
  puertoOrigen?: string;

  @property({
    type: 'number',
    required: true,
  })
  destino: number;

  @property({
    type: 'string',
  })
  puertoDestino?: string;

  @property({
    type: 'number',
  })
  distancia?: number;

 @property({
    type: 'date',
  })
  fechaOrden?: string;

 @property({
    type: 'date',
  })
  fechaAceptada?: string;

 @property({
    type: 'date',
  })
  fechaPendiente?: string;

 @property({
    type: 'date',
  })
  fechaDespachada?: string;

   @property({
    type: 'date',
  })
  fechaFinalizada?: string;

   @property({
    type: 'date',
  })
  fechaCancelada?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  aceptada?: boolean;


  @property({
    type: 'boolean',
    default: false,
  })
  cancelada?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  facturada?: boolean;

  @property({
    type: 'number',
  })
  precio?: number;

  @property({
    type: 'number',
  })
  cantidad?: number;

  @property({
    type: 'number',
  })
  peso?: number;

  @property({
    type: 'string',
    default: "Contenedor marítimo de 20 ft",
  })
  contenedor?: string;

  @property({
    type: 'string',
    default: "Puerto a puerto",
  })
  icoterm?: string;



  constructor(data?: Partial<Orden>) {
    super(data);
  }
}

export interface OrdenRelations {
  // describe navigational properties here
}

export type OrdenWithRelations = Orden & OrdenRelations;
