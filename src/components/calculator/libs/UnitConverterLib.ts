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


export const massConverter = (valInput : number, unitInput : string, unitOutput : String) => {
    
    let valOutput;

    switch(unitInput){
        case "Microgram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput
                    break;
                case "Miligram":
                    valOutput = valInput / 1000
                    break;
                case "Centigram":
                    valOutput = valInput / 10000
                    break;
                case "Decigram":
                    valOutput = valInput / 100000
                    break;
                case "Gram":
                    valOutput = valInput / 1000000
                    break;
                case "Decagram":
                    valOutput = valInput / 10000000
                    break;
                case "Hectogram":
                    valOutput = valInput / 100000000
                    break;
                case "Kilogram":
                    valOutput = valInput / 1000000000
                    break;
                case "Metric Ton":
                    valOutput = valInput / 1000000000000
                    break;
                case "Stone":
                    valOutput = valInput / 6350293180
                    break;
                case "Pound":
                    valOutput = valInput / 453599904
                    break;
                case "Ounce":
                    valOutput = valInput / 28349523.1
                    break;
            }
            break;

        case "Miligram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 1000
                    break;
                case "Miligram":
                    valOutput = valInput
                    break;
                case "Centigram":
                    valOutput = valInput / 10
                    break;
                case "Decigram":
                    valOutput = valInput / 100
                    break;
                case "Gram":
                    valOutput = valInput / 1000
                    break;
                case "Decagram":
                    valOutput = valInput / 10000
                    break;
                case "Hectogram":
                    valOutput = valInput / 100000
                    break;
                case "Kilogram":
                    valOutput = valInput / 1000000
                    break;
                case "Metric Ton":
                    valOutput = valInput / 1000000000
                    break;
                case "Stone":
                    valOutput = valInput / 6350293.18
                    break;
                case "Pound":
                    valOutput = valInput / 453599.904
                    break;
                case "Ounce":
                    valOutput = valInput / 28349.5231
                    break;
            }
            break;

        case "Centigram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 10000
                    break;
                case "Miligram":
                    valOutput = valInput * 10
                    break;
                case "Centigram":
                    valOutput = valInput 
                    break;
                case "Decigram":
                    valOutput = valInput / 10
                    break;
                case "Gram":
                    valOutput = valInput / 100
                    break;
                case "Decagram":
                    valOutput = valInput / 1000
                    break;
                case "Hectogram":
                    valOutput = valInput / 10000
                    break;
                case "Kilogram":
                    valOutput = valInput / 100000
                    break;
                case "Metric Ton":
                    valOutput = valInput / 100000000
                    break;
                case "Stone":
                    valOutput = valInput / 635029.318
                    break;
                case "Pound":
                    valOutput = valInput / 45359.9904
                    break;
                case "Ounce":
                    valOutput = valInput / 2834.95231
                    break;
            }
            break;

        case "Decigram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 100000
                    break;
                case "Miligram":
                    valOutput = valInput * 100
                    break;
                case "Centigram":
                    valOutput = valInput * 10
                    break;
                case "Decigram":
                    valOutput = valInput 
                    break;
                case "Gram":
                    valOutput = valInput / 10
                    break;
                case "Decagram":
                    valOutput = valInput / 100
                    break;
                case "Hectogram":
                    valOutput = valInput / 1000
                    break;
                case "Kilogram":
                    valOutput = valInput / 10000
                    break;
                case "Metric Ton":
                    valOutput = valInput / 10000000
                    break;
                case "Stone":
                    valOutput = valInput / 63502.9318
                    break;
                case "Pound":
                    valOutput = valInput / 4535.99904
                    break;
                case "Ounce":
                    valOutput = valInput / 283.495231
                    break;
            }
            break;

        case "Gram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 1000000
                    break;
                case "Miligram":
                    valOutput = valInput * 1000
                    break;
                case "Centigram":
                    valOutput = valInput * 100
                    break;
                case "Decigram":
                    valOutput = valInput * 10
                    break;
                case "Gram":
                    valOutput = valInput 
                    break;
                case "Decagram":
                    valOutput = valInput / 10
                    break;
                case "Hectogram":
                    valOutput = valInput / 100
                    break;
                case "Kilogram":
                    valOutput = valInput / 1000
                    break;
                case "Metric Ton":
                    valOutput = valInput / 1000000
                    break;
                case "Stone":
                    valOutput = valInput / 6350.29318
                    break;
                case "Pound":
                    valOutput = valInput / 453.599904
                    break;
                case "Ounce":
                    valOutput = valInput / 28.3495231
                    break;
            }
            break;

        case "Decagram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 10000000
                    break;
                case "Miligram":
                    valOutput = valInput * 10000
                    break;
                case "Centigram":
                    valOutput = valInput * 1000
                    break;
                case "Decigram":
                    valOutput = valInput * 100
                    break;
                case "Gram":
                    valOutput = valInput * 10
                case "Decagram":
                    valOutput = valInput 
                    break;
                case "Hectogram":
                    valOutput = valInput / 10
                    break;
                case "Kilogram":
                    valOutput = valInput / 100
                    break;
                case "Metric Ton":
                    valOutput = valInput / 100000
                    break;
                case "Stone":
                    valOutput = valInput / 635.029318
                    break;
                case "Pound":
                    valOutput = valInput / 45.3599904
                    break;
                case "Ounce":
                    valOutput = valInput / 2.83495231
                    break;
            }
            break;

        case "Hectogram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 100000000
                    break;
                case "Miligram":
                    valOutput = valInput * 100000
                    break;
                case "Centigram":
                    valOutput = valInput * 10000
                    break;
                case "Decigram":
                    valOutput = valInput * 1000
                    break;
                case "Gram":
                    valOutput = valInput * 100
                    break;
                case "Decagram":
                    valOutput = valInput * 10
                    break;
                case "Hectogram":
                    valOutput = valInput
                    break;
                case "Kilogram":
                    valOutput = valInput / 10
                    break;
                case "Metric Ton":
                    valOutput = valInput / 10000
                    break;
                case "Stone":
                    valOutput = valInput / 63.5029318
                    break;
                case "Pound":
                    valOutput = valInput / 4.53599904
                    break;
                case "Ounce":
                    valOutput = valInput / 0.283495231
                    break;
            }
            break;

        case "Kilogram":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 1000000000
                    break;
                case "Miligram":
                    valOutput = valInput * 1000000
                    break;
                case "Centigram":
                    valOutput = valInput * 100000
                    break;
                case "Decigram":
                    valOutput = valInput * 10000
                    break;
                case "Gram":
                    valOutput = valInput * 1000
                    break;
                case "Decagram":
                    valOutput = valInput * 100
                    break;
                case "Hectogram":
                    valOutput = valInput * 10
                    break;
                case "Kilogram":
                    valOutput = valInput 
                    break;
                case "Metric Ton":
                    valOutput = valInput / 1000
                    break;
                case "Stone":
                    valOutput = valInput / 6.35029318
                    break;
                case "Pound":
                    valOutput = valInput / 0.453599904
                    break;
                case "Ounce":
                    valOutput = valInput / 0.0283495231
                    break;
            }
            break;
        case "Metric Ton":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 1000000000000
                    break;
                case "Miligram":
                    valOutput = valInput * 1000000000
                    break;
                case "Centigram":
                    valOutput = valInput * 100000000
                    break;
                case "Decigram":
                    valOutput = valInput * 10000000
                    break;
                case "Gram":
                    valOutput = valInput * 1000000
                    break;
                case "Decagram":
                    valOutput = valInput * 100000
                    break;
                case "Hectogram":
                    valOutput = valInput * 10000
                    break;
                case "Kilogram":
                    valOutput = valInput * 1000
                    break;
                case "Metric Ton":
                    valOutput = valInput 
                    break;
                case "Stone":
                    valOutput = valInput / 0.00635029318
                    break;
                case "Pound":
                    valOutput = valInput / 0.000453599904
                    break;
                case "Ounce":
                    valOutput = valInput / 0.0000283495231
                    break;
            }
            break;

        case "Stone":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 6350293180
                    break;
                case "Miligram":
                    valOutput = valInput * 6350293.18
                    break;
                case "Centigram":
                    valOutput = valInput * 635029.318
                    break;
                case "Decigram":
                    valOutput = valInput * 63502.9318
                    break;
                case "Gram":
                    valOutput = valInput * 6350.29318
                    break;
                case "Decagram":
                    valOutput = valInput * 635.029318
                    break;
                case "Hectogram":
                    valOutput = valInput * 63.5029318
                    break;
                case "Kilogram":
                    valOutput = valInput * 6.35029318
                    break;
                case "Metric Ton":
                    valOutput = valInput * 0.00635029318
                    break;
                case "Stone":
                    valOutput = valInput
                    break;
                case "Pound":
                    valOutput = valInput * 14
                    break;
                case "Ounce":
                    valOutput = valInput * 224
                    break;
            }
            break;

        case "Pound":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 453599904
                    break;
                case "Miligram":
                    valOutput = valInput * 453599.904
                    break;
                case "Centigram":
                    valOutput = valInput * 45359.9904
                    break;
                case "Decigram":
                    valOutput = valInput * 4535.99904
                    break;
                case "Gram":
                    valOutput = valInput * 453.599904
                    break;
                case "Decagram":
                    valOutput = valInput * 45.3599904
                    break;
                case "Hectogram":
                    valOutput = valInput * 4.53599904
                    break;
                case "Kilogram":
                    valOutput = valInput * 0.453599904
                    break;
                case "Metric Ton":
                    valOutput = valInput * 0.000453599904
                    break;
                case "Stone":
                    valOutput = valInput / 14
                    break;
                case "Pound":
                    valOutput = valInput
                    break;
                case "Ounce":
                    valOutput = valInput * 16
                    break;
            }
            break;
        case "Ounce":
            switch(unitOutput){
                case "Microgram":
                    valOutput = valInput * 28349523.1
                    break;
                case "Miligram":
                    valOutput = valInput * 28349.5231
                    break;
                case "Centigram":
                    valOutput = valInput * 2834.95231
                    break;
                case "Decigram":
                    valOutput = valInput * 283.495231
                    break;
                case "Gram":
                    valOutput = valInput * 28.3495231
                    break;
                case "Decagram":
                    valOutput = valInput * 2.83495231
                    break;
                case "Hectogram":
                    valOutput = valInput * 0.283495231
                    break;
                case "Kilogram":
                    valOutput = valInput * 0.0283495231
                    break;
                case "Metric Ton":
                    valOutput = valInput * 0.0000283495231
                    break;
                case "Stone":
                    valOutput = valInput / 224
                    break;
                case "Pound":
                    valOutput = valInput / 16
                    break;
                case "Ounce":
                    valOutput = valInput
                    break;
            }
            break;
    }

    return valOutput
}