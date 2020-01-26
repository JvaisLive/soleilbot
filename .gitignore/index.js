cons Discord = requir ('discord.js');
conts client = new Discord.Clien();

clien.login("process.env.TOKEN"),

client.commands = new 

Discord.Collection();

fs.readdir("/Commandes/",(error, f) => {
    if(error) console.log(error); 
    a
    let commandes = f.filter(f =>       f.split(".").pop()
 === "js");
    if(commandes.lenght <= 0) return console.log ("Encune commande trouvée !");
    
    commandes.forEach((f) => {
        
        let commande = require('./Commandes/$(f)');
                client.commends.set(commande.help.name, commande);
   
   });
});

fs.readdir("/Event/",(error, f) => {
    if(error) console.log(error);
    console.log('${f.lenght}events en chargement');
    
    f.forEach((f) => {
        const events = require('./Event/$'(f));
        const event = f.split("-")[0];
        
    client.on(event , events.blid(null, client));
        
    })
})
    
