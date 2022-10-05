const fieldMap = new Map([
  [
    "Expense",
    new Map([
      [
        "amount",
        {
          label: "Amount",
          placeHolder: "Insert your Ammount in USD...",
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
          label: "Ending Time",
          check: "Monthly",
        },
      ],
      [
        "reqTimeDay",
        {
          label: "Day",
          datePicker: true,
        },
      ],
      [
        "reqTimeMonth",
        {
          label: "Month",
          datePicker: true,
        },
      ],
      [
        "department",
        {
          label: "Department",
          placeHolder: "Enter the department here...",
        },
      ],
    ]),
  ],
]);

export default fieldMap;
