import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TipoInmueble} from './tipo-inmueble.model';
import {TipoOferta} from './tipo-oferta.model';

@model()
export class Inmueble extends Entity {
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
  direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  encargado: string;

  @property({
    type: 'string',
    required: true,
  })
  telEncargado: string;

  @property({
    type: 'string',
    required: true,
  })
  foto: string;

  @property({
    type: 'string',
    required: true,
  })
  video: string;

  @belongsTo(() => TipoInmueble, {name: 'fktipoinmueble'})
  tipoInmuebleId: string;

  @belongsTo(() => TipoOferta, {name: 'fktipooferta'})
  tipoOfertaId: string;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
