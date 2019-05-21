
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auth').truncate()
    .then(function () {
      // Inserts seed entries
      // hello123
      return knex('auth').insert([
        {
          username: 'dbvu1', 
          password:	'$2a$10$UCdTRvs2cpSnYvEMFufP7.DRKuASdahYRHqojDFNs2jbG.GhXYrI.',	
          firstName: 'Duc',	
          lastName: 'Vu'
        },
        {
          username: 'dbvu9', 
          password:	'$2a$10$YmzlXaaYgtso/TSOtMHLO.B5mHmlDzGw1OGQErH6hPUMI1ro6Zr9e',	
          firstName: 'Duc',	
          lastName: 'Vu'
        },
        {
          username: 'dbvu99', 
          password:	'$2a$10$fTw1NAW/EqC7u2jHsAiBneR7Y6tiCyqfV8Q7Xv0LOckpRHF2NtG.i',	
          firstName: 'Duc',	
          lastName: 'Vu'
        }
      ]);
    });
};
