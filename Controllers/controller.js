const { catchAsyncErrors } = require("../Middlewares/catchAsyncError");

exports.homepage =  catchAsyncErrors(async (req,res,next) => {
    res.json({ message: 'Hello' });
});