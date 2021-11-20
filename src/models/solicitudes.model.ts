import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Inmueble} from './inmueble.model';
import {Estados} from './estados.model';

@model()
export class Solicitudes extends Entity {
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
  comentario: string;

  @belongsTo(() => Usuario, {name: 'fkcliente'})
  idcliente: string;

  @belongsTo(() => Inmueble, {name: 'fkinmueble'})
  inmuebleId: string;

  @belongsTo(() => Usuario, {name: 'fkasesor'})
  idasesor: string;

  @belongsTo(() => Estados, {name: 'fkestado'})
  estadosId: string;

  constructor(data?: Partial<Solicitudes>) {
    super(data);
  }
}

export interface SolicitudesRelations {
  // describe navigational properties here
}

export type SolicitudesWithRelations = Solicitudes & SolicitudesRelations;
