export interface StofModel {
  metrage: number;
  artikelnr: string;
  gewicht: number;
  kleur: string;
  leverancier: string;
  productgroep: string;
  soort: string;
  ordernummer: string;
  samenstelling: string;
  klantOrder: {ordernr: string}
}
