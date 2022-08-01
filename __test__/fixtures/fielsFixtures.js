export const initialState = {
    response: {
        ok: false,
        status: 0,
        code: '',
        message: ''
    },
    data: [],
    active: null
};

export const finalState = {
    response: {
        ok: false,
        status: 0,
        code: '',
        message: ''
    },
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
    response: {
        ok: false,
        status: 0,
        code: '',
        message: ''
    },
    data: [ ],
    active: null
};

export const finalStateSingle = {
    response: {
        ok: false,
        status: 0,
        code: '',
        message: ''
    },
    data: [ ],
    active: [
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
    ]
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