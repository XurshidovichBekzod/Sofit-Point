
{
    // 1
    let a = prompt(`Son kiriting`);
    let yaxlitlash = Math.round(a);
    console.log(`${a} = ${yaxlitlash}`);

}


{
    // 2
    let a = prompt(`manfiy son kriting`);
    let musbat = Math.abs(a);
    console.log(`${a} abs = ${musbat}`);
}

{
    // 3
    let n1 = Math.random();
    let N1 = Math.floor(n1 * 100);
    console.log(`1 chi son ${N1}`)

    let n2 = Math.random();
    let N2 = Math.floor(n2 * 100);
    console.log(`2 chi son ${N2}`)

    let n3 = Math.random();
    let N3 = Math.floor(n3 * 100);
    console.log(`3 chi son ${N3}`)

    let n4 = Math.random();
    let N4 = Math.floor(n4 * 100);
    console.log(`4 chi son ${N4}`)

    let n5 = Math.random();
    let N5 = Math.floor(n5 * 100);
    console.log(`5 chi son ${N5}`)

    let jami = (N1 + N2 + N3 + N4 + N5) / 5
    console.log(Math.round(jami))
}

{
    // 4 
    let franklin = prompt("Hohlagancha $ kirgazing !")
    let bankomat = franklin * 11.2356;
    console.log(`${franklin} dollor >> so'mda ${Math.round(bankomat)}`)
}

{
 // 5
 let yil = Math.floor((Math.random() * 16) + 2009);
 
 let oy = Math.ceil(Math.random() * 12);

 let kun = Math.ceil(Math.random() * 30);

 console.log(`${yil} - yil, ${oy} - oy, ${kun} - kun!`);
}