mySubmit.onclick = function(){

const ammountToMake = Number(document.getElementById("ammountToMake").value);
const aromaPercentage = Number(document.getElementById("aromaPercentage").value);
const desiredNicotineStrength = Number(document.getElementById("desiredNicotineStrength").value);
const baseNicotineStrength = Number(document.getElementById("baseNicotineStrength").value);

const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("myResult");

let aroma;
let nicBase;
let zeroBase;


    if(ammountToMake === 0 || ammountToMake === null){
        result.textContent = "Ammount of Liquid must be greater than 0!"
    } else {

              if(aromaPercentage === 0 || aromaPercentage === null){                                                     // without aroma

                if(baseNicotineStrength === 0 || baseNicotineStrength === null){
                    result.textContent = "you must type in nicotine strength from nicotine shot that is grater than 0!"
                } else{
                    
                    nicBase = (desiredNicotineStrength * ammountToMake) / baseNicotineStrength;
                    zeroBase = ammountToMake - nicBase;

                    if(isNaN(nicBase) || isNaN(zeroBase)){
                        result.textContent = `Only use numbers for calculation!`;
                    } else {
                        result.textContent = `${nicBase}ml Nikotin Shot + ${zeroBase}ml Base`;
                    }
                }

                } else if(desiredNicotineStrength === 0 || desiredNicotineStrength === null){                             // without nicotine
                    
                    if(aromaPercentage === 0 || aromaPercentage === null){
                        result.textContent = "you must type in aroma percentage that is greater than 0!"
                    } else{

                        aroma = (ammountToMake * aromaPercentage) / 100;
                        zeroBase = ammountToMake - aroma;

                        if(isNaN(aroma) || isNaN(zeroBase)){
                            result.textContent = `Only use numbers for calculation!`;
                        } else{
                            result.textContent = `${aroma}ml Aroma + ${zeroBase}ml Base`;
                        }
                        
                    }
                    
                } else{                                                                                                   // do all calculations

                    if(baseNicotineStrength === 0 || baseNicotineStrength === null){
                        result.textContent = "You must type in nicotine strength from nicotine shot that is grater than 0!"
                    } else{

                        aroma = (ammountToMake * aromaPercentage) / 100;
                
                        nicBase = (desiredNicotineStrength * ammountToMake) / baseNicotineStrength;
                
                        zeroBase = ammountToMake - nicBase - aroma;

                        if(isNaN(aroma) || isNaN(nicBase) || isNaN(zeroBase)){
                            result.textContent = `Only use numbers for calculation!`;
                        } else{
                            result.textContent = `${aroma}ml Aroma + ${nicBase}ml Nikotin Shot + ${zeroBase}ml Base`;
                        }
                
                    }

                }
    }
}
