import mongoose from 'mongoose';

//______________________mongoose connection option 2
export async function dbConnect(){

  console.log('testin db db fired----------------<<<<<<')

  if(mongoose.connection.readyState >= 1) return;
      return await mongoose.connect(process.env.DATABASE_CLOUD, {
        // return await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
        useCreateIndex: true   
  }).then(pass => console.log('db was connected successfully'))
};




