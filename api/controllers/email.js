sendEmail = async (req, res) => {
  try {
    const {} = req.body;

    res.status(200).json({
      message: "Check your mail!",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
