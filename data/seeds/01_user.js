
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, username: 'brandon', password: '$2a$12$HH90M5WgU7jVDUcl2hN82O7puASyTPgTm3ZZ.C0iKiCQAe5sBsMIm', fullname: 'Brandon Desselle', email: 'desselle.brandon@gmail.com' },
        { id: 2, username: 'duke', password: '$2a$12$jpYvRS8wGPFnLftokD2cBOGNF7tSFPuNCc5LvXG91uY/9dkIfGufC', fullname: 'Duc Vu', email: 'dghftgefghfdfg@gmail.com' },
        { id: 3, username: 'henry', password: '$2a$12$Ttgyt9Q9IQHSVrRqAAyndON1Js8pfUFLV87O.rhbi0AU2cW0mK12C', fullname: 'Henry Neal', email: 'fghfghfdfgddhfh@gmail.com' },
        { id: 4, username: 'alfonso', password: '$2a$12$3a8OCrilO4jlYggiEbzHWu9uALEw6GdHrFvbbQrwbtWHtGwM2xwYC', fullname: 'Alfonso Garcia', email: 'fghfdgdgghr5455@gmail.com' },
        { id: 5, username: 'chase', password: '$2a$12$3BzJbZlVyC76XtZ.L/6P1OvpzPQVFEzdI4ofpWiraXUHe1GVoblvG', fullname: 'Chase Fulks', email: 'w453456etdg@gmail.com' },
        { id: 6, username: 'jesus', password: '$2a$12$aN2KPbK7u1pdS6KmMdepyeJ0jkrTmuNNMOleZh86lgAhxEEzgkG9.', fullname: 'Jesus', email: '34534y5edfg45et@gmail.com' },
      ]);
    });
};
