export type Role = 'buyer' | 'owner' | 'firm' | 'government' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}
