const mongoose = require('mongoose');
const slugify = require('slugify');

const ResortcampShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 150 characters']
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description can not be more than 500 characters']
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
      ]
    },
    phone: {
      type: String,
      maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    address: {
      type: String,
      required: [true, 'Please add an address']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Create resort slug from the name
ResortcampShema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Cascade delete places when a resort is deleted
ResortcampShema.pre('remove', async function(next) {
  console.log(`Resorts being removed from resort camps ${this._id}`);
  await this.model('Resort').deleteMany({ resortcamp: this._id });
  next();
});

// Reverse populate with virtuals
ResortcampShema.virtual('resorts', {
  ref: 'resort',
  localField: '_id',
  foreignField: 'resortcamp',
  justOne: false
});

module.exports = mongoose.model('Resortcamp', ResortcampShema);