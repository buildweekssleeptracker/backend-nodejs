
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleeps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sleeps').insert([
        {
          user_Id: 1,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 22, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeBed: 1,
          moodDuringDay: 2,
          moodAfterBed: 3,
          score: (1 + 2 + 3) / 3          
        },
        
        {
          user_Id: 1,
          timeInBed: "July 22, 2019 021:15:00",
          timeWakeUp: "July 21, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterBed: 4,     
          score: (4 + 4 + 4) / 3          
     
        },

        
        {
          user_Id: 1,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeBed: 2,
          moodDuringDay: 3,
          moodAfterBed: 2, 
          score: (2 + 3 + 2) / 3                   
        },

        
        {
          user_Id: 2,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeBed: 3,
          moodDuringDay: 3,
          moodAfterBed: 3, 
          score: (3 + 3 + 3) / 3                   
         
        },

        
        {
          user_Id: 3,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeBed: 2,
          moodDuringDay: 1,
          moodAfterBed: 1,
          score: (2 + 1 + 1) / 3                   
          
        }
      ]);
    });
};
