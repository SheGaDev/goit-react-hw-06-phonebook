export type Form = {
  name: string;
  number: string;
};

export type ContactListProps = {
  contacts: Contact[];
  contactDelete: (id: string) => void;
  filter: string;
};

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface RootState {
  contacts: Contact[];
  filter: string;
}
