function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );
};

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params;
  if (!id) {
    res.status(404).json({
      message: "user not found"
    });
  } else {
    res.json(req.user);
  }
};

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body;
  if (!name) {
    res.status(400).json({
      message: "missing required name field"
    });
  }
};

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body;
  if (!text) {
    res.status(400).json({
      message: "missing required text field"
    });
  }
};

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};