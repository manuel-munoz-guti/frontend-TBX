export const initialState = {
    loading: true,  //true or false
    data: [],
    active: null
};

export const finalState = {
    loading: false,  //true or false
    data: [
        {
            "file": "test2.csv",
            "lines": [
                {
                    "text": "UFNWbIeTSjoySbvQBMbLqp",
                    "number": 87,
                    "hex": "7ac6f24ef988372576935d449d02176f"
                }
            ]
        }
    ],
    active: null
};

export const finalStateWithNoData = {
    loading: false,  //true or false
    data: [ ],
    active: null
};

export const demoData = [
    {
        "file": "test2.csv",
        "lines": [
            {
                "text": "UFNWbIeTSjoySbvQBMbLqp",
                "number": 87,
                "hex": "7ac6f24ef988372576935d449d02176f"
            }
        ]
    }
];