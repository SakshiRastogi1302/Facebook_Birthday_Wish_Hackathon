function helpExecutor(){
    console.log(`List Of All The Commands =>
                 1. To wish all your friends who have birthday today or in the recent past :- node birthday_cli.js Wish_All
                 2. To view birthday list :- node birthday_cli.js View_Birthday_List 
              `)
}


module.exports={
    helpFn:helpExecutor
}