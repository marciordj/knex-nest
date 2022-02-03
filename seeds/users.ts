import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      firstName: 'Paula',
      lastName: 'Rodrigues',
      email: 'blabla@gmail.com',
    },
    {
      id: 2,
      firstName: 'Amanda',
      lastName: 'Rodrigues',
      email: 'bl3bl3@gmail.com',
    },
    {
      id: 3,
      firstName: 'Nilson',
      lastName: 'Prestes',
      email: 'blrblr@gmail.com',
    },
    {
      id: 4,
      firstName: 'Thanos',
      lastName: 'Rodrigues',
      email: 'titan@gmail.com',
    },
  ]);
}
