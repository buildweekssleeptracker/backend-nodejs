
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
          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterDay: 4,          
        },
        
        {
          user_Id: 1,
          timeInBed: "July 22, 2019 021:15:00",
          timeWakeUp: "July 21, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterDay: 4,          
        },

        
        {
          user_Id: 1,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterDay: 4,          
        },

        
        {
          user_Id: 2,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterDay: 4,          
        },

        
        {
          user_Id: 3,
          timeInBed: "July 21, 2019 021:15:00",
          timeWakeUp: "July 24, 2019 06:15:00",
          duration: (new Date("July 22, 2019 06:15:00").getTime() - new Date("July 21, 2019 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeBed: 4,
          moodDuringDay: 4,
          moodAfterDay: 4,          
        }
      ]);
    });
};
