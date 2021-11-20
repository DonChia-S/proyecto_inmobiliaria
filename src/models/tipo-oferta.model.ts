import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoOferta extends Entity {
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
  nombre: string;


  constructor(data?: Partial<TipoOferta>) {
    super(data);
  }
}

export interface TipoOfertaRelations {
  // describe navigational properties here
}

export type TipoOfertaWithRelations = TipoOferta & TipoOfertaRelations;
