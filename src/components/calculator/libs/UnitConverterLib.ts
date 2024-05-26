export const unitConvert = (pQ : string, inputVal : number, unitInput : string, unitOutput : string) : number => {
    let factor = getFactor(pQ, unitInput, unitOutput)
    let conversionResult = inputVal * factor
    return conversionResult
}

export const getFactor = (pQ : string, unitInput : string, unitOutput : string) => {
    let factor;
    switch(pQ){
        case("Length"):
            factor = getFactorLength(unitInput, unitOutput)
            break
        case("Mass"):
            factor = getFactorMass(unitInput, unitOutput)
            break
        case("Time"):
            factor = getFactorTime(unitInput, unitOutput)
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

export const getFactorTime = (unitInput : string, unitOutput : string) : number => {
    let factor = 0;

    switch(unitInput){
        
        case "Nanosecond":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 1
                    break;
                case "Microsecond":
                    factor = 1e-3
                    break;
                case "Milisecond":
                    factor = 1e-6
                    break;
                case "Second":
                    factor = 1e-9
                    break;
                case "Minute":
                    factor = 1.6667e-11
                    break;
                case "Hour":
                    factor = 2.7778e-13
                    break;
                case "Day":
                    factor = 1.1547e-14
                    break;
                case "Week":
                    factor = 1.6534e-15
                    break;
                case "Month":
                    factor = 3.8052e-16
                    break;
                case "Year":
                    factor = 3.1689e-17
                    break;
                case "Decade":
                    factor = 3.1689e-18
                    break;
                case "Century":
                    factor = 3.1689e-19
                    break;
            }
            break;

        case "Microsecond":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 1e3
                    break;
                case "Microsecond":
                    factor = 1
                    break;
                case "Milisecond":
                    factor = 1e-3
                    break;
                case "Second":
                    factor = 1e-6
                    break;
                case "Minute":
                    factor = 1.6667e-8
                    break;
                case "Hour":
                    factor = 2.7778e-10
                    break;
                case "Day":
                    factor = 1.1547e-11
                    break;
                case "Week":
                    factor = 1.6534e-12
                    break;
                case "Month":
                    factor = 3.8052e-13
                    break;
                case "Year":
                    factor = 3.1689e-14
                    break;
                case "Decade":
                    factor = 3.1689e-15
                    break;
                case "Century":
                    factor = 3.1689e-16
                    break;
            }
            break;

        case "Milisecond":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 1e6
                    break;
                case "Microsecond":
                    factor = 1e3
                    break;
                case "Milisecond":
                    factor = 1
                    break;
                case "Second":
                    factor = 1e-3
                    break;
                case "Minute":
                    factor = 1.6667e-5
                    break;
                case "Hour":
                    factor = 2.7778e-7
                    break;
                case "Day":
                    factor = 1.1547e-8
                    break;
                case "Week":
                    factor = 1.6534e-9
                    break;
                case "Month":
                    factor = 3.8052e-10
                    break;
                case "Year":
                    factor = 3.1689e-11
                    break;
                case "Decade":
                    factor = 3.1689e-12
                    break;
                case "Century":
                    factor = 3.1689e-13
                    break;
            }
            break;

        case "Second":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 1e9
                    break;
                case "Microsecond":
                    factor = 1e6
                    break;
                case "Milisecond":
                    factor = 1e3
                    break;
                case "Second":
                    factor = 1
                    break;
                case "Minute":
                    factor = 1.6667e-2
                    break;
                case "Hour":
                    factor = 2.7778e-4
                    break;
                case "Day":
                    factor = 1.1547e-5
                    break;
                case "Week":
                    factor = 1.6534e-6
                    break;
                case "Month":
                    factor = 3.8052e-7
                    break;
                case "Year":
                    factor = 3.1689e-8
                    break;
                case "Decade":
                    factor = 3.1689e-9
                    break;
                case "Century":
                    factor = 3.1689e-10
                    break;
            }
            break;

        case "Minute":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 6e10
                    break;
                case "Microsecond":
                    factor = 6e7
                    break;
                case "Milisecond":
                    factor = 6e4
                    break;
                case "Second":
                    factor = 60
                    break;
                case "Minute":
                    factor = 1
                    break;
                case "Hour":
                    factor = 1.6667e-2
                    break;
                case "Day":
                    factor = 6.9444e-4
                    break;
                case "Week":
                    factor = 9.9206e-5
                    break;
                case "Month":
                    factor = 2.2831e-5
                    break;
                case "Year":
                    factor = 1.9013e-6
                    break;
                case "Decade":
                    factor = 1.9013e-7
                    break;
                case "Century":
                    factor = 1.9013e-8
                    break;
            }
            break;

        case "Hour":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 3.6e12
                    break;
                case "Microsecond":
                    factor = 3.6e9
                    break;
                case "Milisecond":
                    factor = 3.6e6
                    break;
                case "Second":
                    factor = 3.6e3
                    break;
                case "Minute":
                    factor = 60
                    break;
                case "Hour":
                    factor = 1
                    break;
                case "Day":
                    factor = 3.1667e-2
                    break;
                case "Week":
                    factor = 5.9524e-3
                    break;
                case "Month":
                    factor = 1.3699e-3
                    break;
                case "Year":
                    factor = 1.1416e-4
                    break;
                case "Decade":
                    factor = 1.1416e-5
                    break;
                case "Century":
                    factor = 1.1416e-6
                    break;
            }
            break;

        case "Day":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 8.64e13
                    break;
                case "Microsecond":
                    factor = 8.64e10
                    break;
                case "Milisecond":
                    factor = 8.64e7
                    break;
                case "Second":
                    factor = 8.64e4
                    break;
                case "Minute":
                    factor = 1440
                    break;
                case "Hour":
                    factor = 24
                    break;
                case "Day":
                    factor = 1
                    break;
                case "Week":
                    factor = 1.4286e-1
                    break;
                case "Month":
                    factor = 3.2877e-2
                    break;
                case "Year":
                    factor = 2.7379e-3
                    break;
                case "Decade":
                    factor = 2.7379e-4
                    break;
                case "Century":
                    factor = 2.7379e-5
                    break;
            }
            break;

        case "Week":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 6.048e14
                    break;
                case "Microsecond":
                    factor = 6.048e11
                    break;
                case "Milisecond":
                    factor = 6.048e8
                    break;
                case "Second":
                    factor = 6.048e5
                    break;
                case "Minute":
                    factor = 10080
                    break;
                case "Hour":
                    factor = 168
                    break;
                case "Day":
                    factor = 7
                    break;
                case "Week":
                    factor = 1
                    break;
                case "Month":
                    factor = 2.3026e-1
                    break;
                case "Year":
                    factor = 1.9178e-2
                    break;
                case "Decade":
                    factor = 1.9178e-3
                    break;
                case "Century":
                    factor = 1.9178e-4
                    break;
            }
            break;

        case "Month":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 2.63e15
                    break;
                case "Microsecond":
                    factor = 2.63e12
                    break;
                case "Milisecond":
                    factor = 2.63e9
                    break;
                case "Second":
                    factor = 2.63e6
                    break;
                case "Minute":
                    factor = 4.38e4
                    break;
                case "Hour":
                    factor = 730
                    break;
                case "Day":
                    factor = 30.42
                    break;
                case "Week":
                    factor = 4.345
                    break;
                case "Month":
                    factor = 1
                    break;
                case "Year":
                    factor = 8.2201e-2
                    break;
                case "Decade":
                    factor = 8.2201e-3
                    break;
                case "Century":
                    factor = 8.2201e-4
                    break;
            }
            break;

        case "Year":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 3.1557e16
                    break;
                case "Microsecond":
                    factor = 3.1557e13
                    break;
                case "Milisecond":
                    factor = 3.1557e10
                    break;
                case "Second":
                    factor = 3.1557e7
                    break;
                case "Minute":
                    factor = 5.2595e5
                    break;
                case "Hour":
                    factor = 8766
                    break;
                case "Day":
                    factor = 365.25
                    break;
                case "Week":
                    factor = 52.18
                    break;
                case "Month":
                    factor = 12
                    break;
                case "Year":
                    factor = 1
                    break;
                case "Decade":
                    factor = 1e-1
                    break;
                case "Century":
                    factor = 1e-2
                    break;
            }
            break;

        case "Decade":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 3.1557e17
                    break;
                case "Microsecond":
                    factor = 3.1557e14
                    break;
                case "Milisecond":
                    factor = 3.1557e11
                    break;
                case "Second":
                    factor = 3.1557e8
                    break;
                case "Minute":
                    factor = 5.2595e6
                    break;
                case "Hour":
                    factor = 87660
                    break;
                case "Day":
                    factor = 3652.5
                    break;
                case "Week":
                    factor = 521.8
                    break;
                case "Month":
                    factor = 120
                    break;
                case "Year":
                    factor = 10
                    break;
                case "Decade":
                    factor = 1
                    break;
                case "Century":
                    factor = 1e-1
                    break;
            }
            break;

        case "Century":
            switch(unitOutput){
                case "Nanosecond":
                    factor = 3.1557e18
                    break;
                case "Microsecond":
                    factor = 3.1557e15
                    break;
                case "Milisecond":
                    factor = 3.1557e12
                    break;
                case "Second":
                    factor = 3.1557e9
                    break;
                case "Minute":
                    factor = 5.2595e7
                    break;
                case "Hour":
                    factor = 876600
                    break;
                case "Day":
                    factor = 36525
                    break;
                case "Week":
                    factor = 5218
                    break;
                case "Month":
                    factor = 1200
                    break;
                case "Year":
                    factor = 100
                    break;
                case "Decade":
                    factor = 10
                    break;
                case "Century":
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

export const massConverter = (valInput : number, unitInput : string, unitOutput : string) => {
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

export const timeConverter = (valInput : number, unitInput : string, unitOutput : string) : number => {
    return valInput * getFactorTime(unitInput, unitOutput)
}