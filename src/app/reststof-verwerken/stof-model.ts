export interface StofModel {
  artikelnr: string;
  gewicht: string;
  kleur: string;
  leverancier: string;
  productgroep: string;
  soort: string;
  ordernummer: string;
  klantOrder: {ordernr: string}
}
