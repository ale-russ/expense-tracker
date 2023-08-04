const ExpenseSchema = require("../models/ExpenseModule");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All Fields Are Required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }

    await expense.save();
    res.status(200).json({ message: "Expense Added!" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log("Params:", req.params);
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted!" });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ message: "Server Error" });
    });
};
