export const getFactor = (pQ : string, unitInput : string, unitOutput : string) => {
    let factor;
    switch(pQ){
        case("Length"):
            factor = getFactorLength(unitInput, unitOutput)
            break
        case("Mass"):
            factor = getFactorMass(unitInput, unitOutput)
            break
        default:
            factor = 1
            break
    }
    return factor
}

export const getFactorLength = (unitInput : string, unitOutput : string) : number => {
    let factor : number = 0;
    
    switch(unitInput){
        case "Milimeter":
            switch(unitOutput){
                case "Milimeter":
                    factor = 1
                    break;
                case "Centimeter":
                    factor = 0.1
                    break;
                case "Decimeter":
                    factor = 0.01
                    break;
                case "Meter":
                    factor = 0.001
                    break;
                case "Decameter":
                    factor = 0.0001
                    break;
                case "Hectometer":
                    factor = 0.00001
                    break;
                case "Kilometer":
                    factor = 0.000001
                    break;
            }
            break;
        case "Centimeter":
            switch(unitOutput){
                case "Milimeter":
                    factor = 10
                    break;
                case "Centimeter":
                    factor = 1
                    break;
                case "Decimeter":
                    factor = 0.1
                    break;
                case "Meter":
                    factor = 0.01
                    break;
                case "Decameter":
                    factor = 0.001
                    break;
                case "Hectometer":
                    factor = 0.0001
                    break;
                case "Kilometer":
                    factor = 0.00001
                    break;
            }
            break;
        case "Decimeter":
            switch(unitOutput){
                case "Milimeter":
                    factor = 100 
                    break;
                case "Centimeter":
                    factor = 10
                    break;
                case "Decimeter":
                    factor = 1
                    break;
                case "Meter":
                    factor = 0.1
                    break;
                case "Decameter":
                    factor = 0.01
                    break;
                case "Hectometer":
                    factor = 0.001
                    break;
                case "Kilometer":
                    factor = 0.0001
                    break;
            }
            break;
        case "Meter":
            switch(unitOutput){
                case "Milimeter":
                    factor = 1000
                    break;
                case "Centimeter":
                    factor = 100
                    break;
                case "Decimeter":
                    factor = 10
                    break;
                case "Meter":
                    factor = 1
                    break;
                case "Decameter":
                    factor = 0.1
                    break;
                case "Hectometer":
                    factor = 0.01
                    break;
                case "Kilometer":
                    factor = 0.001
                    break;
            }
            break;
        case "Decameter":
            switch(unitOutput){
                case "Milimeter":
                    factor = 10000
                    break;
                case "Centimeter":
                    factor = 1000
                    break;
                case "Decimeter":
                    factor = 100
                    break;
                case "Meter":
                    factor = 10
                    break;
                case "Decameter":
                    factor = 1
                    break;
                case "Hectometer":
                    factor = 0.1
                    break;
                case "Kilometer":
                    factor = 0.01
                    break;
            }
            break;
        case "Hectometer":
            switch(unitOutput){
                case "Milimeter":
                    factor = 100000
                    break;
                case "Centimeter":
                    factor = 10000
                    break;
                case "Decimeter":
                    factor = 1000
                    break;
                case "Meter":
                    factor = 100
                    break;
                case "Decameter":
                    factor = 10
                    break;
                case "Hectometer":
                    factor = 1
                    break;
                case "Kilometer":
                    factor = 0.1
                    break;
            }
            break;
        case "Kilometer":
            switch(unitOutput){
                case "Milimeter":
                    factor = 1000000
                    break;
                case "Centimeter":
                    factor = 100000
                    break;
                case "Decimeter":
                    factor = 10000
                    break;
                case "Meter":
                    factor = 1000
                    break;
                case "Decameter":
                    factor = 100
                    break;
                case "Hectometer":
                    factor = 10
                    break;
                case "Kilometer":
                    factor = 1
                    break;
            }
            break;
    }

    return factor
}

export const getFactorMass = (unitInput : string, unitOutput : String) => {
    
    let factor = 0;

    switch(unitInput){
        
        case "Microgram":
            switch(unitOutput){
                case "Microgram":
                    factor = 1
                    break;
                case "Miligram":
                    factor = 0.001
                    break;
                case "Centigram":
                    factor = 0.0001
                    break;
                case "Decigram":
                    factor = 0.00001
                    break;
                case "Gram":
                    factor = 0.000001
                    break;
                case "Decagram":
                    factor = 0.0000001
                    break;
                case "Hectogram":
                    factor = 0.00000001
                    break;
                case "Kilogram":
                    factor = 0.000000001
                    break;
                case "Metric Ton":
                    factor = 0.000000000001
                    break;
                case "Stone":
                    factor = 0.000000000157473044
                    break;
                case "Pound":
                    factor = 0.000000002204586
                    break;
                case "Ounce":
                    factor = 0.0000000352739
                    break;
            }
            break;

        case "Miligram":
            switch(unitOutput){
                case "Microgram":
                    factor = 1000
                    break;
                case "Miligram":
                    factor = 1
                    break;
                case "Centigram":
                    factor = 0.1
                    break;
                case "Decigram":
                    factor = 0.01
                    break;
                case "Gram":
                    factor = 0.001
                    break;
                case "Decagram":
                    factor = 0.0001
                    break;
                case "Hectogram":
                    factor = 0.00001
                    break;
                case "Kilogram":
                    factor = 0.000001
                    break;
                case "Metric Ton":
                    factor = 0.000000001
                    break;
                case "Stone":
                    factor = 0.000000157473044
                    break;
                case "Pound":
                    factor = 0.000002204586
                    break;
                case "Ounce":
                    factor = 0.0000352739
                    break;
            }
            break;

        case "Centigram":
            switch(unitOutput){
                case "Microgram":
                    factor = 10000
                    break;
                case "Miligram":
                    factor = 10
                    break;
                case "Centigram":
                    factor = 1
                    break;
                case "Decigram":
                    factor = 0.1
                    break;
                case "Gram":
                    factor = 0.01
                    break;
                case "Decagram":
                    factor = 0.001
                    break;
                case "Hectogram":
                    factor = 0.0001
                    break;
                case "Kilogram":
                    factor = 0.00001
                    break;
                case "Metric Ton":
                    factor = 0.00000001
                    break;
                case "Stone":
                    factor = 0.00000157473044
                    break;
                case "Pound":
                    factor = 0.00002204586
                    break;
                case "Ounce":
                    factor = 0.000352739
                    break;
            }
            break;

        case "Decigram":
            switch(unitOutput){
                case "Microgram":
                    factor = 100000
                    break;
                case "Miligram":
                    factor = 100
                    break;
                case "Centigram":
                    factor = 10
                    break;
                case "Decigram":
                    factor = 1
                    break;
                case "Gram":
                    factor = 0.1
                    break;
                case "Decagram":
                    factor = 0.01
                    break;
                case "Hectogram":
                    factor = 0.001
                    break;
                case "Kilogram":
                    factor = 0.0001
                    break;
                case "Metric Ton":
                    factor = 0.0000001
                    break;
                case "Stone":
                    factor = 0.0000157473044
                    break;
                case "Pound":
                    factor = 0.0002204586
                    break;
                case "Ounce":
                    factor = 0.00352739
                    break;
            }
            break;

        case "Gram":
            switch(unitOutput){
                case "Microgram":
                    factor = 1000000
                    break;
                case "Miligram":
                    factor = 1000
                    break;
                case "Centigram":
                    factor = 100
                    break;
                case "Decigram":
                    factor = 10
                    break;
                case "Gram":
                    factor = 1
                    break;
                case "Decagram":
                    factor = 0.1
                    break;
                case "Hectogram":
                    factor = 0.01
                    break;
                case "Kilogram":
                    factor = 0.001
                    break;
                case "Metric Ton":
                    factor = 0.000001
                    break;
                case "Stone":
                    factor = 0.000157473044
                    break;
                case "Pound":
                    factor = 0.002204586
                    break;
                case "Ounce":
                    factor = 0.0352739
                    break;
            }
            break;

        case "Decagram":
            switch(unitOutput){
                case "Microgram":
                    factor = 10000000
                    break;
                case "Miligram":
                    factor = 10000
                    break;
                case "Centigram":
                    factor = 1000
                    break;
                case "Decigram":
                    factor = 100
                    break;
                case "Gram":
                    factor = 10
                    break;
                case "Decagram":
                    factor = 1
                    break;
                case "Hectogram":
                    factor = 0.1
                    break;
                case "Kilogram":
                    factor = 0.01
                    break;
                case "Metric Ton":
                    factor = 0.00001
                    break;
                case "Stone":
                    factor = 0.00157473044
                    break;
                case "Pound":
                    factor = 0.02204586
                    break;
                case "Ounce":
                    factor = 0.352739
                    break;
            }
            break;

        case "Hectogram":
            switch(unitOutput){
                case "Microgram":
                    factor = 100000000
                    break;
                case "Miligram":
                    factor = 100000
                    break;
                case "Centigram":
                    factor = 10000
                    break;
                case "Decigram":
                    factor = 1000
                    break;
                case "Gram":
                    factor = 100
                    break;
                case "Decagram":
                    factor = 10
                    break;
                case "Hectogram":
                    factor = 1
                    break;
                case "Kilogram":
                    factor = 0.1
                    break;
                case "Metric Ton":
                    factor = 0.0001
                    break;
                case "Stone":
                    factor = 0.0157473044
                    break;
                case "Pound":
                    factor = 0.2204586
                    break;
                case "Ounce":
                    factor = 3.52739
                    break;
            }
            break;

        case "Kilogram":
            switch(unitOutput){
                case "Microgram":
                    factor = 1000000000
                    break;
                case "Miligram":
                    factor = 1000000
                    break;
                case "Centigram":
                    factor = 100000
                    break;
                case "Decigram":
                    factor = 10000
                    break;
                case "Gram":
                    factor = 1000
                    break;
                case "Decagram":
                    factor = 100
                    break;
                case "Hectogram":
                    factor = 10
                    break;
                case "Kilogram":
                    factor = 1
                    break;
                case "Metric Ton":
                    factor = 0.001
                    break;
                case "Stone":
                    factor = 0.157473044
                    break;
                case "Pound":
                    factor = 2.204586
                    break;
                case "Ounce":
                    factor = 35.2739
                    break;
            }
            break;

        case "Metric Ton":
            switch(unitOutput){
                case "Microgram":
                    factor = 1000000000000
                    break;
                case "Miligram":
                    factor = 1000000000
                    break;
                case "Centigram":
                    factor = 100000000
                    break;
                case "Decigram":
                    factor = 10000000
                    break;
                case "Gram":
                    factor = 1000000
                    break;
                case "Decagram":
                    factor = 100000
                    break;
                case "Hectogram":
                    factor = 10000
                    break;
                case "Kilogram":
                    factor = 1000
                    break;
                case "Metric Ton":
                    factor = 1
                    break;
                case "Stone":
                    factor = 157.473044
                    break;
                case "Pound":
                    factor = 2204.586
                    break;
                case "Ounce":
                    factor = 35273.9
                    break;
            }
            break;

        case "Stone":
            switch(unitOutput){
                case "Microgram":
                    factor = 6350290000
                    break;
                case "Miligram":
                    factor = 6350290
                    break;
                case "Centigram":
                    factor = 635029
                    break;
                case "Decigram":
                    factor = 63502.9
                    break;
                case "Gram":
                    factor = 6350.29
                    break;
                case "Decagram":
                    factor = 635.029
                    break;
                case "Hectogram":
                    factor = 63.5029
                    break;
                case "Kilogram":
                    factor = 6.35029
                    break;
                case "Metric Ton":
                    factor = 6.35029
                    break;
                case "Stone":
                    factor = 1
                    break;
                case "Pound":
                    factor = 14
                    break;
                case "Ounce":
                    factor = 224
                    break;
            }
            break;

        case "Pound":
            switch(unitOutput){
                case "Microgram":
                    factor = 453592000
                    break;
                case "Miligram":
                    factor = 453592
                    break;
                case "Centigram":
                    factor = 45359.2
                    break;
                case "Decigram":
                    factor = 4535.92
                    break;
                case "Gram":
                    factor = 453.592
                    break;
                case "Decagram":
                    factor = 45.3592
                    break;
                case "Hectogram":
                    factor = 4.53592
                    break;
                case "Kilogram":
                    factor = 0.453592
                    break;
                case "Metric Ton":
                    factor = 0.000453592
                    break;
                case "Stone":
                    factor = 0.0714286
                    break;
                case "Pound":
                    factor = 1
                    break;
                case "Ounce":
                    factor = 16
                    break;
            }
            break;

        case "Ounce":
            switch(unitOutput){
                case "Microgram":
                    factor = 28349500
                    break;
                case "Miligram":
                    factor = 28349.5
                    break;
                case "Centigram":
                    factor = 2834.95
                    break;
                case "Decigram":
                    factor = 283.495
                    break;
                case "Gram":
                    factor = 28.3495
                    break;
                case "Decagram":
                    factor = 2.83495
                    break;
                case "Hectogram":
                    factor = 0.283495
                    break;
                case "Kilogram":
                    factor = 0.0283495
                    break;
                case "Metric Ton":
                    factor = 0.0000283495
                    break;
                case "Stone":
                    factor = 0.00446428
                    break;
                case "Pound":
                    factor = 0.0625
                    break;
                case "Ounce":
                    factor = 1
                    break;
            }
            break;

        
    }

    return factor
}

export const lengthConverter = (valInput : number, unitInput : string, unitOutput : string) => {
    let factor = getFactorLength(unitInput, unitOutput)
    let valOutput = valInput * factor;
    return valOutput
}

export const massConverter = (valInput : number, unitInput : string, unitOutput : String) => {
    let factor = getFactorMass(unitInput, unitOutput)
    let valOutput = valInput * factor
    return valOutput

    // let valOutput;

    // switch(unitInput){
    //     case "Microgram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput / 10000
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput / 100000
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput / 1000000
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput / 10000000
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 100000000
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 1000000000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 1000000000000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 6350293180
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 453599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 28349523.1
    //                 break;
    //         }
    //         break;

    //     case "Miligram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput / 100
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput / 10000
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 100000
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 1000000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 1000000000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 6350293.18
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 453599.904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 28349.5231
    //                 break;
    //         }
    //         break;

    //     case "Centigram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 10000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 10
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput 
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput / 100
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 10000
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 100000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 100000000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 635029.318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 45359.9904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 2834.95231
    //                 break;
    //         }
    //         break;

    //     case "Decigram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 100000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 100
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 10
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput 
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput / 100
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 10000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 10000000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 63502.9318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 4535.99904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 283.495231
    //                 break;
    //         }
    //         break;

    //     case "Gram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 1000000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 100
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 10
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput 
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 100
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 1000000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 6350.29318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 453.599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 28.3495231
    //                 break;
    //         }
    //         break;

    //     case "Decagram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 10000000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 10000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 100
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 10
    //             case "Decagram":
    //                 valOutput = valInput 
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 100
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 100000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 635.029318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 45.3599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 2.83495231
    //                 break;
    //         }
    //         break;

    //     case "Hectogram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 100000000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 100000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 10000
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 100
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 10
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput / 10
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 10000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 63.5029318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 4.53599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 0.283495231
    //                 break;
    //         }
    //         break;

    //     case "Kilogram":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 1000000000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 1000000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 100000
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 10000
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 100
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput * 10
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput 
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput / 1000
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 6.35029318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 0.453599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 0.0283495231
    //                 break;
    //         }
    //         break;
    //     case "Metric Ton":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 1000000000000
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 1000000000
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 100000000
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 10000000
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 1000000
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 100000
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput * 10000
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput * 1000
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput 
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 0.00635029318
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 0.000453599904
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput / 0.0000283495231
    //                 break;
    //         }
    //         break;

    //     case "Stone":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 6350293180
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 6350293.18
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 635029.318
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 63502.9318
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 6350.29318
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 635.029318
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput * 63.5029318
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput * 6.35029318
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput * 0.00635029318
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput * 14
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput * 224
    //                 break;
    //         }
    //         break;

    //     case "Pound":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 453599904
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 453599.904
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 45359.9904
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 4535.99904
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 453.599904
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 45.3599904
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput * 4.53599904
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput * 0.453599904
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput * 0.000453599904
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 14
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput * 16
    //                 break;
    //         }
    //         break;
    //     case "Ounce":
    //         switch(unitOutput){
    //             case "Microgram":
    //                 valOutput = valInput * 28349523.1
    //                 break;
    //             case "Miligram":
    //                 valOutput = valInput * 28349.5231
    //                 break;
    //             case "Centigram":
    //                 valOutput = valInput * 2834.95231
    //                 break;
    //             case "Decigram":
    //                 valOutput = valInput * 283.495231
    //                 break;
    //             case "Gram":
    //                 valOutput = valInput * 28.3495231
    //                 break;
    //             case "Decagram":
    //                 valOutput = valInput * 2.83495231
    //                 break;
    //             case "Hectogram":
    //                 valOutput = valInput * 0.283495231
    //                 break;
    //             case "Kilogram":
    //                 valOutput = valInput * 0.0283495231
    //                 break;
    //             case "Metric Ton":
    //                 valOutput = valInput * 0.0000283495231
    //                 break;
    //             case "Stone":
    //                 valOutput = valInput / 224
    //                 break;
    //             case "Pound":
    //                 valOutput = valInput / 16
    //                 break;
    //             case "Ounce":
    //                 valOutput = valInput
    //                 break;
    //         }
    //         break;
    // }

    // return valOutput
}