import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const VerseSchema = new Schema({
  index: Number,
  surah: Number,
  verse : Number,
  text : String,
  translation: {
    type: String,
    default: ''
  }
}, { id: false, versionKey: false });

VerseSchema.options.toJSON = VerseSchema.options.toJSON || {};
VerseSchema.options.toJSON.transform = (doc, ret) => {
  delete ret.__v;
  return ret;
};

const Verse = mongoose.model('verse', VerseSchema);

export default Verse;
