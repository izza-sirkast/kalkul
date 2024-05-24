export const lengthConverter = (valInput : number, unitInput : string, unitOutput : string) => {
    let valOutput;
    switch(unitInput){
        case "Milimeter":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput
                    break;
                case "Centimeter":
                    valOutput = valInput / 10
                    break;
                case "Decimeter":
                    valOutput = valInput / 100
                    break;
                case "Meter":
                    valOutput = valInput / 1000
                    break;
                case "Decameter":
                    valOutput = valInput / 10000
                    break;
                case "Hectometer":
                    valOutput = valInput / 100000
                    break;
                case "Kilometer":
                    valOutput = valInput / 1000000
                    break;
            }
            break;
        case "Centimeter":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 10
                    break;
                case "Centimeter":
                    valOutput = valInput 
                    break;
                case "Decimeter":
                    valOutput = valInput / 10
                    break;
                case "Meter":
                    valOutput = valInput / 100
                    break;
                case "Decameter":
                    valOutput = valInput / 1000
                    break;
                case "Hectometer":
                    valOutput = valInput / 10000
                    break;
                case "Kilometer":
                    valOutput = valInput / 100000
                    break;
            }
            break;
        case "Decimeter":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 100
                    break;
                case "Centimeter":
                    valOutput = valInput * 10
                    break;
                case "Decimeter":
                    valOutput = valInput
                    break;
                case "Meter":
                    valOutput = valInput / 10
                    break;
                case "Decameter":
                    valOutput = valInput / 100
                    break;
                case "Hectometer":
                    valOutput = valInput / 1000
                    break;
                case "Kilometer":
                    valOutput = valInput / 10000
                    break;
            }
            break;
        case "Meter":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 1000
                    break;
                case "Centimeter":
                    valOutput = valInput * 100
                    break;
                case "Decimeter":
                    valOutput = valInput * 10
                    break;
                case "Meter":
                    valOutput = valInput
                    break;
                case "Decameter":
                    valOutput = valInput / 10
                    break;
                case "Hectometer":
                    valOutput = valInput / 100
                    break;
                case "Kilometer":
                    valOutput = valInput / 1000
                    break;
            }
            break;
        case "Decameter":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 10000
                    break;
                case "Centimeter":
                    valOutput = valInput * 1000
                    break;
                case "Decimeter":
                    valOutput = valInput * 100
                    break;
                case "Meter":
                    valOutput = valInput * 10
                    break;
                case "Decameter":
                    valOutput = valInput
                    break;
                case "Hectometer":
                    valOutput = valInput / 10
                    break;
                case "Kilometer":
                    valOutput = valInput / 100
                    break;
            }
            break;
        case "Hectometer":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 100000
                    break;
                case "Centimeter":
                    valOutput = valInput * 10000
                    break;
                case "Decimeter":
                    valOutput = valInput * 1000
                    break;
                case "Meter":
                    valOutput = valInput * 100
                    break;
                case "Decameter":
                    valOutput = valInput * 10
                    break;
                case "Hectometer":
                    valOutput = valInput
                    break;
                case "Kilometer":
                    valOutput = valInput / 10
                    break;
            }
            break;
        case "Kilometer":
            switch(unitOutput){
                case "Milimeter":
                    valOutput = valInput * 1000000
                    break;
                case "Centimeter":
                    valOutput = valInput * 100000
                    break;
                case "Decimeter":
                    valOutput = valInput * 10000
                    break;
                case "Meter":
                    valOutput = valInput * 1000
                    break;
                case "Decameter":
                    valOutput = valInput * 100
                    break;
                case "Hectometer":
                    valOutput = valInput * 10
                    break;
                case "Kilometer":
                    valOutput = valInput
                    break;
            }
            break;
    }

    return valOutput
}