const fieldMap = new Map([
  [
    "Expense",
    new Map([
      [
        "amount",
        {
          label: "Amount",
          min: -999999999999,
          max: 999999999999,
          pts: 2,
          dollar: true,
        },
      ],
      [
        "isOneTime",
        {
          label: "One Time Payment?",
          check: true,
        },
      ],
      [
        "oneTimeDate",
        {
          label: "Date",
          datePicker: true,
        },
      ],
      [
        "monthly",
        {
          label: "Monthly?",
          check: true,
        },
      ],
      [
        "reqTimeDay",
        {
          label: "Day",
          min: 0,
          max: 31,
          pts: 2,
          dollar: false,
        },
      ],
      [
        "reqTimeMonth",
        {
          label: "Month",
          min: 0,
          max: 12,
          pts: 2,
          dollar: false,
        },
      ],
      [
        "department",
        {
          label: "Department",
          placeHolder: "Enter the department here...",
        },
      ],
      [
        "more",
        {
          label: "Description",
          placeHolder: "Enter the description here...",
        },
      ],
    ]),
  ],
]);

export default fieldMap;
