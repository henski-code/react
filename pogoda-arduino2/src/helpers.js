export function avg(tab){
    return parseFloat((tab.reduce((a,b) => a+b,0)/tab.length).toFixed(2));
}

export function dostepneDane(obj, jakieDane){
    let miesiace = Object.values(obj[new Date().getFullYear()]);
    const miesiaceNazwy = Object.keys(obj[new Date().getFullYear()]);
   const miesiaceWartosc = miesiace.map((mies, index1)=>{
       const srednieWmiesiacu = Object.values(mies).map((dzien,index2)=>{
           const wartosciDni = Object.values(dzien).map(dzienWart => dzienWart[jakieDane]);
           return {dzien:Object.keys(mies)[index2],dane:avg(wartosciDni)};
        });
        return srednieWmiesiacu;
    });

    const wynik = miesiaceWartosc.reduce((a,b,index)=>{
       return Object.assign(a, {[miesiaceNazwy[index]]:b});
    }, {})

    return wynik;
}

export function pullData(obj, co, rok, mies, dzien){
    const dane = obj[rok][mies][dzien];
    return Object.values(dane).map(godzina => godzina[co]);
}

export  function ostatniDzien(obj, rok, mies){
    const dane = Object.keys(obj[rok][mies]);
    return dane[dane.length-1];
}



