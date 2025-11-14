import type { SoleOption, TopOption } from "../types/shoe";

export const soleOptions: SoleOption[] = [
  { id: 'sole-white', name: 'Fehér', color: '#FFFFFF' },
  { id: 'sole-black', name: 'Fekete', color: '#1A1A1A' },
  { id: 'sole-gum', name: 'Piros', color: '#FF0000' },
];

export const topOptions: TopOption[] = [
  { id: 'top-navy', name: 'Tengerészkék', color: '#1E3A8A' },
  { id: 'top-burgundy', name: 'Bordó', color: '#7F1D1D' },
  { id: 'top-forest', name: 'Erdőzöld', color: '#14532D' },
  { id: 'top-charcoal', name: 'Antracit', color: '#374151' },
];
