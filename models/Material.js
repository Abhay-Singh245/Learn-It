import mongoose from "mongoose";

const schema = new mongoose.Schema({
   
  type : {
         string ,
  },
  views: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Material = mongoose.model("Material", schema);
