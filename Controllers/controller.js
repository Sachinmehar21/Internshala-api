exports.homepage =  catchAsyncErrors(async (req,res,next) => {
    res.json({ message: 'Hello' });
});