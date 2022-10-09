const Resortcamp = require('../models/Resortcamp');



//@description   Get all resortcamps
//@route         Get/api/v1/bootcamps
//@access        Public
exports.getResortcamps = async (req, res, next) => {
    try {
        const resortcamps = await Resortcamp.find();

        res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
    } catch (err) {
        res.status(400).json({ success: false });
    }    
};


//@description   Get single resortcamp
//@route         Get/api/v1/bootcamps/:id
//@access        Public
exports.getResortcamp = async (req, res, next) => {
    try {
        const resortcamp = await Resortcamp.findById(req.params.id);

        if (!resortcamp) {
            return res.status(400).json({ success: true, data: resortcamp });
        }
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

//@description   Create a resortcamp
//@route         POST/api/v1/bootcamps/
//@access        Private
exports.createResortcamp = async (req, res, next) => {
    try{
        const resortcamp = await Resortcamp.create(req.body);

        res.status(201).json({
        success: true,
        data: resortcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

//@description   Update a resortcamp
//@route         PUT/api/v1/bootcamps/:id
//@access        Private
exports.updateResortcamp = async (req, res, next) => {
    const resortcamp = await Resortcamp.findByIdAndUpdate( req.params.id, req.body, {
        new: true, 
        runValidators: true
    });

    if(!resortcamp) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: resortcamp });

};

//@description   Delete a resortcamp
//@route         DELETE/api/v1/bootcamps/:id
//@access        Private
exports.deleteResortcamp = async (req, res, next) => {
    try {
        const resortcamp = await Resortcamp.findByIdAndDelete( req.params.id);

    if(!resortcamp) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
   } catch (err) {
    res.status(400).json({ success: false });
    }
};
    

